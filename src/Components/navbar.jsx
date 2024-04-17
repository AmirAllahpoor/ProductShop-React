import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="rightbar">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Shop</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/Card">Card</a>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </nav>
            </>
        );
    }
}
 
export default Navbar;