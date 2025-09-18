import { Navbar, Container, Nav, Button, Col } from 'react-bootstrap'
import { AiOutlineLogin } from 'react-icons/ai'
import { SiGnuprivacyguard } from 'react-icons/si'
import { LOGO_URL } from '../constant'

export const Header = () => {

    return (
        <Navbar bg='dark' variant='dark'>
           <Container>
            <Navbar.Brand href='/'>
            <img 
             src={LOGO_URL}
             width="40"
             height="40"
             className='d-inline-block align-top'
             alt='rixware-logo'
             loading='lazy'
            /> 

            </Navbar.Brand>

            { /* navbar link */ }
            <Nav className='mx-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link>Services</Nav.Link>
                <Nav.Link>Contact</Nav.Link>

            </Nav>

            <Nav className='ms-auto d-flex align-items-center'>
                <Col xs="auto">
                <Button variant="primary" href="/register"> <SiGnuprivacyguard /> Signup </Button>
                </Col>

                <Col xs="auto" className='ms-2'>
                <Button variant="success" href="/login">
                <AiOutlineLogin /> Login
                </Button>

                </Col>

            </Nav>
            

           </Container>

        </Navbar>
    )
}