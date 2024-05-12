import React from "react";

function tester() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <title>Profile</title>
      <header>
        <div className="container">
          <ul className="list">
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="aboutMe.html">About Me</a>
            </li>
            <li>
              <a href="project.html">Project</a>
            </li>
            <li>
              <a href="">My Blog</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <div id="welcome-message" />
          <button className="logout" onclick="Logout()">
            Logout
          </button>
        </div>
      </header>
      <main>
        <div className="box">
          <div className="container2">
            <div className="top-header">
              <span className="sp">Wb Web</span>
              <h2>WB Login</h2>
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Username"
                id="username"
              />
              <i className="bx bx-user" />
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="password"
                id="password"
              />
              <i className="bx bx-user" />
            </div>
            <div className="input-field">
              {/* <button class="submit" value="Login" onclick="login()" /> Login */}
              <button className="submit" onclick="login()">
                DDawng kys
              </button>
            </div>
            <div className="bottom">
              <div className="left">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember</label>
              </div>
              <div className="right">
                <label>
                  {" "}
                  <a href="#">Wang Ba </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default tester;
