
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link'
import ThemeToggle from "./ThemeToggle";


const BlogNavbar = ({theme, toggleTheme}) => {
  return (
    <Navbar
        variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
            <a style={{color: theme.fontColor}}>Cihan Ilhan</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Link
            as={() =>
              <Link href='/'>
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            }
          />

            <Nav.Link
                as={() =>
                    <Link href='/CV'>
                        <a className="fj-navbar-item fj-navbar-link">CV</a>
                    </Link>
                }
            />

            <Nav.Link
                as={() =>
                    <Link href='/Contact'>
                        <a className="fj-navbar-item fj-navbar-link">Contact</a>
                    </Link>
                }
            />
            {/* <div></div> */}
            <ThemeToggle onChange={toggleTheme} />

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BlogNavbar;
