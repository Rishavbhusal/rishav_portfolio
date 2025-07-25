import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-web3-purple rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-web3-cyan rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build the <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting Web3 projects? Let's connect and create something amazing!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-card p-6 glow-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-web3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a 
                      href="mailto:rishav12@gmail.com"
                      className="text-web3-cyan hover:text-web3-purple transition-colors"
                    >
                      rishav12@gmail.com
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-6 glow-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-web3-cyan to-web3-blue">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/rishav-bhusal-b0854a287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-web3-cyan hover:text-web3-purple transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-web3-pink to-web3-purple">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Availability</h3>
                    <p className="text-muted-foreground">
                      Open for Web3 opportunities
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="glass-card p-8 text-center">
                <div className="space-y-6">
                  <div className="text-6xl mb-4">🤝</div>
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to <span className="gradient-text">Collaborate?</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're looking to build a DApp, explore blockchain solutions, 
                    or discuss Web3 innovations, I'm here to help bring your ideas to life.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-web3 hover:scale-105 transition-transform duration-300 text-white border-0"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full border-web3-cyan text-web3-cyan hover:bg-web3-cyan/10"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/rishav-bhusal-b0854a287"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              
              {/* Specialties */}
              <Card className="glass-card p-6">
                <h4 className="font-semibold mb-4">Currently Exploring:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-web3-purple rounded-full"></span>
                    <span>Advanced Solana DApp development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-web3-cyan rounded-full"></span>
                    <span>Cross-chain interoperability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-web3-pink rounded-full"></span>
                    <span>DeFi protocol development</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;