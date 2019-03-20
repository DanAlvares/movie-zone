import React from 'react';
import './Header.css';

const Header = (props) => {
    return ( 
        <nav className={"Header"}>
            <h1>Movie Zone</h1>
            <button type="button" className={ props.isOpen ? 'open' : ''} onClick={props.toggleFilters}>{ props.isOpen ? 'X' : ''}</button>
        </nav> 
    );
}
 
export default Header;