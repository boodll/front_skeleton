const bcrypt = require('bcrypt')
const getPool = require('../common/pool')

const sql = {
  //이메일 중복을 체크하기 위한 sql 문이다.
  //? 는 프로그램 데이터가 들어갈 자리..
  checkId: 'SELECT * FROM user WHERE email = ?',
  signup: 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
}

//DAO - DBMS (데이터베이스 연동) 처리
const userDAO = {
  //item -  클라이언트 요청 데이터..
  //callback - dbms 가 성공한 후에 호출할 개발자 함수..
  signup: async (item, callback) => {
    let conn = null
    try {
      //정상적으로 실행될 로직.
      //pool 에서 connection 획득하고..
      conn = await getPool().getConnection()

      console.log('dao', item)

      //email check sql 실행..
      const [respCheck] = await conn.query(sql.checkId, item.email)
      if (respCheck[0]) {
        //이메일로 selelct 되는 데이터가 있다면 이미 item.email 로 가입된 회원이 있다.
        callback({ status: 500, message: '사용자가 존재합니다' })
      } else {
        //데이터가 없다면 email 중복되지 않는다는 이야기
        //회원가입하게 table 에 insert 하면 된다.
        //유저 password 는hash 문자열로 변형시켜 저장
        const salt = await bcrypt.genSalt()
        bcrypt.hash(item.password, salt, async (error, hash) => {
          if (error) callback({ status: 500, message: '암호화 실패', error: error })
          else {
            //db insert
            const [resp] = await conn.query(sql.signup, [item.name, item.email, hash])
            callback({ status: 200, message: 'OK', data: resp })
          }
        })
      }
    } catch (error) {
      //에러 발생시에 실행될 로직
      return ({ status: 200, message: '유저 입력 실패', error: error })
    } finally {
      //마지막에.. 정상 실행되든, 에러가 발생되든 마지막에 처리할 로직이 있다면
      //사용했던 connection을 pool 에 반환해서 다른곳에서 사용하게..
      if (conn !== null) conn.release()
    }
  },
  login: async (item, callback) => {
    //유저 입력 데이터 획득
    const {email, password} = item
    let conn = null
    try {
      console.log('00')
      conm = await getPool(). getConnection()
      console.log('11')
      //sql문 실행 리턴 값은 db에 저장된 유저 정보
      const [user] = await conn.query(sql.checkId, [email])
      console.log('22', user)
      if(!user[0]){
        //db에 데이터가 없다는 이야기. 유저가 입력한 이메일이 잘못 되었다는 이야기
        callback({status:500, message:'아이디 패스워드 확인 부탁'})
      }else {
        //db에 데이터 있다는 이야기 유저 입력 비밀번호와 db 에서 뽑은 비밀번호 비교
        console.log('33', password, user[0].password)
        //db에 비밀번호가 해시로 저장되어 있어서..
        //유저 입력 비밀번호를 해시로 만들어 비교한다..
        bcrypt.compare(password, user[0].password, async(error, reuslt) =>{
          if(error){
            callback({status:500, message: '아이디 패스워드를 확인 부탁'})
          }else if(reuslt){
            console.log('44')
            callback({status:200, message: 'OK',
              data:{name:user[0].name}, email: user[0].email})
          }else {
            callback({status:500, message: '아이디 패스워드 확인 부탁'})
          }
        })
      }
    } catch (e) {
      return ({ status: 500, message: '로그인 실패', error: error })
    } finally {
      if (conn !== null) conn.release()
    }
  }
}


module.exports = userDAO