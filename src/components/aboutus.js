import React, { Component } from 'react';
import logo from './bang flag.jpeg';
import lob from './Bangladesh land.jpg';
class About extends Component {
render() {
return(
<div><h1>About Us</h1>
<h3>We are a small catering service that provides for any events and love to share our wonderful food with everyone. Our food is a Bangladeshi/Indian cuisine.  We started this service in March when the pandemic started since we know people in our community needs food or does not have any food supplies to cook their meals.  The pandemic was a reason for us to create an online website, so people can reach out and contact us on what they need.  We try our best to meet their needs and enjoy our cuisines.</h3>
<img src= {logo} className= "App-logo" alt= "logo" width= "450" height= "500"/>
<img src= {lob} className= "App-logo" alt= "logo" width= "450" height= "500"/></div>


)
}
}

export default About;
