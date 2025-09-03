const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Ramya Teppa
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Electronics & Communication Engineering student passionate about innovation, 
            coding, and creating meaningful solutions through technology.
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:ramyateppa61@gmail.com" 
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-smooth"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/ramya-teppa-93ba15342" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-smooth"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="pt-6 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Ramya Teppa. Built with passion and dedication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;