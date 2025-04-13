import React from 'react';

const PartTimeJobs = () => {
  const jobs = [
    { title: 'Retail Associate', company: 'Shop Smart', location: 'Chennai, TN' },
    { title: 'Tutor', company: 'Learn Fast', location: 'Remote' },
    { title: 'Barista', company: 'Coffee House', location: 'Kolkata, WB' },
    { title: 'Fitness Trainer', company: 'Fit Club', location: 'Hyderabad, TS' },
  ];

  const handleApply = (jobTitle) => {
    alert(`Application for ${jobTitle} confirmed!`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Part-time Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <button 
              onClick={() => handleApply(job.title)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartTimeJobs; 