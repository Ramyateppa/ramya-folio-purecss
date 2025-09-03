const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Ramya Teppa
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
              Electronics & Communication Engineering Student
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Passionate about coding, machine learning, and innovative problem-solving
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-medium rounded-lg border border-primary-foreground/20 transition-smooth"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;