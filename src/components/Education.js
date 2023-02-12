import { Card, CardBody, Badge } from "reactstrap";
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
        let detailsModalShow = (data) => {
            this.setState({ detailsModalShow: true, deps: data });
        };

        let detailsModalClose = () =>
            this.setState({ detailsModalShow: false });
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var education = this.props.resumeEducation.map(function (
                education
            ) {
                return (
                    <Fade left duration={2000}>
                        <Card className="card-lift--hover shadow mt-4">
                            <CardBody>
                                <div className="d-flex px-3">
                                    <div className="pl-4">
                                        <h5 className="text-info">
                                            {education.school}
                                        </h5>
                                        <h6>{education.degree}</h6>
                                        <Badge color="info" className="mr-1">
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
                {/* <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        {cards.map(({ title, image, url, id }) => (
                            <div className="col-md-4" key={id}>
                                <Card
                                    imageSource={image}
                                    title={title}
                                    url={url}
                                />
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    <div className="col-md-12 mx-auto">
                        <div className="row mx-auto">{education}</div>
                    </div>
                    {/* <ProjectDetailsModal
                        show={this.state.detailsModalShow}
                        onHide={detailsModalClose}
                        data={this.state.deps}
                    /> */}
                </div>
            </section>
        );
    }
}

export default Education;
