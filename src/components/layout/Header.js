import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="#">BlogPOST</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor02">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="#">Post</Link>
                    </li>
                   
                  </ul>
                </div>
              </nav>
        )
    }
}

export default Header
