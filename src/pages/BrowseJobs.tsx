import React, { useState } from 'react';
import ApplyPopup from '../components/ApplyPopup';

const BrowseJobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    { title: 'Software Engineer', company: 'Tech Corp', location: 'Bengaluru, KA', type: 'Full-time' },
    { title: 'Product Manager', company: 'Innovate Ltd', location: 'Mumbai, MH', type: 'Full-time' },
    { title: 'Graphic Designer', company: 'Design Studio', location: 'Remote', type: 'Part-time' },
    { title: 'Data Analyst', company: 'Data Insights', location: 'Delhi, DL', type: 'Contract' },
    { title: 'Frontend Developer', company: 'Web Solutions', location: 'Remote', type: 'Full-time' },
    { title: 'Content Writer', company: 'Creative Agency', location: 'Remote', type: 'Part-time' },
    { title: 'Customer Support', company: 'Support Hub', location: 'Remote', type: 'Contract' },
    { title: 'Marketing Specialist', company: 'Growth Co', location: 'Remote', type: 'Freelance' },
    { title: 'Backend Developer', company: 'Tech Innovations', location: 'Bengaluru, KA', type: 'Full-time' },
    { title: 'HR Manager', company: 'People First', location: 'Mumbai, MH', type: 'Full-time' },
    { title: 'Sales Executive', company: 'Sales Pro', location: 'Delhi, DL', type: 'Full-time' },
    { title: 'UX Designer', company: 'Design Hub', location: 'Remote', type: 'Full-time' },
    { title: 'Retail Associate', company: 'Shop Smart', location: 'Chennai, TN', type: 'Part-time' },
    { title: 'Tutor', company: 'Learn Fast', location: 'Remote', type: 'Part-time' },
    { title: 'Barista', company: 'Coffee House', location: 'Kolkata, WB', type: 'Part-time' },
    { title: 'Fitness Trainer', company: 'Fit Club', location: 'Hyderabad, TS', type: 'Part-time' },
  ];

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  const closePopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Browse All Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
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
      {selectedJob && <ApplyPopup jobTitle={selectedJob} onClose={closePopup} />}
    </div>
  );
};

export default BrowseJobs; 