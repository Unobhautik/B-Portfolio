import React from "react";
import { ArrowUpRight } from "lucide-react";

// Import images directly from assets
import deshanaImg from "../assets/images/deshana.jpg";
import honeyImg from "../assets/images/honey.jpg";
import businessImg from "../assets/images/business.jpg";
import cafeImg from "../assets/images/cafe.jpg";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string; // ✅ Made image optional
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Nutritious Meal Suggestion System",
      description:
        "AI-powered nutritious meal suggestion system utilizing Python, FastAPI, and Scikit-learn with an engaging interface built with Streamlit for data visualization.",
      technologies: ["Python", "FastAPI", "Scikit-learn", "Streamlit", "Data Visualization"],
      // ❌ No image property for this project
    },
    {
      title: "Honey E-com",
      description:
        "Online marketplace built with Vite, TypeScript, and React, featuring a contemporary interface with ShadCN-UI and Tailwind CSS for an intuitive purchasing journey.",
      technologies: ["Vite", "TypeScript", "React", "ShadCN-UI", "Tailwind CSS"],
      link: "https://www.kalpraj.in/",
      image: honeyImg,
    },
    {
      title: "Enterprise Platform",
      description:
        "Advanced enterprise platform using Python, Django, and Jazzmin with an advanced control panel. Designed with flexible, accessible layout using HTML, CSS, and SQLite.",
      technologies: ["Python", "Django", "Jazzmin", "HTML/CSS", "SQLite"],
      link: "https://it-services-webapp.vercel.app",
      image: businessImg,
    },
    {
      title: "Shopify Portal",
      description:
        "Tailored Shopify portal leveraging Liquid, CSS, and various extensions for improved capabilities, delivering a distinctive, customer-centered browsing experience.",
      technologies: ["Shopify", "Liquid", "CSS", "E-commerce", "UX Design"],
      link: "https://www.deshanagifting.com/",
      image: deshanaImg,
    },
    {
      title: "Café Portal",
      description:
        "Responsive café portal featuring menu presentation, booking system, and inquiry options using Python and Django, with SQLite for database operations.",
      technologies: ["Python", "Django", "HTML/CSS", "SQLite", "Responsive Design"],
      link: "https://cafe-website-three.vercel.app/",
      image: cafeImg,
    },
  ];

  return (
    <section id="projects" className="section-wrapper py-20">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-12">
        Featured Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="project-item group relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-medium transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-1 mb-4 max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="flex items-center gap-1 shrink-0 hover:opacity-75 transition-opacity duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-underline">View Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
            {/* ✅ Only show image if it exists */}
            {project.image && (
              <div
                className="project-image mt-4 h-64 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
