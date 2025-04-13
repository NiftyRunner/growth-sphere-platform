
import { Github, Linkedin, MapPin, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Alex has 15 years of experience in workforce development and is passionate about creating economic opportunities for underserved communities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Jamie Wilson",
      role: "Head of Partnerships",
      bio: "Jamie builds relationships with employers and training organizations to create pathways to employment for our community.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Taylor Kim",
      role: "Career Development Specialist",
      bio: "Taylor helps job seekers identify their strengths and prepare for successful careers through personalized guidance.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Morgan Chen",
      role: "Technical Lead",
      bio: "Morgan oversees the development of our platform, ensuring it's accessible and effective for all users.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  const values = [
    {
      title: "Inclusive Opportunity",
      description: "We believe everyone deserves access to meaningful work, regardless of background or circumstance."
    },
    {
      title: "Skills-Based Matching",
      description: "We focus on skills and potential rather than just credentials or experience."
    },
    {
      title: "Economic Empowerment",
      description: "We're committed to helping individuals achieve financial independence through decent work."
    },
    {
      title: "Community Support",
      description: "We foster a supportive community where job seekers can learn from each other."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700 mb-6">
              WorkBridge is dedicated to promoting Sustainable Development Goal 8: Decent Work and Economic Growth by connecting job seekers with meaningful opportunities and resources for success.
            </p>
            <div className="flex items-center justify-center space-x-2 text-workbridge-blue">
              <MapPin size={20} />
              <span>We're making an impact globally, starting locally.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                We envision a world where everyone has access to decent work that provides fair income, security in the workplace, social protection, and opportunities for personal development.
              </p>
              <p className="text-gray-700">
                By 2030, we aim to help one million individuals from underrepresented groups find meaningful employment and contribute to sustainable economic growth in their communities.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
                alt="Diverse group of professionals" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at WorkBridge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-workbridge-blue mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-workbridge-blue text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We measure our success by the positive change we create in people's lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">3,500+</p>
              <p className="text-xl">Jobs Filled</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">12,000+</p>
              <p className="text-xl">Skills Developed</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold mb-2">85%</p>
              <p className="text-xl">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're a passionate group of individuals committed to creating economic opportunities for all.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-workbridge-blue mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.github} className="text-gray-500 hover:text-workbridge-blue" target="_blank" rel="noreferrer">
                      <Github size={20} />
                    </a>
                    <a href={member.linkedin} className="text-gray-500 hover:text-workbridge-blue" target="_blank" rel="noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Supporting SDG 8</h2>
              <p className="text-gray-700 mb-4">
                Sustainable Development Goal 8 aims to promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
              </p>
              <p className="text-gray-700 mb-4">
                At WorkBridge, we contribute to this global goal by:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc pl-5">
                <li>Creating pathways to employment for underrepresented groups</li>
                <li>Promoting skill development and lifelong learning</li>
                <li>Supporting small businesses and entrepreneurs</li>
                <li>Advocating for fair labor practices and decent working conditions</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://sustainabledevelopment.un.org/content/images/E_SDG_Icons-08.jpg" 
                alt="Sustainable Development Goal 8" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with these organizations to create economic opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-8 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 font-bold">Partner 1</span>
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 font-bold">Partner 2</span>
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 font-bold">Partner 3</span>
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 font-bold">Partner 4</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
