import React, {Fragment} from 'react';
import Courselist from './Courselist';
import Linklist from '../layout/Linklist';
import Hero from '../layout/Hero';

const Section = () => (
    // jsx
<Fragment>
<Hero />
<div className="container col-12 col-md-12 col-lg-12 row">
        
        <div className="container col-md-9 col-lg-9">
            <Courselist /> 
        </div>
        <div className="container col-md-3 col-lg-3 ">
            <Linklist />
        </div>
    </div>
</Fragment>
    
);

export default Section;