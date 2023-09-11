import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {

    render(){
        return(
            <div className='nav'>
                <AnchorLink href='#SeguroMoto'>Seguro Moto</AnchorLink>
            </div>
        );
    }
}