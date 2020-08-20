import React from 'react';
import Frame from '../../hoc/Frame';
import {Navigation} from '../navigation/Navigation';
import {LeftNavigation} from '../navigation/LeftNavigation';

const layout = (props) => {
    return(
        <Frame>
             <Navigation/>
            <div className="container">


                <LeftNavigation />
            </div>
            <main>
                {props.children}
            </main>
        </Frame>
    )
};

export default layout;
