import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: "🌐",
      skills: ["Solana", "Ethereum", "Anchor Framework", "Smart Contracts", "DeFi", "NFTs"],
      gradient: "from-web3-purple to-web3-pink"
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Rust", "JavaScript", "TypeScript", "Java", "Solidity"],
      gradient: "from-web3-cyan to-web3-blue"
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "APIs", "Microservices", "Database Design"],
      gradient: "from-web3-blue to-web3-purple"
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: ["React", "Web3.js", "Solana Web3.js", "Git", "Docker"],
      gradient: "from-web3-pink to-web3-cyan"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building the decentralized future with cutting-edge blockchain technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className={`skill-tag w-full justify-center bg-gradient-to-r ${category.gradient} text-white border-0`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Featured Projects Teaser */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-card border border-border">
            <span className="text-web3-cyan text-xl">🚀</span>
            <span className="text-lg font-medium">
              Building innovative DApps and exploring the latest in 
              <span className="gradient-text font-semibold"> Web3 ecosystem</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;