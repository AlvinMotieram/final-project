import React, { Component } from 'react';
import logo from './IMG_4783.JPG';
import log from './IMG_4781.JPG';
import { Grid, Cell } from 'react-mdl';
import Favorites from './favorites';


class Menu extends Component {
render() {
return(
<div>
<Grid>
<Cell col={2}>
<div style={{textAlign: 'center'}}>
</div>

</Cell>
<Cell className="resume-right-col" col={8}>


<h3>Most Popular Dishes</h3>
<Favorites
skill="Eggplant Bhaji"
progress={100}
/>
<img src= {logo} className= "App-logo" alt= "logo" width= "100" height= "100"/>

<Favorites
skill="Fuchka"
progress={80}
/>
<img src= {log} className= "App-logo" alt= "logo" width= "100" height= "100"/>
<Favorites
skill="Kichuri"
progress={50}
/>
<Favorites
skill="Chicken Noodles"
progress={25}
/>


</Cell>
</Grid>
</div>
)
}
}

export default Menu;
