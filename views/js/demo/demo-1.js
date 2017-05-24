import React,{Component} from "react";
import ReactDOM from "react-dom";
import CSS from "../../css/demo.css";
import Img from "../../images/i.jpg";

const ProductBox = (
      <div className="bgColor">
        Hello demo
      </div>
     );

class ProductBox1 extends React.Component{
	render(){
		return(
			<div className="wrap">
				<a href="./Index.html">Index</a>
			</div>
		)
	}
};

class ProductBox2 extends React.Component{
	render(){
		return(
			<div>
				<div className="bgColor" >
				  	<p className="fontColor">
						Hello demoHello demoHello demo
					</p>
					<br/>
					<a href="./Index.html">Index</a>
					<br/>
					<img src={Img}/>
				</div>
				<ProductBox1 />
			</div>
		)
	}
};
module.exports = ProductBox2;