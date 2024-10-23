import React from 'react'
function LearnPage() {
    return (
       
        <div className='container p-2'>
            <div className='row'>
                <div className='col-3'>
                    <img className='unseen1' src='../images/unseen.png' alt='unseen'/>

                </div>
                <div className='col-2'></div>
                <div  className='unseenContent col-6 '>
                    <h2 className='text-center'>The unseen of spending three<br/> years at Pixelgrade</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='learn'  >
                    Learn More
                    </button>

                </div>

            </div>

        </div>
       
       
      );
}

export default LearnPage;