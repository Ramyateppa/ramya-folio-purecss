const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 85 },
    { name: "SQL", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 75 },
    { name: "Git & GitHub", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Machine Learning", level: 70 },
  ];

  const languages = [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Professional" },
  ];

  const certifications = [
    "Python – HackerRank",
    "SQL – HackerRank", 
    "Generative AI – GUVI & HCL"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent rounded-full h-2 transition-smooth" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-accent font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;