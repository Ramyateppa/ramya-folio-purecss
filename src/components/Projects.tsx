const Projects = () => {
  const projects = [
    {
      title: "ML-Based Stroke Risk Prediction",
      description: "Developed a machine learning model to predict heart disease using medical attributes, aimed at supporting early diagnosis and improving patient care and healthcare efficiency.",
      technologies: ["Python", "NumPy", "Pandas", "scikit-learn", "Logistic Regression", "Jupyter Notebook"],
      highlights: [
        "Used UCI Heart Disease dataset for training and validation",
        "Implemented Logistic Regression for accurate prediction",
        "Focused on early diagnosis to improve healthcare efficiency"
      ]
    },
    {
      title: "Grade Calculator",
      description: "Developed an interactive grade calculator that dynamically calculates GPA based on user input, providing students with real-time academic performance tracking.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Interactive user interface for seamless experience",
        "Dynamic GPA calculation based on real-time input",
        "Responsive design for multiple device compatibility"
      ]
    },
    {
      title: "Pomodoro Application",
      description: "Built a productivity timer app to help manage work and study intervals efficiently, implementing proven time management techniques for enhanced focus.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Integrated dynamic timers using JavaScript",
        "Customizable work and break intervals",
        "User-friendly interface for productivity enhancement"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth group">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4 group-hover:text-accent transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;