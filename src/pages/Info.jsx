import React from 'react';
import './Info.css';


const nations = [
    {
        name: "대한민국",
        population: 51738071,
        capital: "서울",
        language: "한국어",
        link: "대한민국 : https://namu.wiki/w/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD",
    },
    {
        name: "프랑스",
        population: 68000000,
        capital: "파리",
        language: "프랑스어",
        link: "프랑스 : https://namu.wiki/w/%ED%94%84%EB%9E%91%EC%8A%A4",
    },
    {
        name: "호주",
        population: 25980000,
        capital: "캔버라",
        language: "영어",
        link: "호주 : https://namu.wiki/w/%ED%98%B8%EC%A3%BC",
    },
    {
        name: "미국",
        population: 334910000,
        capital: "워싱턴DC",
        language: "영어",
        link: "미국 : https://namu.wiki/w/%EB%AF%B8%EA%B5%AD",
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
