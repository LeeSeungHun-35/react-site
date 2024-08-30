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

    const diseaseMapping = {
        fever: ['감기', '독감'],
        cough: ['감기', '기관지염'],
        headache: ['편두통', '긴장성 두통'],
        fatigue: ['빈혈', '만성 피로 증후군'],
        nausea: ['위염', '위장 장애'],
        chills: ['독감', '감기']
    };

    const relatedDiseases = Array.from(
        new Set(
            selectedSymptoms.flatMap(symptom => diseaseMapping[symptom] || [])
        )
    );

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

            <div className='disease-list'>
                <h3>관련 병명</h3>
                <ul>
                    {relatedDiseases.length > 0 ? (
                        relatedDiseases.map((disease, index) => (
                            <li key={index}>{disease}</li>
                        ))
                    ) : (
                        <li>선택된 증상에 대한 병명이 없습니다.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Symptom;
