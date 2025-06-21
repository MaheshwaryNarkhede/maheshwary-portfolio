
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Brain, BarChart3, Edit3, ArrowRight, Download } from "lucide-react";

const Index = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Tech Innovator", "GDSC Android Lead", "AI Explorer", "Content Creator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Maheshwary
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/3c9d0479-3e04-424a-9dc2-2727e2109727.png" 
              alt="Maheshwary Narkhede" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400/50 shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Maheshwary</span>
          </h1>
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className="text-gray-300">A passionate </span>
            <span className="text-blue-400 font-semibold animate-pulse">
              {roles[currentRole]}
            </span>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Final-year B.Tech IT student passionate about tech innovation, AI/ML, and building solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              <a href="#projects" className="flex items-center gap-2">
                Explore My Work <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-gray-300 leading-relaxed space-y-6 animate-fade-in">
              <p>
                I am a passionate final-year IT student with a strong desire to drive innovation in technology. 
                I believe in learning, building, and sharing—recently beginning content creation to educate and inspire others in tech.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
                    <div>
                      <p className="font-semibold">B.Tech in Information Technology</p>
                      <p className="text-gray-400">JSPM Rajarshi Shahu College of Engineering, Pune</p>
                      <p className="text-gray-400">(2022–2026)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Experience</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Software Engineer Intern</p>
                        <p className="text-gray-400">ClodQA (Present)</p>
                      </div>
                      <div>
                        <p className="font-semibold">Android Development Lead</p>
                        <p className="text-gray-400">GDSC RSCOE (June 2024–Present)</p>
                      </div>
                      <div>
                        <p className="font-semibold">Joint Secretary</p>
                        <p className="text-gray-400">Rotaract Club RSCOE (2023-2024)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400 text-purple-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>maheshwary.narkhede@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <span>linkedin.com/in/maheshwary-narkhede</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-blue-400" />
                  <span>github.com/maheshwary-narkhede</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <Input 
                placeholder="Your Name" 
                className="bg-gray-800 border-gray-600 focus:border-blue-400"
                required
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-800 border-gray-600 focus:border-blue-400"
                required
              />
              <Textarea 
                placeholder="Your Message" 
                className="bg-gray-800 border-gray-600 focus:border-blue-400 min-h-[120px]"
                required
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Maheshwary Narkhede. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
