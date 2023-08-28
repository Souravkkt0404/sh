import React from 'react';
import { OurTeams } from "../utils/OurTeam";

const Our_Team_Comp = () => {
  return (
    <div className="team">
    <div className="container">
      <div className="section-header">
        <h3>Meet Our Expert Attorneys</h3>
      </div>
      <div className="row">
      
        {OurTeams.slice(0, 2).map((member, index) => (
          <div className="col-lg-6 col-md-6" key={index}>
            <div className="team-item" width="100%">
              <div className="team-img">
                <img src={member.image} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>{member.title}</h2>
                <p>{member.Position}</p>
              </div>
            </div>
          </div>
        ))}

    
        {OurTeams.slice(2).map((member, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="team-item" width="100%">
              <div className="team-img">
                <img src={member.image} alt="Team Image" />
              </div>
              <div className="team-text">
                <h2>{member.title}</h2>
                <p>{member.Position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Our_Team_Comp