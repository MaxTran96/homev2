import React from 'react';
import { Image }from 'react-bootstrap';
import './Bio.css'

const Bio = () => {
    return(
        <div className="bio">
            <div className="bio-img">
                <Image src={'./images/profile-min.png'} alt="profile" circle responsive/>
            </div>
            <div className="bio-container">
                <h1>Max Tran</h1>
					<h4>Software Engineer</h4>
					
					<p id = "bio"> Hello, I'm currently a design-minded software engineer at Amazon Alexa. 
                    My job is to harness the power of AI and help build this friendly AI assistant known as Alexa. I previously
                    interned at Nlinkz as a software engineer with a focus on creating beautiful websites
                    both frontend and backend using modern web technologies. Not only that, I also interned
                    at CitrusBerry as a Machine Learning Engineer intern whose works are on 
                    Computer Vision, Natural Language Processing, and many others. During my free time, 
                    I like reading AI research paper and building personal web apps. Outside of technology, 
                    you can find me dancing in a studio or working out in the gym..</p>
            </div>
        </div>
    );
}
export default Bio;