import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            This a website for  <span className="purple"> AI FREELANCERS </span>
            <br />
            <br/>
            At AIWORKFORCEPRO, we connect businesses with a
            global network for freelancer's specialized in artificial intelligence and machine learning services. 
            Whether you’re a startup looking to integrate AI into your processes,
            or an enterprise seeking scalable AI solutions, our platform brings the talent you need to stay competitive in the digital age.
            <br />
            
            <br />
            Freelancers cover a wide range of AI expertise, including:
            <br/>
          </p>
          <ul>
            <li className="about-activity">
            <strong>Machine Learning Model Development:</strong> From predictive analytics to recommendation systems.
            </li>
            <br/>
            <li className="about-activity">
            <strong>Natural Language Processing (NLP):</strong> Chatbots, text analytics, language models.
            </li>
            <br/>
            <li className="about-activity">
            <strong>Computer Vision:</strong>  Image recognition, video analytics, object detection.
            </li>
            <br/>
            <li className="about-activity">
            <strong>Data Science & Analytics:</strong>  Data preprocessing, visualization, and custom AI solutions.
            </li>
            <br/>
            <li className="about-activity">
            <strong>AI Integration & Deployment:</strong>  Seamless deployment of AI into cloud environments, mobile apps, or enterprise systems.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}

          
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
