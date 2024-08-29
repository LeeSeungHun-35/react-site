/* props: 상위 컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
   Home -> Prop name, age    
*/



import React from 'react'
const Home = () => {
    return (
        <div className='home'>
            <div>
                <h2>Home.jsx</h2>
            </div>
        </div>
    );
}

export default Home