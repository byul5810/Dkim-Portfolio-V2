import React from 'react';
import creative from '../assets/idea.png'
import programmer from '../assets/programing.png'
import teamwork from '../assets/teamwork.png'
import cando from '../assets/hypothesis.png'
import '../style/subhero.scss';


const SubHero = () => (
    <section className="subhero">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 subhero-content">
                    <img className="subhero-img" src={creative} alt="img" />
                    <div className="description">Creative Thinker</div>
                </div>
                <div className="col-md-3 col-sm-6 subhero-content">
                    <img className="subhero-img" src={programmer} alt="img" />
                    <div className="description">Diligent Worker</div>
                </div>
                <div className="col-md-3 col-sm-6 subhero-content">
                    <img className="subhero-img" src={teamwork} alt="img" />
                    <div className="description">Team Player</div>
                </div>
                <div className="col-md-3 col-sm-6 subhero-content">
                    <img className="subhero-img" src={cando} alt="img" />
                    <div className="description">Can-Do Attidude</div>
                </div>
            </div>
        </div>
    </section>
)

export default SubHero;