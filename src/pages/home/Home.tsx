import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap'
import {
  FaNodeJs,
  FaFireAlt,
  FaReact,
  FaGoogle,
  FaLock,
  FaUsersCog,
  FaShieldAlt,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import "./Home.css";

  const sections = [
    {
      title: "Introduction to Node.js",
      icon: FaNodeJs,
      lectures: 3,
      progress: 100,
    },
    {
      title: "Fundamentals of Firebase",
      icon: FaFireAlt,
      lectures: 3,
      progress: 80,
    },
    {
      title: "Setting Up React with Firebase",
      icon: FaReact,
      lectures: 3,
      progress: 60,
    },
    {
      title: "Implementing Firebase Authentication",
      icon: FaShieldAlt,
      lectures: 3,
      progress: 40,
    },
    {
      title: "Google Sign-In Integration",
      icon: FaGoogle,
      lectures: 3,
      progress: 20,
    },
    {
      title: "Implementing Password Management",
      icon: FaLock,
      lectures: 3,
      progress: 0,
    },
    {
      title: "Managing User Roles",
      icon: FaUsersCog,
      lectures: 3,
      progress: 0,
    },
    {
      title: "Advanced Authentication Features",
      icon: FaShieldAlt,
      lectures: 3,
      progress: 0,
    },
    {
      title: "Real-World Application Development",
      icon: FaCode,
      lectures: 3,
      progress: 0,
    },
    {
      title: "Course Conclusion and Next Steps",
      icon: FaGraduationCap,
      lectures: 3,
      progress: 0,
    },
  ];

export const Home = () => {

    return (
      <Container fluid className='dashboard-container'>
        <h1 className='text-center my-4'>Course Roadmap</h1>
        <Row>
          {
            sections.map((section, index) => {
              return (
                <Col md={4} lg={4} sm={12} key={index}>
                <Card 
                className='section-card h-100'
                >
                <Card.Body>
                  <div className='d-flex align-items-center mb-3'>
                    <section.icon  size={30} className='section icon mb-3'/>
                    <Card.Title className='section-title'>{section.title}</Card.Title>
                  </div>
                  <Card.Text>{section.lectures} Lectures</Card.Text>
                  <ProgressBar now={section.progress} label={`${section.progress}%`} className='progres-bar'/>
                </Card.Body>
                </Card>
                </Col>
              )
            })
          }

        </Row>
      </Container>
    )

}