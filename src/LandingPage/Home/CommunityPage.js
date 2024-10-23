import React from 'react'
function CommunityPage() {
    return ( 
        <>
        <div className='container1 '>
           <h2 className='text-center'>Manage your entire community <br/>in a single system</h2>
           <p className='text-center'>Who is Nextcent suitable for?</p>

        </div>
        <div className='row'>
            <div className='col-1'> </div>
            <div  className='col-3 border '>
                <img  className='center' src='../images/icon7.png' alt='icon'/>
                <h2 className='text-center'>Membership Organisations</h2>
                <p className='text-center'>Our membership management<br/> software provides full automation of<br/> membership renewals and payments</p>
                 </div>
               
            <div className='col-1 text-center '> </div>
            
            <div className='col-3 text-center border'>
            <img  className='center' src='../images/icon8.png' alt='icon'/><h2>National <br></br> Associations</h2> 
            
            <p className='text-center'>Our membership management<br/> software provides full automation of<br/> membership renewals and payments</p></div>
            <div className='col-1'> </div>
            <div className='col-3 text-center border'>
            <img  className='center' src='../images/icon9.png' alt='icon'/>
            <h2>Clubs And <br/> Groups</h2> 
            <p>Our membership management <br/> software provides full automation of <br/> membership renewals and payments</p></div>



        </div>
        </>
     );
}

export default CommunityPage;