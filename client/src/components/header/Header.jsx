import React from 'react'

const Header = () => {
  return (
    <>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="row vh-100 bg-dark align-items-center">
                      <div className='col-12 col-md-7 p-5'>
                        <div className='col-10 mx-auto'>
                            <h1 className='fw-bold text-white'>
                              Deliver a frictionless payment experience that delights customers.
                            </h1>

                            <h1 className='fw-light text-white'>
                              Creating a business is a challenging endeavor. Receiving payments should be straightforward.
                            </h1>
                        </div>
                      </div>
                  </div>
              </div>


              <div class="carousel-item">
                 <div className="row vh-100 bg-dark align-items-center"> 
                    <div className='col-12 col-md-7 p-5'>
                      <div className='col-10 mx-auto'>
                        <h1 className='fw-bold text-white'> Banking is personal</h1>
                        <h1 className='fw-light text-white'> We understand personal</h1>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="carousel-item">
                <div className="row vh-100 bg-dark align-items-center">
                  <div className='col-12 col-md-7 p-5'>
                    <div className='col-10 mx-auto'>
                      <h1 className='fw-bold'>
                        <div className='text-danger'>Safeguard</div>
                        <div className='text-white'> Your Account</div>
                      </h1>
                      <p className='text-white'>
                        We would <strong>NEVER</strong> call,SMS or email requesting for <br />
                        your card details, PIN, Token codes, Mobile/Internet <br />
                        Banking login details
                      </p>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default Header