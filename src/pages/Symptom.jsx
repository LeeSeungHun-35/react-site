import React, { useState } from 'react';
import './Symptom.css';

const Symptom = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    /* 체크박스를 아무거나 선택하면 그 값을 목록에 추가하고나 제거시킴. */
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedSymptoms((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((item) => item !== value)
                : [...prevSelected, value]
        );
    };

    const symptoms = [{ value: 'fever', label: '열' },
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
        new Set( /* new set=중복은 하나로 처리 (제거) */
            selectedSymptoms.flatMap(symptom => diseaseMapping[symptom] || [])
        )
    );

    return (
        <div className='symptom'>
            {/* 증상 선택하면 */}
            <div className='sym1'>
                <h2>증상 기반 (일상)</h2>
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
                {/* 병명 출력해준ㄴ다 */}
                <h2>관련 병명</h2>
                <ul>
                    {relatedDiseases.length > 0 ? (
                        relatedDiseases.map((disease, index) => (
                            <li key={index}>{disease}</li>
                        ))
                    ) : (
                        <li className='empty'>현재 가지고있는 증상을 체크해주세요</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Symptom;
