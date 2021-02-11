import React from 'react'

//import example photo profile
import photoProfile from '../../../assets/images/1.png'

// import css
import './home.css'

function Home() {

  React.useEffect(() => {
    document.title = `Rizki's Dashboard - Walletchip`
  }, [])

  return (
    <>
      <div className="row">
        <div className="card card-balance">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <p style={{ color: "#E0E0E0" }}>Balance</p>
                </div>
                <div className="row">
                  <h2 className="fw-bold text-white">Rp.{`120.000`}</h2>
                </div>
                <div className="row mt-2">
                  <small style={{ color: "#E0E0E0" }}>+62 813-9387-7946</small>
                </div>
              </div>
              <div className="col-3">
                <div className="row my-3">
                  <div className="d-grid">
                    <button className="btn border border-2 py-2 btn-balance-control fw-bold text-white">
                      <i className="far fa-arrow-up me-3" style={{ color: "#E0E0E0" }}></i>
                    Transfer
                  </button>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="d-grid">
                    <button className="btn border border-2 py-2 btn-balance-control fw-bold text-white">
                      <i className="far fa-plus me-3" style={{ color: "#E0E0E0" }}></i>
                    Topup
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row my-2">
              <div className="d-flex justify-content-between">
                <span className="fw-bold">
                  Transaction History
                </span>
                <span style={{ color: "#6379F4" }}>
                  See all
                </span>
              </div>
            </div>
            {
              [1, 2, 3, 4].map(transaction => {
                return (
                  <>
                   <div className="row my-3" key={String(transaction)}>
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-1 d-flex justify-content-center align-items-center">
                            <div className="row">
                              <img src={photoProfile} alt="avatar" className="img-profile-avatar"/>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="row">
                              <span className="fw-bold">Samuel Suhi</span>
                              <small className="text-muted">
                                Transfer
                              </small>
                            </div>
                          </div>
                          <div className="col-2 d-flex align-items-center justify-content-center">
                            <div>
                              <span className="fw-bold transfer-color">
                                +Rp.{`50.000`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
