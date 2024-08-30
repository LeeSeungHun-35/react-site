import React from 'react';
import './Info.css';


const nations = [
    {
        name: "대한민국",
        population: 51738071,
        capital: "서울",
        language: "한국어",
    },
    {
        name: "프랑스",
        population: 68000000,
        capital: "파리",
        language: "프랑스어",
    },
    {
        name: "호주",
        population: 25980000,
        capital: "캔버라",
        language: "영어",
    },
    {
        name: "미국",
        population: 334910000,
        capital: "워싱턴DC",
        language: "영어",
    },
    {
        name: "중국",
        population: 1409670000,
        capital: "베이징",
        language: "중국어",
    },
    {
        name: "인도",
        population: 1425000000 ,
        capital: "뉴델리",
        language: "힌디어, 영어",
    },
    {
        name: "일본",
        population: 124040000 ,
        capital: "도쿄",
        language: "일본어",
    }
    ,
    {
        name: "러시아",
        population: 143200000 ,
        capital: "모스크바",
        language: "	러시아어",
    }
];
const Info = () => {
    return (
        <div className="info">
            <h2>2024 Nation Information</h2>
            <p className="footer-text">Created with React</p>
            <hr />
            <div className="nation-list">
                {nations.map((n, index) => (
                    <div key={index} className="nation-card">
                        <h3>{n.name}</h3>
                        <p><strong>Population:</strong> {n.population.toLocaleString()}</p>
                        <p><strong>Capital:</strong> {n.capital}</p>
                        <p><strong>Language:</strong> {n.language}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Info;