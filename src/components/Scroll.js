import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '2px solid black', height: '500px'}}>
			{props.children}
		</div>
		);
};

export default Scroll;



// css: overflow-y
// jsx: overflowY 
// **must camelCase for JSX**
// adding props to Scroll must add .children > {props.children} taken from App.js