import {Container, Col, Row } from 'react-bootstrap'

export const Footer  =() => {

    return (
        <footer className='bg-dark text-white py-2 top-0'>
            <Container>
                <Row className='align-items-center'>
                    <Col className='text-center'>
                    <p className='mb-0'> &copy; {new Date().getFullYear()} fixture Academy</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
