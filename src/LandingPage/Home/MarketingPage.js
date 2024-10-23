import React from "react";
function MarketingPage() {
  return (
    <>
      <div className="container mt-4">
        <div className="text-center">
          <h1>Caring is the new marketing</h1>
          <p>
            The Nextcent blog is the best place to read about the latest
            membership insights, <br />
            trends and more. See who's joining the community, read about how our
            community
            <br /> are increasing their membership income and lot's more.​
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          
          <img
            className="market"
            src="../images/marketimg1.png"
            alt="img"
          />
           <div className="card text-center">
            <p>Creating Streamlined <br/>Safeguarding Processes with <br/>OneRen</p>
            <a style={{textDecoration:'none', fontSize:'18px'}} href="/">Readmore</a>
          </div>
        </div>
        <div className="col-4">
          
          <img
            className="market"
            src="../images/marketimg2.png"
            alt="img"
          />
           <div className="card text-center">
            <p>Creating Streamlined<br/> Safeguarding Processes with<br/> OneRen</p>
            <a style={{textDecoration:'none', fontSize:'18px'}} href="/">Readmore</a>
          </div>
        </div>
        <div className="col-4">
         
          <img
            className="market"
            src="../images/marketimg3.png"
            alt="img"
          />
          <div className="card text-center">
            <p >Creating Streamlined <br/>Safeguarding Processes with<br/> OneRen</p>
            <a className="mb-1" style={{textDecoration:'none', fontSize:'18px'}} href="/">Readmore</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingPage;
