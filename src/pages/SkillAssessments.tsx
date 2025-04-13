import React from 'react';

const SkillAssessments = () => {
  const assessments = [
    { skill: 'JavaScript', level: 'Intermediate', description: 'Test your JavaScript skills with this comprehensive assessment.' },
    { skill: 'React', level: 'Advanced', description: 'Evaluate your React knowledge and proficiency.' },
    { skill: 'CSS', level: 'Beginner', description: 'Assess your understanding of CSS and styling techniques.' },
    { skill: 'Node.js', level: 'Intermediate', description: 'Check your skills in Node.js and backend development.' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Skill Assessments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assessments.map((assessment, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{assessment.skill}</h2>
            <p className="text-gray-600">Level: {assessment.level}</p>
            <p className="text-gray-500">{assessment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillAssessments; 