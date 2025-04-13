
import { BriefcaseIcon, GraduationCap, Blocks, Users, ArrowUpRight, Code, Briefcase, UserPlus, FileText } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Internships",
      description: "Gain valuable experience and build your professional network through our curated internship opportunities.",
      icon: GraduationCap,
      link: "/services#internships",
      bgColor: "bg-workbridge-blue"
    },
    {
      title: "Apprenticeships",
      description: "Learn while you earn through structured training programs with leading employers.",
      icon: Blocks,
      link: "/services#apprenticeships",
      bgColor: "bg-workbridge-green"
    },
    {
      title: "Freelancing",
      description: "Find gigs that match your skills and schedule while building your professional portfolio.",
      icon: BriefcaseIcon,
      link: "/services#freelancing",
      bgColor: "bg-workbridge-orange"
    },
    {
      title: "Training Programs",
      description: "Develop in-demand skills through our partnerships with training providers and educational institutions.",
      icon: Users,
      link: "/services#training",
      bgColor: "bg-blue-700"
    }
  ];

  const jobCategories = [
    {
      title: "Technology",
      count: 145,
      icon: Code
    },
    {
      title: "Business",
      count: 98,
      icon: Briefcase
    },
    {
      title: "Customer Service",
      count: 67,
      icon: UserPlus
    },
    {
      title: "Creative",
      count: 53,
      icon: FileText
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Opportunities For Growth</h1>
            <p className="text-xl text-gray-700 mb-8">
              Whether you're just starting your career or looking to develop new skills, we have resources to help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#internships">
                <Button className="btn-primary">Internships</Button>
              </a>
              <a href="#apprenticeships">
                <Button className="bg-workbridge-green text-white hover:bg-green-600">Apprenticeships</Button>
              </a>
              <a href="#freelancing">
                <Button className="bg-workbridge-orange text-white hover:bg-orange-600">Freelancing</Button>
              </a>
              <a href="#training">
                <Button variant="outline" className="border-workbridge-blue text-workbridge-blue hover:bg-workbridge-blue hover:text-white">
                  Training Programs
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the different ways WorkBridge can help you grow professionally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                bgColor={service.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Internships</h2>
              <p className="text-gray-700 mb-6">
                Our internship opportunities are designed to provide real-world experience and mentorship for those early in their career journey.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Positions across multiple industries and functions</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Both paid and academic credit opportunities</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Remote, hybrid, and in-person options</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Structured learning and professional development</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="btn-primary">Browse Internships</Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
                alt="Interns collaborating" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeships Section */}
      <section id="apprenticeships" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
                alt="Apprentices learning" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Apprenticeships</h2>
              <p className="text-gray-700 mb-6">
                Our apprenticeship programs combine on-the-job training with classroom instruction, allowing you to earn while you learn.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-green mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Programs in technology, healthcare, manufacturing, and more</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-green mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Competitive wages and benefits</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-green mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Industry-recognized credentials upon completion</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-green mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Clear pathway to full-time employment</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-workbridge-green text-white hover:bg-green-600">Find Apprenticeships</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freelancing Section */}
      <section id="freelancing" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Freelancing</h2>
              <p className="text-gray-700 mb-6">
                Explore gig opportunities that match your skills and schedule, perfect for building your portfolio or supplementing your income.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Short-term projects and ongoing contracts</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Opportunities for beginners and experienced professionals</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Resources to help manage your freelance business</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-workbridge-orange mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Protection for fair payment and work arrangements</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-workbridge-orange text-white hover:bg-orange-600">Explore Gigs</Button>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
                alt="Freelancer working" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="training" className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
                alt="Training workshop" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Training Programs</h2>
              <p className="text-gray-700 mb-6">
                Develop in-demand skills through our curated training opportunities with educational partners and industry experts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowUpRight className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Online courses, bootcamps, and workshops</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Scholarships and financial assistance available</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Industry-aligned curriculum for job-ready skills</span>
                </li>
                <li className="flex items-start">
                  <ArrowUpRight className="text-blue-700 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Career support upon program completion</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button className="bg-blue-700 text-white hover:bg-blue-800">Find Training</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities based on your interests and skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center card-hover border border-gray-100">
                <div className="flex justify-center mb-4">
                  <category.icon className="text-workbridge-blue" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.count} Opportunities</p>
                <Link to={`/services#${category.title.toLowerCase()}`} className="mt-4 inline-block text-workbridge-blue hover:underline">
                  Browse Category
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our video guide to learn how to make the most of WorkBridge.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg w-full max-w-4xl aspect-video flex items-center justify-center">
              <div className="text-center p-10">
                <p className="text-gray-600 mb-4">Video placeholder</p>
                <Button className="btn-primary">Watch Video</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-workbridge-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join WorkBridge today and start your journey toward meaningful employment and career growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-workbridge-blue hover:bg-gray-100 py-6 px-8 text-lg">
                Create an Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
