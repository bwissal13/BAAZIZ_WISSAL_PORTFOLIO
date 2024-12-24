import React from 'react';

function Education() {
    return (
        <section className="py-10 px-4 bg-white">
            <h2 className="text-3xl font-bold text ml-20 text-[#CE7857] block" style={{fontFamily: 'Acme'}}>
                Education Timeline
            </h2>
            
            <div className="max-w-6xl mx-auto mt-15">
                <div className="relative">
                    {/* Horizontal line */}
                    <div className="absolute z-0 top-1/2 left-0 right-0 h-[0.5px] bg-[#884830] min-w-full"></div>
                    
                    {/* Timeline points */}
                    <div className="flex  items-center">
                        {/* 2019-2020 */}
                        <div className="w-1/3" style={{marginTop: '153px'}}>
                            <div className="text-center">
                                <p className="text-[#884830] font-semibold text-xl mb-4">2019-2020</p>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <div className="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="max-w-xs mx-auto mt-2">
                                    <h3 className="text-[#343434] text-lg font-semibold">High School Diploma in Mathematics (Baccalaureate)</h3>
                                    <p className="text-[#343434] text-sm mt-1">International program with a strong focus on mathematical sciences.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2020-2022 */}
                        <div className="w-1/3 " style={{marginBottom: '125px'}}>
                            <div className="text-center">
                                <div className="max-w-xs mx-auto">
                                    <h3 className="text-[#343434] text-lg font-semibold">Faculty of Sciences Semlalia SMA</h3>
                                    <p className="text-[#343434] text-sm mt-1">Specialized in mathematics and analytical problem-solving.</p>
                                </div>
                                <div class="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <p className="text-[#884830] font-semibold text-xl mt-4">2020-2022</p>
                            </div>
                        </div>

                        {/* 2023-2025 */}
                        <div className="w-1/3 " style={{marginTop: '124px'}}>
                            <div className="text-center">
                                <p className="text-[#884830] font-semibold text-xl mb-4">2023-2025</p>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <div className="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="max-w-xs mx-auto mt-2">
                                    <h3 className="text-[#343434] text-lg font-semibold">Youcode - UM6P</h3>
                                    <p className="text-[#343434] text-sm mt-1">International program with a strong focus on mathematical sciences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
