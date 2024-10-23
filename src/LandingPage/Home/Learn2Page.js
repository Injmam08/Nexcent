import React from 'react'
function Learn2Page() {
    return ( 
        <div className='container'>
            <div className='row'>
            <div className='col-1'></div>
                <div className='col-4'> 
                    <img className='Howto' src='../images/Howto.png' alt='Howto img'/>
                </div>
                <div className='col-1'></div>

                <div className='col-5'>
                    <h2 className='mt-5'>How to design your site footer like we did</h2>
                    <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='learn'  >
                    Learn More
                    </button>
                </div>
                


            </div>

        </div>
     );
}

export default Learn2Page;