const Education = () => {
  const educationData = [
    {
      degree: "B.E. in Electrical, Electronics and Communications Engineering",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science & Technology",
      location: "Chennai",
      duration: "2024 - 2027",
      grade: "89%",
      status: "Current"
    },
    {
      degree: "Diploma in Electrical, Electronics and Communications Engineering",
      institution: "State Board of Technical Education and Training",
      location: "Telangana",
      duration: "Sep 2021 - May 2024",
      grade: "82%",
      status: "Completed"
    },
    {
      degree: "Secondary School Education",
      institution: "MGM High School",
      location: "Hyderabad",
      duration: "2021",
      grade: "100%",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location}
                  </p>
                </div>
                
                <div className="text-right mt-4 lg:mt-0">
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-2xl font-bold text-accent">
                      {edu.grade}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {edu.duration}
                    </span>
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

export default Education;