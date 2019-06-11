import React from "react";

const Keyboard = (props) => {

	return (
		<div className="w-100 mt-4 d-flex flex-wrap keybord">
             
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("clear")}>C</button>
	       <button className="py-2 px-2 m-1" onClick={() => props.handleClick("del")}>&lt;-</button>
	       <button className="py-2 px-2 m-1" onClick={() => props.handleClick("change")}>+/-</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("sup")}>x<sup>2</sup></button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("(")}>(</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick(")")}>)</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("/")}>/</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("*")}>*</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("1")}>1</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("2")}>2</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("3")}>3</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("-")}>-</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("4")}>4</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("5")}>5</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("6")}>6</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("+")}>+</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("7")}>7</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("8")}>8</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("9")}>9</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick(".")}>.</button>
	       <button className="py-2 px-3 m-1" onClick={() => props.handleClick("0")}>0</button>
	       
	       <button className="py-2 px-3 m-1 flex-grow-1" onClick={() => props.handleClick("=")}>=</button>

        </div>
	)
}

export default Keyboard;