import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/experience.scss';

const Experience = () => (
    <section className="experience" id="timeline">
        <div className="container">
            <div className="row">
                <div className="timeline-header w-100">
                    <h2>TIMELINE</h2>
                </div>
                <div className="timeline-container">
                    <article className="timeline col-12">
                        <div className="timeline-inner">
                            <div className="timeline-icon">
                                <FontAwesomeIcon icon={['fas', 'address-card']}/>
                            </div>
                            <div className="timeline-label">
                                <h2 className="timeline-title">Legalfit <span>Aug, 2019 - Present</span></h2>
                                <p><strong>FullStack Engineer</strong></p>
                                <ul>
                                    <li>Create, Deploy, and manage client website</li>
                                    <li>Review incoming bug reports and add propse solutions based on product knowledge</li>
                                    <li>Troubleshoot, debug and upgrade existing app</li>
                                    <li>Work with other teams to troubleshoot defects or to get clarificationn on requests</li>
                                </ul>
                                <p>Website:&nbsp;<a className="timeline-link" rel="noreferrer" target="_blank" href="https://legalfit.com/">https://legalfit.com/</a></p>
                            </div>
                        </div>
                    </article>
                    <article className="timeline col-12">
                        <div className="timeline-inner">
                            <div className="timeline-icon timeline-second">
                                <FontAwesomeIcon icon={['fas', 'address-card']}/>
                            </div>
                            <div className="timeline-label label-second">
                                <h2 className="timeline-title">US Army <span>Jun, 2016 - Present</span></h2>
                                <p><strong>US Army Reservist (91J)</strong></p>
                                <ul>
                                    <li>Performing teamwork for mission complete</li>
                                    <li>Learning leadership skill to execute order</li>
                                    <li>Maintain and repair electrical/fuel systems, pumps, waterpurification systems</li>
                                    <li>Service internal combustion engine ignition/fuel/cooling/electrical systems</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className="timeline col-12">
                        <div className="timeline-inner">
                            <div className="timeline-icon timeline-third">
                                <FontAwesomeIcon icon={['fas', 'address-card']}/>
                            </div>
                            <div className="timeline-label label-third">
                                <h2 className="timeline-title">Lunchidny <span>Jan, 2018 - Feb, 2018</span></h2>
                                <p><strong>Web Developer Intern</strong></p>
                                <ul>
                                    <li>Maintain detailed requirements/design/technical documentation for new and existing components</li>
                                    <li>Maintain and modify full-stack web applications(PHP, HTML, CSS, JS, Adobe)</li>
                                    <li>Performs other job-related duties and responsibilities</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
)

export default Experience;