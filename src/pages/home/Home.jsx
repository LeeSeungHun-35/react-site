import React from 'react';
import './Home.css';

const Home = ({ name, age }) => {
    return (
        <div className='home'>
            <div className='home-card'>
                <h2>Welcome to My React-site</h2>
                <p>My name is Seung-Hun Lee<span className='highlight'>{name}</span>.</p>
                <p>I am <span className='highlight'>{24}</span> years old.</p>
                <p>I'm a university student interested in cybersecurity.</p>
            </div>
        </div>
    );
}

export default Home;