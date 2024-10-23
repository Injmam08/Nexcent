import React from "react";
function CostumerPage() {
  return (
    <div style={{ backgroundColor: "#F5F7FA" }} className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          {" "}
          <img
            className="tesla"
            src="../images/tesla.png"
            alt="tesla img"
          />{" "}
        </div>

        <div className="col-6">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h2>Tim Smith</h2>
          <p>British Dragon Boat Racing Association</p>
          <div className=" ticon mt-2">
            <div className="teslaicon ">
              <img src="../images/icon1.png" alt="icon" />
            </div>
            <div className="teslaicon ">
              <img src="../images/icon2.png" alt="icon" />
            </div>
            <div className="teslaicon ">
              <img src="../images/icon3.png" alt="icon" />
            </div>
            <div className="teslaicon ">
              <img src="../images/icon4.png" alt="icon" />{" "}
            </div>
            <div className="teslaicon ">
              <img src="../images/icon5.png" alt="icon" />
            </div>
            <div className="teslaicon ">
              <img src="../images/icon6.png" alt="icon" />
            </div>
            <a style={{ textDecoration: "none" }} href="/">
              {" "}
              Meet all customers{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostumerPage;
