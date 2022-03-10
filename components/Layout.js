import {Navbar, Container, Nav,NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";

const Layout = ({children, className}) => {
    return (
        <Container>
            <MainNavbar />
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
            <MainFooter/>
        </Container>
    )
}

export default Layout;
