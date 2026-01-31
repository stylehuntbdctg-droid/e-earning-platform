import React from 'react';

const Instructors = () => {
  const instructors = [
    { id: 1, name: 'Dr. Sumaiya Khan', expertise: 'Agriculture Specialist', students: 5000, courses: 12 },
    { id: 2, name: 'Rafi Ahmed', expertise: 'Software Engineer', students: 12000, courses: 25 },
    { id: 3, name: 'Nishat Jahan', expertise: 'Business Consultant', students: 7500, courses: 18 },
    { id: 4, name: 'Anisur Rahman', expertise: 'Educational Technology', students: 9200, courses: 21 },
    { id: 5, name: 'Ahmed Rasel', expertise: 'Digital Marketing', students: 8500, courses: 15 },
    { id: 6, name: 'Dr. Farhana Islam', expertise: 'Agriculture Expert', students: 3200, courses: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Instructors</h1>
        <p className="text-gray-600 mb-8">Learn from industry experts and experienced professionals</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map(instructor => (
            <div key={instructor.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center text-3xl text-indigo-600 font-bold">
                {instructor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">{instructor.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{instructor.expertise}</p>
              
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{instructor.students.toLocaleString()}+</div>
                  <div className="text-gray-500 text-sm">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{instructor.courses}</div>
                  <div className="text-gray-500 text-sm">Courses</div>
                </div>
              </div>
              
              <button className="w-full py-2 rounded-lg text-sm font-medium border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;