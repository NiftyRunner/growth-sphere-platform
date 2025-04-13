import React from 'react';

const Employers = () => {
  const services = [
    { title: 'Post a Job', description: 'Reach thousands of potential candidates by posting your job openings.' },
    { title: 'Browse Candidates', description: 'Access a database of qualified candidates to find the perfect fit for your company.' },
    { title: 'Hiring Solutions', description: 'Utilize our hiring solutions to streamline your recruitment process.' },
    { title: 'Pricing', description: 'Explore our competitive pricing plans tailored to your hiring needs.' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">For Employers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employers; 