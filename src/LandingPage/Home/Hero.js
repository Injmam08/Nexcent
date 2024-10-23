import React from 'react'
function Hero() {
    return (
        <div style={{backgroundColor:'#F5F7FA'}} className='container p-5'>
           <div className='row '>
            <div className='col-6  '>
                <h1 className='p-5 ' style={{ fontSize: '60px' }}>Lessons and insights from 8 years</h1>
                <p style={{marginRight:10}} className=' text-center' >Where to grow your business as a photographer: site or social media?</p>
               
                
                <button  className='learn'>Register</button>

            </div>
            <div className='col-1'>

            </div>
            <div className='col-5'>
                <img style={{ height:400 , width:400}} src='../images/Hero.png' alt='Hero img'></img>
            </div>
            
              </div>

        </div>
      );
}

export default Hero;