import React from 'react';
import './Skills.css'

const Skills = () => {
  return (
      <div className="bjb__skills section__padding">
          <div className="bjb__skills-content">
              <h2>Skills</h2>
              <div className="bjb__skills-content-row">
                <div className='bjb__skills-content-col'>
                    <h3>C#</h3>
                    <h3>Javascript</h3>
                    <h3>Node.js</h3>
                    <h3>.NET Framework</h3>
                    <h3>Web Development</h3>
                </div>
                <div className="bjb__skills-content-col">
                    <h3>React.js</h3>
                    <h3>SQL</h3>
                    <h3>Oracle</h3>
                    <h3>MongoDB</h3>
                    <h3>API Development</h3>
                </div>
              </div>
          </div>
      </div>
  );
};

export default Skills;
