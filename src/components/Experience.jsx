function Experience() {
    return (
        <section className="py-10 px-4">
            <h2 className="text-3xl font-bold text-[#CE7857] mb-12 ml-20" style={{fontFamily: 'Acme'}}>
                Professional Experience
            </h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Internship Section */}
                <div className="space-y-4">
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-[#343434]">
                        <span>💼</span> Internship | Media Digital Invest
                    </h3>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434]">
                        <li>
                            Gained practical experience in <span className="font-semibold">software development workflows</span> under the mentorship of industry professionals.
                        </li>
                        <li>
                            Contributed to building and optimizing <span className="font-semibold">backend systems</span> to ensure efficient data processing and application performance.
                        </li>
                        <li>
                            Developed and enhanced <span className="font-semibold">frontend interfaces</span>, improving user experience and ensuring responsive design across devices.
                        </li>
                        <li>
                            Improved collaboration and problem-solving skills while working on real-world challenges.
                        </li>
                    </ul>
                </div>

                {/* Training Section */}
                <div className="space-y-4">
                    <h3 className="flex items-center gap-3 text-xl font-semibold text-[#343434]">
                        <span>🎓</span> Training | YouCode
                    </h3>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434]">
                        <li>
                            Completed an intensive program focused on <span className="font-semibold">Full Stack Development</span>, mastering technologies like <span className="font-semibold">Java, Spring Boot, Angular, React, and PostgreSQL</span>.
                        </li>
                        <li>
                            Built projects demonstrating expertise in <span className="font-semibold">data management, backend logic, and frontend interfaces</span>.
                        </li>
                        <li>
                            Acquired essential soft skills, including <span className="font-semibold">team collaboration, project management, and technical communication</span>.
                        </li>
                    </ul>
                </div>

                {/* See My Works Button */}
                <div className="flex justify-end mt-8">
                    <button className="flex items-center gap-2 text-[#343434] hover:opacity-80">
                        See My Works <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Experience;
