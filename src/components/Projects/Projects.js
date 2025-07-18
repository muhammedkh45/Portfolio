import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import elnour from "../../Assets/Projects/elnour.png";
import tasktracker from "../../Assets/Projects/tasktracker.png";
import xmleditor from "../../Assets/Projects/xmleditor.png";
import CPUSchedular from "../../Assets/Projects/cpuschedular.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elnour}
              isBlog={false}
              title="Elnour Website"
              description="Elnour Website is a modern, responsive web platform built to showcase the services and values of Elnour. Designed with user experience in mind, the site offers smooth navigation, clean visuals, and informative content that highlights the company’s expertise and commitment to excellence. Whether you're exploring their offerings or reaching out for collaboration, the Elnour site provides an engaging and professional online presence"
              ghLink="https://github.com/muhammedkh45/EL-Nour-"
              demoLink="https://el-nour.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasktracker}
              isBlog={false}
              title="Task Tracker"
              description="A simple and efficient command-line interface (CLI) for tracking and managing your tasks directly from your terminal."
              ghLink="https://github.com/muhammedkh45/Task-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xmleditor}
              isBlog={false}
              title="XML Editor Pro"
              description="XML Editor Pro is a next-generation online XML editing platform that combines the power of a robust code editor with intelligent validation and dynamic graph-based visualization"
              ghLink="https://github.com/Seifehab11-8/XML_Editor"
              demoLink="https://drive.google.com/file/d/1S_zwCXnXdjpfkLIk7VarmbsRLcnyo5Uj/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CPUSchedular}
              isBlog={false}
              title="CPU Scheduler Simulator "
              description="CPU Scheduler Simulator is a fully interactive desktop tool designed to simulate, visualize, and compare classic CPU scheduling algorithms in real time. Built for students, educators, and OS nerds alike, this tool brings the inner workings of process scheduling to life with animated timelines, dynamic metrics, and hands-on controls."
              ghLink="https://github.com/Seifehab11-8/OS_scheduler"
              demoLink="https://drive.google.com/file/d/17aRU4e0wJobG60y865vKQ28Lx_qsciqG/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
