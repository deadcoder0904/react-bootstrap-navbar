var React = require('react');
var ReactDOM = require('react-dom');
var Navbar = require('./components/nav/Navbar.jsx');
var items = [
	{
		title: "HOME",
		href: "#",
		color: "#D7E80B"
	},
	{
		title: "CONTACT",
		href: "#",
		color: "#0BE8C3"
	},
	{
		title: "ABOUT",
		href: "#",
		color: "#0BA0E8"
	}
];

var Main = React.createClass({
	render: function(){
		return(
			<div>
				<Navbar items={items} navColor="#0C3648" navBorder="#0BEFB7" brandColor="rgba(51, 122, 183, 0.67)"/>
			</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('main'));
