// Create a new component. This component should produce some HTML
import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
	return <div>Hi there</div>;
}


// Take this component's generated HTML and put it on the page /

ReactDom.render(<App />, document.querySelector(".container"));