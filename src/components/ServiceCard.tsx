
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  bgColor: string;
}

const ServiceCard = ({ title, description, icon: Icon, link, bgColor }: ServiceCardProps) => {
  return (
    <Link to={link} className="block">
      <div className={`${bgColor} rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
        <div className="mb-4">
          <Icon className="text-white" size={36} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-white text-opacity-90">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
