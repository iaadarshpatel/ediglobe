import React from 'react';
import Accordion from './Accordion';
import { accordionData } from './utils/content';
import './faq.css'

const FaqComponent = () => {
  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;