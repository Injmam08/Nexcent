import React from 'react';
function Footer() {
    return ( 
        <div style={{ backgroundColor:'#263238'}} className='container'>
            <div className='row'>
                <div className='col-1'></div>
                <div className=' col-4'><img className='logo1 ' src='./images/logo.png' alt='logo'></img>
                <p className='copy'  style={{color:'white'}}>Copyright © 2020 Landify UI Kit.</p>
                <p className='copy' style={{color:'white'}}>All rights reserved</p>
                </div>
                
                <div className='col-2 mt-5'> 
                    <h5 style={{color:'white', fontSize:'20'}}>Company</h5>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">About us</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Blog</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Contact us</a><br/>
                    
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Pricing</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Testimonials</a><br/>

                </div>
                <div className='col-2 mt-5'> 
                    <h5 style={{color:'white', fontSize:'50'}}>Support</h5>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Help center</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Terms of service</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Legal</a><br/>
                   
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Privacy policy</a><br/>
                    <a className="mb-1" style={{textDecoration:'none', fontSize:'18px',color:'#F5F7FA'}} href="/">Status</a><br/>

                </div>
                <div className='col-3'>
                    <h2 className='mt-5' style={{color:'white'}}>Stay up to date</h2>
                    <input type='text' name='name ' defaultValue="Your email address" />
                </div>
            
            </div>
        </div>
     );
}

export default Footer;