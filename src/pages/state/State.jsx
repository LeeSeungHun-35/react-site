import React, { useState } from 'react';
import './State.css';

const State = () => {
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");

    const func1 = () => {
        setParam1("State사용 연습");
    };

    const func2 = () => {
        setParam1("");
    };

    const textInput = (e) => {
        const { value } = e.target;
        setParam2(value);
    };

    return (
        <div className='state'>
            <div className='state-card'>
                <h2>State 컴포넌트 사용 연습</h2>
                <p>{param1}</p>
                <button onClick={func1}>변경</button>
                <button onClick={func2}>초기화</button>

                <hr />

                <input 
                    type='text' 
                    onChange={textInput} 
                    name='param2' 
                    placeholder='여기에 입력하세요' 
                />
                <p>입력값: {param2}</p>
            </div>
        </div>
    );
};

export default State;