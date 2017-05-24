import React,{Component} from "react";
import ReactDOM from "react-dom";
import CSS from "../../css/demo.css";

const ProductBox = (
      <div className="bgColor">
        Hello demo
      </div>
     );

class ProductBox2 extends React.Component{
	render(){
		return(
			<div className="bgColor">
			Hello demoHello demoHello demo<br/>
			  	<p className="fontColor">
					Hello demoHello demoHello demo
				</p>
			</div>
			
		)
	}
};
module.exports = ProductBox2;