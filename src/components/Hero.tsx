import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Connecting Talent With <span className="text-workbridge-blue">Meaningful</span> Opportunities
            </h1>
            <p className="text-lg text-gray-600">
              WorkBridge helps job seekers find entry-level positions, internships, and skill-building resources that promote economic inclusion and decent work for all.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/jobs">
                <Button className="btn-primary">Find Opportunities</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-workbridge-blue text-workbridge-blue hover:bg-workbridge-blue hover:text-white">
                  Join WorkBridge
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=750&q=80" 
              alt="People working together" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
