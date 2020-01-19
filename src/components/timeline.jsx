import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta">My Work</span> */}
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Design Engineer at Texas Instruments <span>2016-Present</span></h2>
                        <p><strong> DIGITAL DESIGN ENGINEER</strong> <br/>
                           • Worked on Design and Analysis of Digital Cell Libraries and delivered quality libraries in shorter cycle time. Automated the design
                              and analysis process using Python Numpy and Pandas.< br/>
                              • Worked on a Self Driven system for Digital Library timing models generation and eliminated the need for human decision making.<br/>
                              • Developed an End-to-End system for Hold Padding of Sequential cells to account for mismatch variations in process using
                              Linear-Regression. The project reduced pessimism in Design Margins giving best design entitlement.<br/>
                              • Worked closely with spice modeling team in defining process nodes for better digital libraries. Analyzed data from bench-marking
                              cell Libraries of multiple technology nodes.<br/>
                              • Responsible for development of modular, reusable code. Ensured quality by adding unit-tests for reliable deployment<br/>
                              • Worked on digital cell asserts for flagging potentially bad connections early in design phase</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Texas Instruments <span>2015</span></h2>
                        <p> • Developed an automated solution for performance bench-marking of digital cell libraries<br/>
                            • Worked with the spectre circuit simulator for analysis of delay, power, leakage and Cin of standard cells<br/>
                            • Underwent training on practical use of Linux and its utilities, Perl scripting</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Solar Car <span>2013-2016</span></h2>
                        <p><strong>SOLAR ARRAY TEAM LEAD; MEMBER, ELECTRONICS & ELECTRICAL DIVISION</strong> <br/>
                                 • Represented India at the World Solar Challenge, 2015 - 3000KM endurance race across the Australian outback.< br/>
                                • Responsible for the Design and Integration of Solar Array, MPPT, BMS, Motor, Control Systems and Telemetry over CAN< br/>
                                • Collaborated with Infosys, SunPower, SunEdison, Wipro, TCS, 3M, National Instruments and HHV Solar< br/>
                                • Designed and fabricated light and efficient Solar Arrays using efficient Mono-crystalline cells from SunPower< br/>
                                • Developed a Remote Health Monitoring system for the Solar car using the NI compact-RIO embedded controller</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Efficient Power Management - Smart Grids <span>2016</span></h2>
                        <p><strong>GENERAL ELECTRIC EDISON CHALLENGE </strong><br/>
                        • Developed a Smart and Efficient power management scheme for making electric grids smart.<br/>
                        • Prototyped an End-to-End system with smart metering at generation and consumption ends.<br/>
                        • Implemented load and time-priority load-shedding scheme for critical endpoints such as Hospitals.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cargo Sorting Robot <span>2015</span></h2>
                        <p><strong>E-YANTRA ROBOTICS COMPETITION</strong><br/>
                        • Firebird V, a robot from IIT Bombay, was programmed to sort colored boxed on a given map.<br/>
                        • This was a scaled-down version of a cargo management at Airports.<br/></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Persistence of Vision Display <span>2014</span></h2>
                        <p><strong>SELF STUDY PROJECT AT RVCE</strong><br/>
                        • Created a multi-color display using 16 * 3 color LEDs applying Analog and Digital learnings<br/>
                        • The logic control was done by MSP430G2553, using the Launchpad for programming and debugging.<br/></p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
/*  
2016

 India
 2015

 India
 2014
 */
