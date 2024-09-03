import React from 'react';
import './Hero.css';

const heroes = [
  { name: '김구', achievement: '독립운동 및 대한민국 임시정부 주석' },
  { name: '유관순', achievement: '3.1 운동 참여 및 순국' },
  { name: '안중근', achievement: '이토 히로부미 저격 의거' },
  { name: '윤봉길', achievement: '상하이 홍커우 공원 의거' },
  { name: '신채호', achievement: '역사 연구 및 독립운동' },
  { name: '안창호', achievement: '독립운동 및 흥사단 창립' },
  { name: '이봉창', achievement: '도쿄 일왕 저격 시도' },
  { name: '김좌진', achievement: '청산리 전투 승리' },
  { name: '남자현', achievement: '여성 독립운동가 및 북간도 활동' },
  { name: '이회영', achievement: '신흥무관학교 설립 및 독립운동' }
];

const Etc = () => {
  return (
    <div className='per'>
      <div className='contents'>
        <h2>독립운동가</h2>
        <hr />
        <h3 className='fun'>map() 함수 사용 연습</h3>
        <br />
        {heroes.map((hero, index) => (
          <div key={index} className="hero-card">
            <h3>{hero.name}</h3>
            <p><strong>업적:</strong> {hero.achievement}</p>
          </div>
        ))}
        <h5>한국을 빛낸 독립운동가들</h5>
      </div>
    </div>
  );
};

export default Etc;
