import React from 'react';

const RemoteJobs = () => {
  const jobs = [
    { title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote', type: 'Full-time' },
    { title: 'Content Writer', company: 'Creative Agency', location: 'Remote', type: 'Part-time' },
    { title: 'Customer Support', company: 'Support Hub', location: 'Remote', type: 'Contract' },
    { title: 'Marketing Specialist', company: 'Growth Co', location: 'Remote', type: 'Freelance' },
  ];

  const handleApply = (jobTitle) => {
    alert(`Application for ${jobTitle} confirmed!`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Remote Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.type}</p>
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

export default RemoteJobs; 