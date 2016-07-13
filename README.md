#react-bootstrap-navbar
Reusable React Bootstrap Navbar

#Usage

Declare an ```items``` array with property ```title``` & ```href``` & optional property ```color``` <br />

```
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

```

#Default Value
``` 

color : "#9d9d9d" 

```

Declare ```< Navbar /> ``` Component by passing ``` items ``` array declared above & optional properties 
``` navBorder ``` & ``` brandColor ``` <br />

```

<Navbar items={items} navColor="#0C3648" navBorder="#0BEFB7" brandColor="rgba(51, 122, 183, 0.67)"/>

```

#Default Values
```

navColor : "#101010",
navBorder : "#080808",
brandColor : "#9d9d9d"

```

#Images

React Bootstrap Navbar <br />
![alt tag](http://imgur.com/jeMSGXQ.png)

