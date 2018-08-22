import React, { Component } from 'react';
import logo from './logo.svg';
import "./HeaderComponent.css"

class HeaderComponent extends Component {

  render() {
    return (
      <div className="color">
          <div>


              <br/>
                  <br/>

              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
                <a href="https://www.google.com/" >

        <img src={logo} alt={logo} width={42} height={42} />
      </a>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <style dangerouslySetInnerHTML={{__html: "\na:hover {\n    background-color:  orange; border-radius: 30%;\n}\n" }} />
        <a href="https://www.w3schools.com" style={{textDecoration: 'none', color: 'black'}}>&nbsp;  Top Specalities &nbsp;</a>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://www.w3schools.com" style={{textDecoration: 'none', color: 'black'}}>&nbsp; Patients Speak   &nbsp;        </a>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              <a href="https://www.w3schools.com" style={{textDecoration: 'none', color: 'black'}}>&nbsp; Health Corner &nbsp;</a>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;&nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;

              <a href="https://www.google.com/"  style={{textDecoration: 'none', color: 'black'}}>Login </a>
              &nbsp;
              < a href="https://www.google.com/" style={{textDecoration: 'none', color: 'black'}}>Sign Up</a>
          </div>
      </div>
    );
  }
}

export default HeaderComponent;