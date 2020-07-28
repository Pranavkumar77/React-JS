import React, { Component } from 'react';
import './index.css';
import {Fragment} from 'react';

class Header extends Component {
    render(){
        return(
          <Fragment>
          <div className="Header">
            <h1 className="text-center pb-1">Number Guessing Web App</h1>
          </div>  
            <h3 className="p-2">Guess the random number between 1 to 100</h3>
          </Fragment>
        );
    }
}

export default Header;