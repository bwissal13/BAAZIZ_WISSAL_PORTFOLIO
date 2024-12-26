import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Websites = () => {
    const projects = [
        {
            id: '01',
            title: 'ebanking',
            description: 'eBankify is an online banking management system developed using Spring Boot. This application provides a RESTful API for managing banking operations, including user management, account management, and transaction processing. It supports multiple user roles (ADMIN, USER, EMPLOYEE) with defined permissions and access rights.',
            tags: ['SpringBoot', 'Spring Security', 'Jenkins', 'SonarQube','Docker','Liquibase','PostgreSQL'],
            github: 'https://github.com/bwissal13/eBankify',
            demo: 'https://ebanking-demo.com',
            image: '/ebanking.png'
          },
        {
          id: '02',
          title: 'Anazor',
          description: 'Anazor is an innovative art platform combining a marketplace for unique artistic creations and an interactive forum for sharing ideas and critiques. It empowers artists to showcase their work and art enthusiasts to connect in a vibrant and secure online community.',  
          tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],          
          github: 'https://github.com/bwissal13/nvanazor',
          demo: 'https://anazor-demo.com',
          image: '/Anazor.png'
        },
        {
          id: '03',
          title: 'Citronix',
          description: 'An agricultural management system for citrus farms that provides comprehensive tracking of tree productivity and harvest management. Features include seasonal harvest monitoring and detailed agricultural data analysis.',
          tags: ['Spring Boot', 'PostgreSQL', 'Swagger','Jaccoco','Junit','Maven','Docker',],
          github: 'https://github.com/bwissal13/citronix',
          demo: 'https://citronix-demo.com',
          image: '/citronix.png'
        },
        {
          title: 'Evento',
          description: '',
          tags: []
        },
        {
          title: 'Job Dating',
          description: '',
          tags: []
        },
        {
          title: 'Stadium Stream',
          description: '',
          tags: []
        }
      ];

  const [activeProject, setActiveProject] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [projects]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setActiveProject(0); // Reset active project when filters change
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#CE7857] mb-4 ml-10" style={{fontFamily: 'Acme'}}>
          Websites I've Realized
        </h2>

        <p className="text-gray-700 mb-8 max-w-3xl">
          Here are websites I've developed, highlighting my expertise in web development. Each project demonstrates 
          my ability to build responsive, functional, and user-friendly websites while implementing effective coding 
          practices and modern technologies.
        </p>

        {/* Tags Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#884830] mb-3">Filter by technology:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-2
                  ${selectedTags.includes(tag)
                    ? 'bg-[#884830] text-white'
                    : 'bg-[#FFE5DD] text-[#884830] hover:bg-[#884830] hover:text-white'
                  }`}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <FontAwesomeIcon icon={faXmark} className="h-3 w-3" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project List */}
          <div className="lg:w-1/3">
            {filteredProjects.length === 0 ? (
              <div className="text-gray-500 italic p-4">
                No projects match all selected filters
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={project.id}
                  className={`cursor-pointer p-4 border-l-4 mb-4 transition-all duration-300 ${
                    activeProject === index 
                      ? 'border-[#884830] bg-[#FFE5DD]' 
                      : 'border-transparent hover:border-[#CE7857] hover:bg-[#FFE5DD]/50'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#884830]">{project.id}</span>
                    <h3 className="text-xl font-semibold text-[#884830]" style={{fontFamily: 'Acme'}}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Project Details */}
          {filteredProjects.length > 0 && (
            <div className="lg:w-2/3">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 
                            border border-[#FFE5DD]
                            hover:border-[#884830]/30
                            transition-all duration-300">
                <img 
                  src={filteredProjects[activeProject].image}
                  alt={filteredProjects[activeProject].title}
                  className="w-full h-full object-cover
                           transform transition-transform duration-500 ease-in-out
                           hover:scale-95"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#884830]" style={{fontFamily: 'Acme'}}>
                  {filteredProjects[activeProject].title}
                </h3>
                
                <p className="text-gray-700">
                  {filteredProjects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {filteredProjects[activeProject].tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#884830] text-white rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <a 
                    href={filteredProjects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#884830] text-white rounded-lg 
                             hover:bg-[#CE7857] transition-colors shadow-md hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Websites;
