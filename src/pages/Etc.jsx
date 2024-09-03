import React from 'react';
import './Etc.css'



const heroes = [
  { name: '세종대왕', achievement: '한글 창제' },
  { name: '이순신', achievement: '명량해전 승리' },
  { name: '김구', achievement: '독립운동' },
  { name: '유관순', achievement: '3.1 운동 참여' },
  { name: '장영실', achievement: '천문학 기구 발명' },
  { name: '안중근', achievement: '독립운동 및 의거' },
  { name: '홍익인간', achievement: '한국의 민족 정체성' },
  { name: '강감찬', achievement: '고려시대 군사적 업적' },
  { name: '정약용', achievement: '실학 발전' },
  { name: '신사임당', achievement: '여성 교육' }
];



const Etc = () => {
  return (
    <div className='Etc'>
      <div className='contents'>
        새로운 페이지
      </div>
    </div>
  );
}
export default Etc;