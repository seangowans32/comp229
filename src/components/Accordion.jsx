import React, { useState } from 'react';

const AccordionItem = ({ title, content, isActive, onToggle, index }) => {
  return (
    <div className="accordion-item">
      <div 
        className={`accordion-item--title ${isActive ? 'active' : ''}`}
        onClick={() => onToggle(index)}
      >
        {title}
        <div className="accordion-item--toggle">
          <img src="/src/assets/arrow-down.svg" alt="Toggle" />
        </div>
      </div>
      <div 
        className="accordion-item--content"
        style={{
          maxHeight: isActive ? '1000px' : '0px',
          opacity: isActive ? 1 : 0
        }}
      >
        <div className="accordion-content--inner">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onToggle={toggleAccordion}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
