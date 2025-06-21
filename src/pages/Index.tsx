import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Brain, BarChart3, Edit3, ArrowRight, Download, Star, Zap, Sparkles } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingIcons from "@/components/FloatingIcons";

const Index = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Tech Innovator", "GDSC Android Lead", "AI Explorer", "Content Creator"];
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Languages": ["C++", "Python", "JavaScript", "SQL", "Java"],
    "Web": ["HTML/CSS", "Node.js", "Express.js", "React", "Next.js"],
    "AI/ML": ["TensorFlow", "Scikit-learn", "LangChain", "RAG", "OpenAI API", "Hugging Face"],
    "Tools": ["GitHub", "Android Studio", "Postman", "Docker"]
  };

  const projects = [
    {
      title: "Intelligent Recruitment System",
      description: "LLM-based candidate screening using LangChain, OpenAI, and Pinecone for automated recruitment processes",
      tech: ["Python", "LangChain", "OpenAI API", "Pinecone"],
      github: "#",
      demo: "#"
    },
    {
      title: "LinkedIn Content Creator Dashboard",
      description: "Automated content generation platform using Python and Streamlit for social media management",
      tech: ["Python", "Streamlit", "OpenAI API", "Analytics"],
      github: "#",
      demo: "#"
    },
    {
      title: "StudyBuddy",
      description: "Android study planner application built with Jetpack Compose, Room database, and Hilt dependency injection",
      tech: ["Android", "Jetpack Compose", "Room", "Hilt"],
      github: "#",
      demo: "#"
    },
    {
      title: "AuraNotes",
      description: "Full-stack journaling platform with AI insights using Next.js, Clerk authentication, and Prisma ORM",
      tech: ["Next.js", "Clerk", "Prisma", "AI Integration"],
      github: "#",
      demo: "#"
    }
  ];

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android App Development",
      description: "Native Android applications with modern UI/UX"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Responsive web applications using modern frameworks"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Solutions",
      description: "Intelligent systems using machine learning and NLP"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis",
      description: "Data visualization and insights extraction"
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Content Creation",
      description: "Tech-focused content and educational materials"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      <ParticleBackground />
      <FloatingIcons />
      
      {/* Enhanced Navigation with glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              <Sparkles className="w-6 h-6 inline-block mr-2 text-blue-400" />
              Maheshwary
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Services", "Projects", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative hover:text-blue-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with parallax */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <AnimatedSection className="container mx-auto px-6 text-center relative z-20">
          <div className="mb-8">
            <div className="relative group">
              <img 
                src="/lovable-uploads/3c9d0479-3e04-424a-9dc2-2727e2109727.png" 
                alt="Maheshwary Narkhede" 
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl hover:scale-110 transition-all duration-500 hover:shadow-blue-500/50"
              />
              <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400/20 to-purple-500/20 animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Maheshwary</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className="text-gray-300 mr-2">A passionate </span>
            <TypewriterText 
              texts={roles}
              className="text-blue-400 font-semibold"
              speed={100}
              deleteSpeed={50}
              pauseDuration={2000}
            />
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Final-year B.Tech IT student passionate about tech innovation, AI/ML, and building solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <a href="#projects" className="flex items-center gap-2">
                Explore My Work 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <Zap className="w-4 h-4 opacity-70" />
              </a>
            </Button>
            <Button variant="outline" className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
        </AnimatedSection>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <Star className="w-8 h-8 inline-block mr-4 text-yellow-400 animate-spin" />
              About Me
            </h2>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6 mb-12">
                <p className="text-xl">
                  I am a passionate final-year IT student with a strong desire to drive innovation in technology. 
                  I believe in learning, building, and sharing—recently beginning content creation to educate and inspire others in tech.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-left" delay={400}>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      Education
                    </h3>
                    <div className="space-y-3">
                      <p className="font-semibold text-lg">B.Tech in Information Technology</p>
                      <p className="text-gray-400">JSPM Rajarshi Shahu College of Engineering, Pune</p>
                      <p className="text-gray-400">(2022–2026)</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" delay={600}>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-2 border-blue-400 pl-4">
                        <p className="font-semibold">Software Engineer Intern</p>
                        <p className="text-gray-400">ClodQA (Present)</p>
                      </div>
                      <div className="border-l-2 border-purple-400 pl-4">
                        <p className="font-semibold">Android Development Lead</p>
                        <p className="text-gray-400">GDSC RSCOE (June 2024–Present)</p>
                      </div>
                      <div className="border-l-2 border-pink-400 pl-4">
                        <p className="font-semibold">Joint Secretary</p>
                        <p className="text-gray-400">Rotaract Club RSCOE (2023-2024)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="scale-in">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <AnimatedSection key={category} animation="fade-up" delay={index * 100}>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3 group-hover:animate-spin"></div>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-gray-700/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              What I Offer
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 150}>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm group cursor-pointer">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="text-blue-400 mb-6 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 transform">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm group cursor-pointer">
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black group transition-all duration-300">
                          <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          GitHub
                        </Button>
                        <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black group transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-6 h-6 text-blue-400" />, text: "maheshwary.narkhede@example.com" },
                    { icon: <Linkedin className="w-6 h-6 text-blue-400" />, text: "linkedin.com/in/maheshwary-narkhede" },
                    { icon: <Github className="w-6 h-6 text-blue-400" />, text: "github.com/maheshwary-narkhede" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <div className="group-hover:animate-bounce">
                        {item.icon}
                      </div>
                      <span className="group-hover:text-blue-400 transition-colors">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" delay={400}>
              <form onSubmit={handleContactSubmit} className="space-y-6 p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl backdrop-blur-sm border border-gray-700">
                <Input 
                  placeholder="Your Name" 
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 transition-all duration-300 hover:border-gray-500"
                  required
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 transition-all duration-300 hover:border-gray-500"
                  required
                />
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-gray-800/50 border-gray-600 focus:border-blue-400 min-h-[120px] transition-all duration-300 hover:border-gray-500"
                  required
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Send Message
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © 2024 Maheshwary Narkhede. Crafted with passion and code.
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
