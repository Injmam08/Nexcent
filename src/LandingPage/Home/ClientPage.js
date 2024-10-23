import React from 'react'
function ClientPage() {
    return ( 
        <>
        <div  className=' text-center'>
            <h1 >
            Our Clients
            
            </h1>
            <p>We have been working with some Fortune 500+ clients</p>

        </div>
       <div  className='Container mb-1 p-5'> 
        <div   className='row mt-1 p-2' style={{marginRight:'10'}}>
         <div className='center1 col-2'><img src='../images/icon1.png' alt='icon'></img></div>
         <div className='center1  col-2'><img src='../images/icon2.png' alt='icon'></img></div>
         <div className='center1  col-2'><img src='../images/icon3.png' alt='icon'></img></div>
         <div className='center1  col-2'><img src='../images/icon4.png' alt='icon'></img></div>
         <div className='center1  col-2'><img src='../images/icon5.png' alt='icon'></img></div>
         <div className='center1  col-2'><img src='../images/icon6.png' alt='icon'></img></div>
         
       </div>
        </div>
        </>
  
     );
}

export default ClientPage;