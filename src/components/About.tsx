const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Academic Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                3rd year Electronics and Communication Engineering student with outstanding academic performance: 
                89% in B.Tech, 82% in Diploma, and 100% in SSC. Strong foundation in electronics combined with 
                modern coding skills.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Technical Passion
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developed expertise in Python, SQL, HTML, and CSS with hands-on project experience. 
                Currently exploring Machine Learning to bridge traditional electronics with cutting-edge technology.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Creative Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I'm a creative thinker who enjoys drawing and sketching, enhancing my 
                innovative approach to problem-solving and bringing unique perspectives to technical challenges.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Professional Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Strong soft skills in communication, adaptability, teamwork, and time management. 
                Actively seeking opportunities to apply my skills and contribute meaningfully to real-world projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;