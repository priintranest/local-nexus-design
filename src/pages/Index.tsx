
import React, { useState } from 'react';
import { ChevronDown, Users, Globe, Zap, MessageCircle, X, Github, Linkedin, Twitter, MapPin, Network, ShoppingBag, Smartphone } from 'lucide-react';

const Index = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', message: '' });

  const teamMembers = [
    {
      id: 1,
      name: "Anup Pai",
      role: "Founder",
      description: "Anup is a visionary entrepreneur and the driving force behind eSamudaay. With deep expertise in digital infrastructure, Anup leads the mission to enable decentralized local commerce ecosystems across India.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ritika Sharma",
      role: "Chief Operations Officer",
      description: "Ritika is passionate about operational efficiency and local empowerment. She works with community partners and sellers to ensure a smooth onboarding experience and impactful engagement.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c7e9b1?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mohammed Irfan",
      role: "Tech Lead",
      description: "Irfan is the architect behind our tech engine. With years of experience in scalable platforms, he ensures our technology is robust, secure, and aligned with the needs of small enterprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Sonal Mehta",
      role: "Community Manager",
      description: "Sonal builds and nurtures relationships with grassroots communities, helping them adopt digital tools with ease. She's the heart of our user engagement and feedback loop.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Web3", icon: "🔗" },
    { name: "Local APIs", icon: "📍" },
    { name: "Payment Gateway", icon: "💳" },
    { name: "Cloud Infrastructure", icon: "☁️" },
    { name: "Mobile SDKs", icon: "📱" },
    { name: "Analytics", icon: "📊" }
  ];

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent to:', selectedTeamMember.name, messageForm);
    setMessageForm({ name: '', email: '', message: '' });
    setSelectedTeamMember(null);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F8FB] text-[#2E2E2E] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD]/5 to-[#00D4FF]/5"></div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#004AAD]/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-[#00D4FF]/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-[#004AAD]/10 to-[#00D4FF]/10 rounded-full animate-float"></div>
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] bg-clip-text text-transparent leading-tight">
              Empowering Local.<br />Enabling Digital.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the infrastructure that connects local businesses with digital opportunities, 
              creating a decentralized economy that empowers communities across India.
            </p>
          </div>
          
          {/* 3D Illustration Placeholder */}
          <div className="relative mb-12">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/20 to-[#00D4FF]/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-8 h-8 bg-[#004AAD] rounded-lg transform rotate-12 animate-float"></div>
                  <div className="w-8 h-8 bg-[#00D4FF] rounded-full animate-bounce delay-500"></div>
                  <div className="w-8 h-8 bg-[#004AAD] rounded-lg transform -rotate-12 animate-float delay-1000"></div>
                  <Network className="w-8 h-8 text-[#00D4FF] animate-pulse" />
                  <ShoppingBag className="w-12 h-12 text-[#004AAD] animate-bounce" />
                  <MapPin className="w-8 h-8 text-[#00D4FF] animate-pulse delay-700" />
                  <div className="w-8 h-8 bg-[#00D4FF] rounded-lg transform rotate-45 animate-float delay-300"></div>
                  <div className="w-8 h-8 bg-[#004AAD] rounded-full animate-bounce delay-1200"></div>
                  <div className="w-8 h-8 bg-[#00D4FF] rounded-lg transform -rotate-45 animate-float delay-800"></div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('mission')}
            className="group flex items-center justify-center mx-auto bg-white/80 backdrop-blur-sm hover:bg-[#004AAD] hover:text-white transition-all duration-300 px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
          >
            <span className="mr-2 font-medium">Meet the Team</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#004AAD]">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in the power of local communities and the potential of digital technology. 
                Our mission is to bridge the gap between traditional commerce and modern digital infrastructure, 
                creating opportunities for local businesses to thrive in the digital economy.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Decentralized Economy</h3>
                    <p className="text-gray-600">Building networks that empower local businesses</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local First Commerce</h3>
                    <p className="text-gray-600">Prioritizing community needs and local solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Digital Empowerment</h3>
                    <p className="text-gray-600">Providing tools and technology for growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3D Illustration */}
            <div className="relative">
              <div className="w-full h-96 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD]/5 to-[#00D4FF]/5 rounded-3xl"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-[#004AAD] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Smartphone className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#00D4FF] rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="w-12 h-12 bg-[#00D4FF] rounded-full animate-bounce"></div>
                      <div className="w-16 h-16 bg-[#004AAD] rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#004AAD]">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the people shaping the future of local digital commerce
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-[#00D4FF]/20 group-hover:ring-[#004AAD]/30 transition-all">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#004AAD] mb-1">{member.name}</h3>
                    <p className="text-[#00D4FF] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                    <button 
                      onClick={() => setSelectedTeamMember(member)}
                      className="w-full bg-gradient-to-r from-[#004AAD] to-[#00D4FF] hover:from-[#003377] hover:to-[#00B8E6] text-white py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#004AAD]">Tech Stack & Platform</h2>
            <p className="text-xl text-gray-600">Powered by cutting-edge technology</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-[#004AAD]">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to be part of a local digital revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the future of local commerce and community empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#004AAD] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Partner with Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#004AAD] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Join the Movement
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#004AAD] mb-4">eSamudaay</h3>
              <p className="text-gray-600">Empowering local commerce through digital innovation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#004AAD] mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-[#004AAD] transition-colors">Home</a>
                <a href="#team" className="block text-gray-600 hover:text-[#004AAD] transition-colors">Team</a>
                <a href="#" className="block text-gray-600 hover:text-[#004AAD] transition-colors">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-[#004AAD] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#004AAD] mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#004AAD] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#004AAD] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#004AAD] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 eSamudaay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Message Modal */}
      {selectedTeamMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#004AAD]">
                Message {selectedTeamMember.name}
              </h3>
              <button 
                onClick={() => setSelectedTeamMember(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text"
                  value={messageForm.name}
                  onChange={(e) => setMessageForm({...messageForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004AAD] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  value={messageForm.email}
                  onChange={(e) => setMessageForm({...messageForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004AAD] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({...messageForm, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004AAD] focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button 
                  type="button"
                  onClick={() => setSelectedTeamMember(null)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#004AAD] to-[#00D4FF] text-white rounded-xl hover:from-[#003377] hover:to-[#00B8E6] transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
