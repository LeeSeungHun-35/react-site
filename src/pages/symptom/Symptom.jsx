import React, { useState } from 'react';
import './Symptom.css';
const Symptom = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedSymptoms((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value) 
        : [...prevSelected, value]
    );
  };

  const symptoms = [
    { value: 'fever', label: '열' },
    { value: 'cough', label: '콧물' },
    { value: 'headache', label: '두통' },
    { value: 'fatigue', label: '피로' },
    { value: 'nausea', label: '메스꺼움' },
    { value: 'chills', label: '오한' }
  ];

  return (
    <div className='symptom'>
      <div className='sym1'>
        <h2>증상 기반</h2>

        <form>
          <div className='checkbox-group'>
            {symptoms.map((symptom) => (
              <label key={symptom.value} className='checkbox-label'>
                <input
                  type='checkbox'
                  value={symptom.value}
                  checked={selectedSymptoms.includes(symptom.value)}
                  onChange={handleCheckboxChange}
                />
                <span className='checkbox-text'>{symptom.label}</span>
              </label>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Symptom;
