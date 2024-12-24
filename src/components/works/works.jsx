import React from 'react';

function Works() {
    return (
        <section className="max-w-6xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-[#884830] mb-6 ml-10" style={{fontFamily: 'Acme'}}>
                My Works
            </h2>
            
            <p className="text-gray-700 mb-12">
                Explore the design projects that showcase my skills in Figma and web development. Here you can see how 
                I bring ideas to life—from intuitive user interfaces to fully functional websites.
            </p>

            <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#884830] mb-6 " style={{fontFamily: 'Acme' , marginLeft: '90px'}}>
                    Figma Designs
                </h3>
                
                <p className="text-gray-700 mb-8">
                    This section highlights some of my key design projects created in Figma. These designs focus on crafting 
                    seamless and user-centered digital experiences, from concept to prototype.
                </p>

                <div className="mb-8">
                    <h4 className="text-xl font-bold text-[#473D3D] mb-4" style={{fontFamily: 'Acme' , marginLeft: '140px'}}>
                        Project: Enterprise Management Dashboard
                    </h4>
                    
                    <div className="bg-[#FFE5DD] p-6 rounded-lg">
                        <p className="text-[#884830]">
                            This project involved designing a clean and intuitive dashboard for an enterprise management platform. 
                            The system centralizes key functionalities such as user management, role assignments, meetings, 
                            requests, announcements, and activity logs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;
