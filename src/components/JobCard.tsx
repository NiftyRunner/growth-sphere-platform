
interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  imageUrl: string;
}

const JobCard = ({ title, company, location, type, description, imageUrl }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 card-hover">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={company} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
        <div className="mb-4">
          <p className="text-workbridge-blue font-medium">{company}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <button className="btn-primary w-full">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
