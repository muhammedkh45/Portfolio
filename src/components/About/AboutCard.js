import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammed El-Jundy </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I'm currently studying at Ain Shams University, working my way through the world of software engineering.
            <br />
            I have a deep passion for <span className="purple">AI, backend development, and all things tech</span>.
            I'm constantly building, breaking, and rebuilding as I grow my skills across multiple stacks and domains. 
            <br />
            <br />
            Outside the world of code, here’s what keeps me balanced:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Weightlifting & Fitness (yes, I'm lifting both code and dumbbells)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring tech trends and freelancing
            </li>
            <li className="about-activity">
              <ImPointRight /> aming and leveling up both virtually and IRL
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep building. Keep learning. Make it meaningful."{" "}
          </p>
          <footer className="blockquote-footer">Muhammed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
