
import React from 'react';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "MERN Stack Developer",
      company: "Pavans Group",
      period: "Dec 2024 - Present",
      location: "Vadodara, Gujarat",
      description: [
        "Architected full-stack applications using MERN stack with Vite and Next.js frameworks for enhanced performance",
        "Designed responsive UI components with React and Redux that improved overall user experience",
        "Engineered efficient backend services with Node/Express and optimized MongoDB database operations"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Anant Soft Computing(ASC)",
      period: "Jul 2023 - Nov 2023",
      location: "Vadodara, Gujarat",
      description: [
        "Developed a full-stack website for the company using React.js components and optimization techniques",
        "Collaborated in an Agile environment to implement UI/UX improvements based on user feedback"
      ]
    },
    {
      title: "Front-End Developer",
      company: "Anant Soft Computing(ASC)",
      period: "Jan 2023 - Jun 2023",
      location: "Vadodara, Gujarat",
      description: [
        "Developed responsive, cross-browser compatible web interfaces",
        "Collaborated with Django/Python backend systems for seamless data integration"
      ]
    },
    {
      title: "Junior Python Developer",
      company: "Anant Soft Computing(ASC)",
      period: "Aug 2022 - Dec 2022",
      location: "Vadodara, Gujarat",
      description: [
        "Built Django web applications with 40% improved code coverage through unit testing",
        "Implemented Python, Django, HTML/CSS while enhancing code through reviews"
      ]
    }
  ];

  const educations = [
    {
      title: "B.Tech in Computer Science",
      company: "GSFC University",
      period: "2021 - 2025",
      location: "Vadodara, Gujarat",
      description: []
    },
    {
      title: "HSC - Mathematics",
      company: "Tree House High School",
      period: "2019 - 2021",
      location: "Vadodara, Gujarat",
      description: []
    }
  ];

  return (
    <section id="experience" className="section-wrapper py-20">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-12">Experience & Education</h2>
      
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-medium mb-6">Work Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4 className="text-lg font-medium">{exp.title}</h4>
              <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
                <span>{exp.company}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{exp.period}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{exp.location}</span>
              </div>
              {exp.description.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm">• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl md:text-2xl font-medium mb-6">Education</h3>
        <div className="space-y-4">
          {educations.map((edu, index) => (
            <div key={index} className="experience-item">
              <h4 className="text-lg font-medium">{edu.title}</h4>
              <div className="flex flex-wrap items-center gap-x-2 text-muted-foreground">
                <span>{edu.company}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{edu.period}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
