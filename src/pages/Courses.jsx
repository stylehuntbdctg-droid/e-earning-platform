import React from 'react';

const Courses = () => {
  const courses = [
    { id: 1, title: 'Digital Marketing', category: 'Business', instructor: 'Ahmed Rasel', price: '৳2,500' },
    { id: 2, title: 'Agriculture Management', category: 'Agriculture', instructor: 'Dr. Farhana Islam', price: 'Free' },
    { id: 3, title: 'Web Development', category: 'Technology', instructor: 'Rafi Ahmed', price: '৳3,000' },
    { id: 4, title: 'Spoken English', category: 'Skill Development', instructor: 'Nishat Jahan', price: '৳1,500' },
    { id: 5, title: 'Graphic Design', category: 'Technology', instructor: 'Tanvir Hasan', price: '৳2,000' },
    { id: 6, title: 'Job Interview Preparation', category: 'Job Preparation', instructor: 'Anisur Rahman', price: '৳1,200' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Courses</h1>
        <p className="text-gray-600 mb-8">Browse our collection of expert-led courses</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-600">
                  {course.category}
                </span>
                <span className={`font-bold ${course.price === 'Free' ? 'text-green-600' : 'text-gray-900'}`}>
                  {course.price}
                </span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">Instructor: {course.instructor}</p>
              <button className="w-full py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;