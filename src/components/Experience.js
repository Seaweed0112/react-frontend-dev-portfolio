import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
    };
  }

  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;
        // var image = work.image;
        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="far fa-code experience-icon"></i>}
            key={i}
          >
            <div>
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                {mainTech}
              </div>
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                {work.title}
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                {work.company}
              </h4>
              <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </div>
            <ul className="work-description">
              {work.description
                ? work.description.map(
                  (desc) => {
                    return (
                      <li key={desc}>
                        {desc}
                      </li>
                    );
                  }
                )
                : null}
            </ul>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
        <div className="col-md-10 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            >

            </VerticalTimelineElement>
          </VerticalTimeline>

        </div>
      </section>
    );
  }
}

export default Experience;
