import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import Narrative1 from "../assets/img/Narrative-1.png";
import Narrative2 from "../assets/img/Narrative-2.png";
import Narrative3 from "../assets/img/Narrative-3.png";
import Narrative4 from "../assets/img/Narrative-4.png";
import Narrative5 from "../assets/img/Narrative-5.png";
import Narrative6 from "../assets/img/Narrative-6.png";

import Phishing1 from "../assets/img/Phishing_1.png";
import Phishing2 from "../assets/img/Phishing_2.png";
import Phishing3 from "../assets/img/Phishing_3.png";
import Phishing4 from "../assets/img/Phishing_4.png";

import Summarize1 from "../assets/img/Summarize_1.png";
import Summarize2 from "../assets/img/Summarize_2.png";
import Summarize3 from "../assets/img/Summarize_3.png";
import Summarize4 from "../assets/img/Summarize_4.png";
import Summarize5 from "../assets/img/Summarize_5.png";

import personal1 from "../assets/img/personal_1.png";
import personal2 from "../assets/img/personal_2.png";
import personal3 from "../assets/img/personal_3.png";
import personal4 from "../assets/img/personal_4.png";
import personal5 from "../assets/img/personal_5.png";
import personal6 from "../assets/img/personal_6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Narrative Nest",
      description: "Home",
      imgUrl: Narrative1,
    },
    {
      title: "Narrative Nest",
      description: "Brief flow",
      imgUrl: Narrative2,
    },
    {
      title: "Narrative Nest",
      description: "Login/SignUp Page",
      imgUrl: Narrative3,
    },
    {
      title: "Narrative Nest",
      description: "History Page",
      imgUrl: Narrative4,
    },
    {
      title: "Narrative Nest",
      description: "Brief Description",
      imgUrl: Narrative6,
    },
    {
      title: "Narrative Nest",
      description: "Storyboard Maker",
      imgUrl: Narrative5,
    },
  ];
  const projects_2 = [
    {
      title: "Phishing Detection",
      description: "Random Forest",
      imgUrl: Phishing1,
    },
    {
      title: "Phishing Detection",
      description: "LightGBM",
      imgUrl: Phishing2,
    },
    {
      title: "Phishing Detection",
      description: "XGBoost",
      imgUrl: Phishing3,
    },
    {
      title: "Phishing Detection",
      description: "Final Report Paper",
      imgUrl: Phishing4,
    },
  ];
  const projects_3 = [
    {
      title: "Article Summarizer",
      description: "ReadME",
      imgUrl: Summarize1,
    },
    {
      title: "Article Summarizer",
      description: "Home Layout",
      imgUrl: Summarize2,
    },
    {
      title: "Article Summarizer",
      description: "Input Article",
      imgUrl: Summarize3,
    },
    {
      title: "Article Summarizer",
      description: "Summarizing",
      imgUrl: Summarize4,
    },
    {
      title: "Article Summarizer",
      description: "Article Summarized",
      imgUrl: Summarize5,
    },
  ];
  const projects_4 = [
    {
      title: "Personal Portofolio",
      description: "Home",
      imgUrl: personal1,
    },
    {
      title: "Personal Portofolio",
      description: "Skills",
      imgUrl: personal2,
    },
    {
      title: "Personal Portofolio",
      description: "Projects",
      imgUrl: personal3,
    },
    {
      title: "Personal Portofolio",
      description: "Project Cards",
      imgUrl: personal4,
    },
    {
      title: "Personal Portofolio",
      description: "Contact Me",
      imgUrl: personal5,
    },
    {
      title: "Personal Portofolio",
      description: "Card Description",
      imgUrl: personal6,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    From dynamic web development to creating intelligent machine
                    learning and deep learning models, my portfolio reflects a
                    diverse range of projects aimed at solving real-world
                    challenges. I’ve designed and built responsive websites,
                    optimized for user experience, and developed AI-driven
                    models that provide impactful insights and predictions. My
                    hands-on experience across these areas has honed my ability
                    to deliver practical, innovative solutions through
                    technology.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Project 4</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fifth">Project 5</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          <strong>Narrative Nest</strong> is an innovative
                          web-based AI application designed to help content
                          creators bring their ideas to life through visual
                          storyboards. Using the power of Stable Diffusion API,
                          users can generate multiple storyboards that capture
                          the essence of their creative vision. Whether you’re a
                          writer, filmmaker, or designer, Narrative Nest
                          provides an intuitive platform to easily translate
                          abstract ideas into visual content, streamlining the
                          creative process and enhancing storytelling. Ideal for
                          content creators who want to visualize and present
                          their concepts with clarity and creativity.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div
                          className="github-link-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <a
                            href="https://github.com/HakuryuuRen-magi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: "inline-block",
                              padding: "10px 20px",
                              backgroundColor: "rgba(90, 103, 216, 0.8)", // RGBA with 0.8 transparency
                              color: "#fff",
                              textDecoration: "none",
                              borderRadius: "5px",
                              transition: "background-color 0.3s ease", // smooth hover transition
                            }}
                          >
                            View on GitHub
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <strong>Phishing URL Detection</strong> is a machine
                          learning team project consist of two members aimed at
                          identifying potentially harmful websites. It uses
                          three models—
                          <strong>Random Forest</strong>,{" "}
                          <strong>LightGBM</strong>, and{" "}
                          <strong>XGBoost</strong>—to classify URLs as either
                          phishing or benign. The models analyze key features
                          such as URL structure, domain age, SSL certification,
                          and registration length. The application is deployed
                          with <strong>Streamlit</strong>, allowing users to
                          enter a URL and get immediate feedback on whether it's
                          safe or malicious, demonstrating the effectiveness of
                          machine learning in cybersecurity.
                        </p>

                        <Row>
                          {projects_2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div
                          className="github-link-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <a
                            href="https://github.com/HakuryuuRen-magi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: "inline-block",
                              padding: "10px 20px",
                              backgroundColor: "rgba(90, 103, 216, 0.8)", // RGBA with 0.8 transparency
                              color: "#fff",
                              textDecoration: "none",
                              borderRadius: "5px",
                              transition: "background-color 0.3s ease", // smooth hover transition
                            }}
                          >
                            View on GitHub
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          {" "}
                          <strong>Article Summarizer</strong> is an AI-powered
                          web application that utilizes advanced{" "}
                          <strong>Natural Language Processing (NLP)</strong>{" "}
                          techniques based on{" "}
                          <strong>TextRank Algorithmn</strong> to automatically
                          generate concise summaries from lengthy articles. By
                          applying cutting-edge AI models, the application is
                          able to understand and extract the most important
                          points, allowing users to grasp key insights without
                          reading the full text. This tool streamlines the
                          information consumption process, making it ideal for
                          students, professionals, and researchers dealing with
                          large volumes of content. The web application ensures
                          fast and accurate results, driven by modern machine
                          learning algorithms and a user-friendly interface.{" "}
                        </p>

                        <Row>
                          {projects_3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div
                          className="github-link-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <a
                            href="https://github.com/HakuryuuRen-magi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: "inline-block",
                              padding: "10px 20px",
                              backgroundColor: "rgba(90, 103, 216, 0.8)", // RGBA with 0.8 transparency
                              color: "#fff",
                              textDecoration: "none",
                              borderRadius: "5px",
                              transition: "background-color 0.3s ease", // smooth hover transition
                            }}
                          >
                            View on GitHub
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <p>
                          <strong>Personal Portfolio</strong> is a modern and
                          interactive web-based platform designed to showcase my{" "}
                          <strong>professional skills</strong> and{" "}
                          <strong>projects</strong>. Built using{" "}
                          <strong>React</strong>, this portfolio offers an
                          organized way to present key details about my
                          expertise in <strong>web development</strong>,{" "}
                          <strong>machine learning</strong>, and{" "}
                          <strong>software engineering</strong>. It includes
                          various sections such as <strong>About Me</strong>,{" "}
                          <strong>Skills</strong>, <strong>Projects</strong>,
                          and <strong>Contact</strong>, providing a
                          comprehensive overview of my work. The portfolio is
                          designed to be responsive and user-friendly, allowing
                          potential employers and collaborators to easily
                          navigate and connect with me.
                        </p>

                        <Row>
                          {projects_4.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div
                          className="github-link-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <a
                            href="https://github.com/HakuryuuRen-magi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: "inline-block",
                              padding: "10px 20px",
                              backgroundColor: "rgba(90, 103, 216, 0.8)", // RGBA with 0.8 transparency
                              color: "#fff",
                              textDecoration: "none",
                              borderRadius: "5px",
                              transition: "background-color 0.3s ease", // smooth hover transition
                            }}
                          >
                            View on GitHub
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fifth">
                        <p>
                          {" "}
                          <strong>Article Summarizer</strong> is an AI-powered
                          web application that utilizes advanced{" "}
                          <strong>Natural Language Processing (NLP)</strong>{" "}
                          techniques based on{" "}
                          <strong>TextRank Algorithmn</strong> to automatically
                          generate concise summaries from lengthy articles. By
                          applying cutting-edge AI models, the application is
                          able to understand and extract the most important
                          points, allowing users to grasp key insights without
                          reading the full text. This tool streamlines the
                          information consumption process, making it ideal for
                          students, professionals, and researchers dealing with
                          large volumes of content. The web application ensures
                          fast and accurate results, driven by modern machine
                          learning algorithms and a user-friendly interface.{" "}
                        </p>

                        <Row>
                          {projects_3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        <div
                          className="github-link-section"
                          style={{ marginTop: "20px", textAlign: "center" }}
                        >
                          <a
                            href="https://github.com/HakuryuuRen-magi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                              display: "inline-block",
                              padding: "10px 20px",
                              backgroundColor: "rgba(90, 103, 216, 0.8)", // RGBA with 0.8 transparency
                              color: "#fff",
                              textDecoration: "none",
                              borderRadius: "5px",
                              transition: "background-color 0.3s ease", // smooth hover transition
                            }}
                          >
                            View on GitHub
                          </a>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
