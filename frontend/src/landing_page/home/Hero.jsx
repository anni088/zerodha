import React from 'react'

function Hero() {
  return (
    <div>
      <div className="container p-5">
        <div className="row text-center">
            <img src="/media/images/homeHero.png" alt="Hero img" className='mb-5'/>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Onlune platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"10rem", margin: "0 auto"}}>SignUp Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
