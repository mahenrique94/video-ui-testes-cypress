import React, { Component } from 'react'

import { Navbar, NavbarBrand } from 'reactstrap'

class Menu extends Component {

    render() {
        return (
            <Navbar color="primary" dark data-cy="menu">
                <NavbarBrand data-ty="menu-brand" href="#">testes-cypress</NavbarBrand>
            </Navbar>
        )
    }

}

export default Menu