
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-wrapper py-20">
      <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">About Me</h2>
        
        <p className="text-lg max-w-3xl leading-relaxed">
          I'm a <span className="font-medium text-forest">Full Stack Developer</span> passionate about the MERN stack and 
          Python-Django. I build scalable web applications with clean APIs, intuitive UIs, and 
          secure backends. Known for optimizing performance, writing efficient code, and enhancing user experience.
        </p>

        <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Frontend Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>React.js, Redux, JavaScript ES6+</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>HTML5, CSS3, TailwindCSS, Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Responsive Design, Animations</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>State Management, API Integration</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Backend Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Node.js, Express.js, Django</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Python, RESTful APIs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>MongoDB, Firebase, Supabase</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Authentication, Database Design</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Tools & Technologies</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Git, GitHub, Webpack, Docker</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Postman, VS Code</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>AWS, Vercel, Netlify, Heroku</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Other Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Agile Methodology, CI/CD</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest rounded-full"></span>
                <span>Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
