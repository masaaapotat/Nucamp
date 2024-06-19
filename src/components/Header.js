import { useState } from 'react';
// reactstrap
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    // using usestate hook to set a local variable
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={NucampLogo} alt='nucamp logo' className='float-start' />
                <h1 className='mt-1'>NuCamp</h1>
            </NavbarBrand>
            {/* this causes the navbar toggler componet to toggle the value of the menuopen whenever its clicked */}
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            {/* this causes the navbar toggler componet to toggle the value of the menuopen whenever its clicked */}
            <Collapse isOpen={menuOpen} navbar>

                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;