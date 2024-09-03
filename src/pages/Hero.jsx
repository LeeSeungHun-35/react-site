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
    <div className='container'>
      <div className='sidebar'>
        <h2>독립유공자 1급</h2>
        <ul><br/>
        강우규(姜宇奎)<br/>
        김구(金九)<br/>
        김규식(金奎植)<br/>
        김좌진(金佐鎭)<br/>
        김창숙(金昌淑)<br/>
        민영환(閔泳煥)<br/>
        서재필(徐載弼)<br/>
        손병희(孫秉熙)<br/>
        신익희(申翼熙)<br/>
        쑨원(孫文)(중국인)<br/>
        쑹메이링(宋美齡)(중국인,여)<br/>
        안중근(安重根)<br/>
        안창호(安昌浩)<br/>
        오동진(吳東振)<br/>
        유관순(柳寬順)(여)<br/>
        윤봉길(尹奉吉)<br/>
        이강년(李康秊)<br/>
        이승훈(李昇薰)<br/>
        이회영(李會榮)<br/>
        이준(李儁)<br/>
        임병직(林炳稷)<br/>
        장제스(蔣介石)(중국인)<br/>
        조만식(曺晩植)<br/>
        조병세(趙秉世)<br/>
        조소앙(趙素昻)<br/>
        천궈푸(陳果夫)(중국인)<br/>
        천치메이(陳其美)(중국인)<br/>
        최익현(崔益鉉)<br/>
        한용운(韓龍雲)<br/>
        허위(許蔿)[2]<br/>
        홍범도<br/>
        절영<br/>
        </ul>
      </div>
      <div className='contents'>
        <h2>독립운동가 및 업적</h2>
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
