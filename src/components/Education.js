import { Card, CardBody } from "reactstrap";
import Badge from "react-bootstrap/Badge";
// import Card from "react-bootstrap/Card";
// import CardBody from "react-bootstrap/Card";
import { Fade } from "react-reveal";
import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: {},
            detailsModalShow: false,
        };
    }

    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var education = this.props.resumeEducation.map(function (
                education
            ) {
                return (
                    <Fade left duration={2000}>
                        <Card className="card-lift--hover shadow mt-4">
                            <CardBody style={{
                                height: "auto",
                                fontSize: "132%",
                                lineHeight: "200%",
                            }}>
                                <div className="d-flex px-3">
                                    <div className="pl-4">
                                        <p className="h1">
                                            {education.school}
                                        </p>
                                        <p className="h3">{education.degree}</p>
                                        <Badge className="year-badge mr-1">
                                            {education.years}
                                        </Badge>
                                        {education.grade && (
                                            <Badge
                                                color="primary"
                                                className="mr-1"
                                            >
                                                {education.grade}
                                            </Badge>
                                        )}
                                        <p className="description mt-3">
                                            {education.coursework}
                                        </p>
                                        <ul>
                                            {education.description
                                                ? education.description.map(
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
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Fade>
                );
            });
        }

        return (
            <section id="education">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="container d-flex justify-content-center align-items-center h-75 col-md-12 mx-auto">
                        <div className="row mx-auto">
                            <div className="col-md-8 offset-md-2  mx-auto mb-5" >
                                {education}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
