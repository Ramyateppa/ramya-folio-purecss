const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                  Support Specialist
                </h3>
                <p className="text-xl text-accent font-medium">GLOLED</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground font-medium">May 2023 - Nov 2023</p>
                <p className="text-sm text-muted-foreground">6 months internship</p>
                <p className="text-sm text-muted-foreground">Kukatpally, Hyderabad</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Provided technical and operational support in a high-paced environment, 
                  demonstrating adaptability and problem-solving skills.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">
                  Assisted in optimizing workflows and improving customer satisfaction 
                  through effective communication and technical expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;