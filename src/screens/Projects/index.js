import React from "react";

function Projects() {
  return (
    <div>
      <section>
        <div
          className="hero-body"
          style={{ backgroundColor: "midnightblue", height: "600px" }}
        >
          <div
            className="container"
            style={{ backgroundColor: "midnightblue" }}
          >
            <div className="columns">
              <div className="column">
                <div
                  className="card"
                  style={{ height: "506px", backgroundColor: "bisque" }}
                >
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title-is-3" id="personal">
                          <strong>about</strong>
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      "A highly skilled and experienced full stack developer
                      with a strong background in various programming languages
                      such as Javascript, Python, and Ruby. Proficient in
                      developing and maintaining web applications using
                      technologies such as React, Node.js, and Ruby on Rails.
                      Has a deep understanding of both front-end and back-end
                      development, with the ability to seamlessly integrate them
                      to create a cohesive user experience. Strong
                      problem-solving skills, ability to think outside the box,
                      and an ability to adapt quickly to new technologies.
                      Proven track record of delivering projects on-time and to
                      a high standard. A team player with excellent
                      communication skills and a strong&nbsp;work&nbsp;ethic.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card" style={{ backgroundColor: "aquamarine" }}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title-is-3" id="edu">
                          <strong>educational </strong>
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      1. O/L = 9 A<br />
                      2. A/L = 2B 1C ( biology )
                    </div>
                  </div>
                </div>
                <br />
                <div className="card" style={{ backgroundColor: "hotpink" }}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title-is-3" id="skills">
                          <strong>Skills</strong>
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      programming : C , Python , Java
                      <br />
                      Announcing ( member in school media unit )
                    </div>
                  </div>
                </div>
                <br />
                <div className="card has-background-primary-light">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title-is-3" id="ex">
                          <strong>Exracuricular Activities</strong>
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      Member in Rotaract club
                      <br />
                      Member in pahasara Media Unit
                      <br />
                      Member in Leo Club
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End of projects*/}
      {/*form*/}
      <section></section>
    </div>
  );
}

export default Projects;
