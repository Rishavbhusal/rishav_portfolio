import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-hero rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-web3-cyan rounded-full opacity-10 blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="px-4 py-2 bg-gradient-web3 text-white border-0">
                  Web3 Enthusiast
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  Hi, I'm{" "}
                  <span className="gradient-text">
                    Rishav Bhusal
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-xl">
                  Blockchain developer crafting the future of decentralized applications with 
                  <span className="text-web3-cyan font-semibold"> Solana</span>, 
                  <span className="text-web3-purple font-semibold"> Ethereum</span>, and 
                  <span className="text-web3-pink font-semibold"> cutting-edge Web3 technologies</span>.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-web3 hover:scale-105 transition-transform duration-300 text-white border-0"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-web3-cyan text-web3-cyan hover:bg-web3-cyan/10 glow-hover"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:rishav12@gmail.com"
                  className="p-3 rounded-full bg-card border border-border hover:border-web3-purple glow-hover"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rishav-bhusal-b0854a287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-web3-cyan glow-hover"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="#"
                  className="p-3 rounded-full bg-card border border-border hover:border-web3-pink glow-hover"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-hero rounded-full blur-sm opacity-75 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="/lovable-uploads/4baa8587-f1d8-4551-b69b-c23965b8f2cb.png"
                    alt="Rishav Bhusal"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-web3-purple rounded-full flex items-center justify-center animate-bounce delay-1000">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-web3-cyan rounded-full flex items-center justify-center animate-bounce delay-500">
                  <span className="text-xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;