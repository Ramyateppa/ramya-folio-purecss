const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm actively seeking internship and placement opportunities where I can apply my skills 
            and contribute meaningfully to real-world projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:ramyateppa61@gmail.com" className="text-accent hover:text-accent/80 transition-smooth">
                    ramyateppa61@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a href="https://linkedin.com/in/ramya-teppa-93ba15342" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-smooth">
                    linkedin.com/in/ramya-teppa-93ba15342
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Kukatpally, Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-smooth">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Let's Connect
            </h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about leveraging technology to solve real-world problems and am always 
                excited to discuss new opportunities, projects, or collaborations.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Open to internship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Available for freelance projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Interested in machine learning collaborations</span>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="mailto:ramyateppa61@gmail.com" 
                  className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full justify-center"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;