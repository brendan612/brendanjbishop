import React, { Component } from "react";
import me from "../content/me.png";
import Github from "../content/icons/Github.png";
import LinkedIn from "../content/icons/Linkedin.png";
import Facebook from "../content/icons/Facebook.png";
import Twitter from "../content/icons/Twitter.png";
import Instagram from "../content/icons/Instagram.png";
const About = () => {
  return (
    <section className="about" name="about">
      <span>&nbsp;</span>
      <div>
        <img className="img-responsive" src={me} alt="Portrait" />
        <p>
          <br />
          <br />
          Hi, my name is Brendan Bishop. I am a Junior Software Developer with a
          focus on Web Development with .NET and React.
          <br />I am also familiar with object oriented programming with C# and
          Java, and database development with SQL, MySQL, and Oracle.
          <br />
          <br />I went to school at Waukesha County Technical College and
          graduated in 2018 with an Associates Degree in Web and Software
          Development.
        </p>
      </div>
      <div className="icons">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              href="https://github.com/brendan612"
              target="_blank"
              title="Github"
            >
              <img src={Github} height="50" width="50" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/brendan-bishop-729b54145/"
              target="_blank"
              title="LinkedIn"
            >
              <img src={LinkedIn} height="50" width="50" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://twitter.com/janglesplz"
              target="_blank"
              title="Twitter"
            >
              <img src={Twitter} height="50" width="50" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com/brendanjbishop/"
              target="_blank"
              title="Instagram"
            >
              <img src={Instagram} height="50" width="50" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/brendan.bishop612"
              target="_blank"
              title="Facebook"
            >
              <img src={Facebook} height="50" width="50" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
