import React, {Fragment, Component} from 'react';
import Courselist from './Courselist';
import Linklist from '../layout/Linklist';
import Hero from '../layout/Hero';



export class Section extends Component {

  render(){

    return(
              // jsx
    <Fragment>
    <Hero />
    <Courselist />
    </Fragment>
    )
  }
}

export default Section;

