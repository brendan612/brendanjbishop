import React from 'react';
import './Experience.css'

const Experience = () => {
  return (
      <div className="bjb__experience section__padding">
          <div className="bjb__experience-content">
              <h2>Where I've Worked</h2>
              <div className='bjb__experience-content-job'>
                <h3>Steinhafels - <span>Software Engineer</span></h3>
                <h4>2017 - Present</h4>
                <p>
                    <ul>
                        <li>Designed and implemented large scale applications for daily use by employees.</li>
                        <li>Created and maintain a new API responsible for customer and order retrieval, service availability, and inventory status.</li>
                        <li>Worked with multiple departments to discuss projects and help create apps to improve their efficiency.</li>
                    </ul>
                </p>
              </div>
          </div>
      </div>
  );
};

export default Experience;
