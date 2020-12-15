import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contactus extends Component {
render() {
return(
<div className="contact-body">
<Grid className="contact-grid">
<Cell col={1}>

</Cell>
<Cell col={6}>
<h2>Contact Us</h2>
<hr/>

<div className="contact-list">
<List>
<ListItem>
<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
<i className="fa fa-phone-square" aria-hidden="true"/>
(347)-749-8369
</ListItemContent>
</ListItem>

<ListItem>
<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
<i className="fa fa-envelope" aria-hidden="true"/>
zaheen500@yahoo.com
</ListItemContent>
</ListItem>

<ListItem>
<ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
<i className="fa fa-address-card" aria-hidden="true"/>
1034 3rd Avenue New York, NY , 10046
</ListItemContent>
</ListItem>



</List>
</div>
</Cell>
</Grid>
</div>
)
}
}

export default Contactus;
