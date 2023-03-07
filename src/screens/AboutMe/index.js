import React from "react";

function AboutMe() {
  return (
    <div className style={{ display: "flex", flexDirection: "row" }}>
      <div
        className="hero-body"
        style={{
          backgroundColor: "midnightblue",
          width: "50%",
          height: "600px",
        }}
      >
        <p
          style={{
            color: "rgb(217, 25, 230)",
            marginLeft: "100px",
            fontSize: "80px",
          }}
        >
          Hi there... I am
        </p>
        <p
          className="subtitle is-3"
          style={{
            color: "rgb(188, 16, 218)",
            marginLeft: "100px",
            fontSize: "80px",
            lineHeight: "72px",
          }}
        >
          Sarala Janson
        </p>
        <p style={{ color: "rgb(174, 11, 196)", marginLeft: "100px" }}>
          first year undergraduate student
          <br />
          in University of Colombo School of Computing
        </p>
        <br />
        <br />
        <div className="field is-grouped">
          <img
            src="./gmail.jpeg"
            style={{ width: "20px", height: "20px", marginLeft: "100px" }}
          />
          <p style={{ color: "white", marginLeft: "20px" }}>
            : saralajanson@gmail.com
          </p>
        </div>
        <br />
        <div className="field is-grouped">
          <img
            src="./icon (2).png"
            style={{ width: "20px", height: "20px", marginLeft: "100px" }}
          />
          <p style={{ color: "white", marginLeft: "20px" }}>: 077-5846222</p>
        </div>
        <br />
        <div className="field is-grouped">
          <img
            src="./icon (3).png"
            style={{ width: "20px", height: "20px", marginLeft: "100px" }}
          />
          <p style={{ color: "white", marginLeft: "20px" }}>
            : www.linkdin.com/in/sarala
          </p>
        </div>
        <br />
        <div className="field is-grouped">
          <img
            src="./icon (1).png"
            style={{ width: "20px", height: "20px", marginLeft: "100px" }}
          />
          <p style={{ color: "white", marginLeft: "20px" }}>
            : http://www.facebook.com/sarala.janson
          </p>
        </div>
        &gt;
        <br />
        <div className="field is-grouped">
          <img
            src="./ig.jpeg"
            style={{ width: "20px", height: "20px", marginLeft: "100px" }}
          />
          <p style={{ color: "white", marginLeft: "20px" }}>
            {" "}
            instagram.com/sarala_janson
          </p>
        </div>
        <br />
      </div>
      <div className style={{ backgroundColor: "midnightblue", width: "50%" }}>
        <img
          className="is-rounded"
          src="pic.jpg"
          style={{
            position: "relative",
            height: "360px",
            marginTop: "100px",
            borderRadius: "10px",
            marginLeft: "200px",
          }}
        />
      </div>
    </div>
  );
}

export default AboutMe;
