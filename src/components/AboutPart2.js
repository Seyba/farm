import React from 'react';
import { Spring } from 'react-spring/renderprops';

const AboutPart2 = () => {
    return(
        <Spring
            from ={{opacity: 0, transform: 'translateY(40px)'}}
            to = {{opacity: 1, transform: 'translateY(0)'}}
            config = {{ delay: 1000, duration: 1000}}
        >
            {
                props => (
                    <div style={props}>
                        <p>Order whole lamb</p>
                    </div>
                )
            }
        </Spring>
    )
}
export default AboutPart2;