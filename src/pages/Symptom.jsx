import React, { useState, useEffect } from 'react';
import './Symptom.css';

const Symptom = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [relatedDiseases, setRelatedDiseases] = useState([]);

    // 체크박스 상태 변경 핸들러
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
        { value: 'chills', label: '오한' },
        { value: 'rash', label: '발진' },
        { value: 'vomiting', label: '구토' },
        { value: 'diarrhea', label: '설사' },
        { value: 'muscle_pain', label: '근육통' },
        { value: 'shortness_of_breath', label: '숨 가쁨' }
    ];

    const diseaseMapping = {
        fever: ['감기', '독감', '위장염'],
        cough: ['감기', '기관지염', '천식'],
        headache: ['편두통', '긴장성 두통', '알레르기'],
        fatigue: ['빈혈', '만성 피로 증후군', '간염'],
        nausea: ['위염', '간염'],
        chills: ['독감', '감기', '위장염'],
        rash: ['알레르기', '탈장', '천식'],
        vomiting: ['위장염', '독감', '간염'],
        diarrhea: ['위장염', '식중독', '설사'],
        muscle_pain: ['근육통', '독감', '급성 세균 감염'],
        shortness_of_breath: ['천식', '폐렴', '심부전']
    };

    const findRelatedDiseases = (selectedSymptoms) => {
        if (selectedSymptoms.length === 0) {
            return [];
        }

        let possibleDiseases = new Set();

        // 선택된 증상에 관련된 모든 병명을 추가
        selectedSymptoms.forEach(symptom => {
            if (diseaseMapping[symptom]) {
                diseaseMapping[symptom].forEach(disease => {
                    possibleDiseases.add(disease);
                });
            }
        });

        return Array.from(possibleDiseases);
    };

    useEffect(() => {
        const diseases = findRelatedDiseases(selectedSymptoms);
        setRelatedDiseases(diseases);
    }, [selectedSymptoms]);

    return (
        <div className='symptom'>
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
                <h2>관련 병명 리스트</h2>
                <ul>
                    {relatedDiseases.length > 0 ? (
                        relatedDiseases.map((disease, index) => (
                            <li key={index}>{disease}</li>
                        ))
                    ) : (
                        <li className='empty'>선택된 증상과 관련된 병명들을 모아줍니다.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Symptom;
