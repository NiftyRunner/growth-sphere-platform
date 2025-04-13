import { BriefcaseIcon, GraduationCap, HandshakeIcon, UsersIcon } from 'lucide-react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import JobCard from '@/components/JobCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const Index = () => {
  const features = [
    {
      title: "Entry-Level Jobs",
      description: "Find opportunities perfect for those starting their career journey with minimal experience required.",
      icon: BriefcaseIcon
    },
    {
      title: "Skill Building",
      description: "Access resources to develop professional skills that employers actually want.",
      icon: GraduationCap
    },
    {
      title: "Inclusive Hiring",
      description: "Connecting diverse talent with employers committed to inclusive workplaces.",
      icon: UsersIcon
    },
    {
      title: "Career Support",
      description: "Get guidance for resume building, interview preparation, and career development.",
      icon: HandshakeIcon
    }
  ];

  const jobListings = [
    {
      title: "Junior Web Developer",
      company: "TechStart Solutions",
      location: "New York, NY (Remote Available)",
      type: "Full-time",
      description: "We're looking for a passionate junior web developer to join our growing team. You'll work on exciting projects and learn from experienced developers.",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Marketing Intern",
      company: "GrowBrand Agency",
      location: "Chicago, IL",
      type: "Internship",
      description: "Join our marketing team to gain hands-on experience in digital marketing, content creation, and social media management.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80"
    },
    {
      title: "Customer Service Representative",
      company: "ConnectCare Solutions",
      location: "Austin, TX (Remote)",
      type: "Part-time",
      description: "Help customers solve problems and provide exceptional service. No prior experience required - we'll train you!",
      imageUrl: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UI Designer at CreativeStack",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      testimonial: "WorkBridge helped me land my first job after graduation. The resources and support they provided were invaluable in my job search process."
    },
    {
      name: "Michael Chen",
      role: "Junior Developer at TechHub",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      testimonial: "I was struggling to find entry-level positions until I discovered WorkBridge. Within a month, I secured three interviews and got my dream job!"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Associate at GrowthNow",
      avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      testimonial: "The skill assessment tools helped me identify my strengths and weaknesses. Thanks to WorkBridge, I improved my skills and found a job that values my unique talents."
    }
  ];

  return (
    <div>
      <Navbar/>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How WorkBridge Helps You</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our platform is designed to break down barriers to employment and create pathways to decent work for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-workbridge-blue text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
              <p className="text-blue-100">
                Join thousands of job seekers who have found meaningful employment through WorkBridge.
              </p>
            </div>
            <div>
              <Link to="/register">
                <Button className="bg-white text-workbridge-blue hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from people who have found meaningful employment through WorkBridge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-workbridge-blue">5,000+</p>
              <p className="text-gray-600 mt-2">Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-workbridge-green">1,200+</p>
              <p className="text-gray-600 mt-2">Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-workbridge-orange">3,500+</p>
              <p className="text-gray-600 mt-2">Jobs Posted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-workbridge-blue">85%</p>
              <p className="text-gray-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
