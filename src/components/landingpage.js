import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
render() {
return(
<div style={{width: '100%', margin: 'auto'}}>
<Grid className="landing-grid">
<Cell col={12}>
<img

/>

<div className="banner-text">
<h1> Welcome To Shelley's Bangla Kitchen</h1>

<hr/>

<p>"WE GOT EVERYTHING FROM SPICY TO HELLAA SPICY!!!"</p>

<div className="social-links">

{/*Facebook*/}
<a href="https://www.facebook.com/Shelleys-Bangla-Kitchen-107307224201732" rel="noopener noreferrer" target="_blank">
<i className="fa fa-facebook-square" aria-hidden="true" />
</a>

{/* Instagram */}
<a href="https://www.instagram.com/shelleysbanglakitchen/" rel="noopener noreferrer" target="_blank">
<i className="fa fa-instagram" aria-hidden="true" />
</a>

</div>
</div>
</Cell>
</Grid>
</div>
)
}
}

export default Landing;
