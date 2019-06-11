import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Screen from "./components/screen";
import Keyboard from "./components/keyboard";

let narrowCounter = 0, dot = 0, score = false;

class App extends React.Component {

  state = {
    display: ""
  }

   handleClick = (val) => {

    let disp = this.state.display;
   
    const reg = new RegExp("[0-9+-/*().]");
    const regNumber = new RegExp("[0-9]");
    const regChar = new RegExp("[+-/*]");

     if (reg.test(val)) {

      if (disp.length === 0 && (regNumber.test(val) || val === "-")) {

        this.setState({display: val});
      }
      else if (disp.length > 0)
      {
        if (regNumber.test(val)) //if [0-9]
        {
          if (disp.charAt(disp.length-1) !== ")" && score === false) {
            this.setState({display: disp+val})
          }
          else if (score === true) {
            score = false;
            this.setState({display: val})
          }
        }
        else if (regChar.test(val) && val !== "." && disp.charAt(disp.length-1) !== "( " ) //if +-*/ 
        {
          if (regChar.test(disp.charAt(disp.length-1))) //if last char is +-*/ change 
          {
            disp = disp.slice(0, disp.length-1)
            dot = 0;
            score = false;
            this.setState({display: disp + val})
          }
          else {                            //if last char isn't +-*/ set
            dot = 0;
            score = false;
            this.setState({display: disp+val}) 
          }
        }
        else if (val === "(" || val === ")") //if char is ( or )
        {
          
          if (val === "(" && regChar.test(disp.charAt(disp.length-1))) {
            narrowCounter++;
            this.setState({display: disp+val});
          }
          else if (val === ")" && narrowCounter > 0) {
            narrowCounter--;
            this.setState({display: disp+val});
          }
        }
        else if (val === "." && regNumber.test(disp.charAt(disp.length-1)) && dot === 0 && score === false)
        {
            dot++;
            this.setState({display: disp+val});
        }
      }

    }
    else if (val === "clear" && disp.length > 0) {
      this.setState({display: ""})
      dot = 0;
      score = false;
    }
    else if (val === "del" && disp.length > 0) {
      this.setState({display: disp.slice(0,disp.length-1)})
    }
    else if (val === "change") {
      
      if (disp.charAt(0) === "-") {

        if (disp.length === 0)
            this.setState({display: ""});
        else 
            this.setState({display: disp.slice(1,disp.length)});
        
      }
      else {
          this.setState({display: "-"+disp});
      }
    }
    else if (val === "sup") {
      if (regNumber.test(disp.charAt(disp.length-1)))
      {
        let double = eval(disp);
        this.setState({display: (double*double).toString()})
      }
    }
    else if (disp.length === 0) {
      this.setState({display: ""});
    }
    else if (val === "=") {
      
      score = true;
      dot = 0;
      disp = eval(disp).toFixed(5);
      
      this.setState({display: parseFloat(disp).toString()}) 
    }
   }

  render() {
    return (
       <div className="m-2">
          
         <div className="border border-primary bg-secondary mx-auto p-2 calc">
            
            <Screen display={this.state.display} />
            
            <Keyboard handleClick={this.handleClick} />

         </div>

       </div>
    )
  }
}

export default App;
