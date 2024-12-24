import React from 'react';

function About() {
    return (
        <section className="about " id="about">
            <div className="max-w-6xl  mx-auto p-6">
                <h2 className="text-3xl font-bold text-[#88483] mb-4 ml-10 " style={{fontFamily: 'Acme'}}>About me</h2>
                <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans'}}>
                    I am a dedicated Full-Stack Developer with a strong focus on creating
                    modern, scalable, and efficient web applications. Currently advancing my
                    skills at Youcode - UM6P, I leverage my solid foundation in mathematics
                    and problem-solving to develop innovative solutions. With strong
                    communication skills, active listening, adaptability, and a collaborative
                    approach to teamwork, I am committed to delivering exceptional user
                    experiences through creativity and technical expertise.
                </p>
            </div>
        </section>
    );
}

export default About;

