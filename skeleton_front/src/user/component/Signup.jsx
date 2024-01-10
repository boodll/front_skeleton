import React, { useCallback, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  //url path 조정하려고
  const navigate = useNavigate()

  //constrolled component 를 위해서
  const [data, setdata] = useState({ name: '', email: '', password: '' })
  //유저 입력 변경 이벤트
  const changeData = useCallback((e) => {
    setdata((data) => ({ ...data, [e.target.name]: e.target.value }))
  }, [])
//submit 버튼 클릭 이벤트
  const signup = useCallback(async (e) => {
    e.preventDefault()
//서버 연동
    const resp = await axios.post('http://localhost8000/users/signup', data)
    if (resp.data.status === 500) window.alert('사용자가 존재 합니다.')
//첫 화면으로 화면 전환
    else navigate('/')
  }, [data, navigate])
  return (
    <main id="main">

      {/* <!-- ======= Intro Single ======= --> */}
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">We Do Great Design For Creative Folks</h1>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Intro Single--> */}

      {/* <!-- ======= About Section ======= --> */}
      <section className="section-about">
        <div className="container">
          <form className="row">
            <div className="col-12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" id="email" name="email" 
              value={data.email} onChange={changeData} />
            </div>
            <div className="col-12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">Password</label>
              <input type="text" className="form-control" id="password" name="password"
              value={data.password} onChange={changeData} />
            </div>
            <div className="col-12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">Name</label>
              <input type="text" className="form-control" id="neme" name="name"
              value={data.name} onChange={changeData} />

              <div className="col-sm12 position-relative form-group">
                <button type="submit" className="btn btn-danger btn-sm" onClick={signup}>send</button>
                <button type="reset" className="btn btn-primary btn-sm">reset</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* <!-- =======Team Section ======= --> */}
      <section className="section-agents section-t8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between">
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="/imagesagent-7.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">Margaret Sotillo
                          <br /> Escala</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="/imagesagent-6.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">Stiven Spilver
                          <br /> Darw</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="/imagesagent-5.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">Emma Toledo
                          <br /> Cascada</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div className="card-footer-d">
                    <div className="socials-footer d-flex justify-content-center">
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section--> */}
    </main>
  )
}

export default SignUp