import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                With a strong foundation in Web Development and Machine
                Learning/Deep Learning, I’ve applied my technical expertise
                across various hands-on projects. Whether building responsive
                websites or crafting intelligent models, I continuously push the
                boundaries of innovation.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Deep Learning</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Data Analytics</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>CI/CD Pipelines (Jenkins, GitLab CI)</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Big Data Technologies</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Cloud Platforms (AWS, GCP, Azure)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>RESTful APIs</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>GraphQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JWT Authentication</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Microservices Architecture</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Team Work</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Leadership</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Problem Solving</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
