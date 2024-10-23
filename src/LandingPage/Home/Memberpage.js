import React from 'react'
function Memberpage() {
    return ( 
        <div style={{backgroundColor:'#F5F7FA'}}  className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div  className='col-4 mt-3'>
                    <h2 className='mt-3'>Helping a local business reinvent itself</h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>
                <div className='col-1'></div>
                <div className='member col-4'>
                    <div className='member row-1'>
                    <div className='member1'> <img src='../images/icon10.png' alt='icon'/> <h1>2,245,341</h1>
                    <p>Members</p></div>
                    <div className='member1'> <img  src='../images/icon11.png' alt='icon'/><h1 className='text-center'>2,245,341</h1> <p>Clubs</p></div>
                    </div>

                </div>
                <div className='member1 row-1'><div className='member1'><img  src='../images/icon12.png' alt='icon'/><h1>2,245,341</h1> <p>Event Bookings</p></div>
                    <div className='member1'><img  src='../images/icon13.png' alt='icon'/><h1>2,245,341</h1> <p>Payments</p></div>
                     </div>
                <div className='col-3'></div>

            </div>

        </div>
     );
}

export default Memberpage;