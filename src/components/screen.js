import React from "react";


const handleReset = () => {
     window.location.reload();
   }

const Screen = (props) => {

	return (
		<div>
            <div className="w-100 mb-2">
                 <button className="small ml-auto mr-0 d-block" onClick={handleReset}>reset</button>
            </div>
               
            <div className="w-100 px-2 border border-dark text-right display h4 bg-light">
                { props.display }
            </div>
		 </div>
	)
}

export default Screen;