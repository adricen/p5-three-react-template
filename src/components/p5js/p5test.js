import React from "react";
import Sketch from "react-p5";

	let x,
      y,
      inc = 0.01,
      colors = [0,0,0];

export default (props) => {
  const sizes = [
    window.innerWidth,
    window.innerHeight
  ]
  // console.log(sizes);
	const setup = (p5, canvasParentRef) => {

		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(...sizes).parent(canvasParentRef);
    x = p5.width*0.5
    y = p5.height*0.5
	};

	const draw = (p5) => {
		p5.background(0);
    p5.fill([...colors])
		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x = p5.width*0.5 + p5.width*0.4 * Math.cos(inc)
    y = p5.height*0.5 + p5.height*0.4 * Math.sin(inc)
    inc+= 0.02
    colors = [Math.abs(Math.cos(inc))*255, Math.abs(Math.sin(inc+inc))*255, Math.abs(Math.cos(inc*0.5))*255]
	};
  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
