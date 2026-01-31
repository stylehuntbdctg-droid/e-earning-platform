import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Agriculture', courseCount: 156, color: 'bg-green-500' },
    { id: 2, name: 'Technology', courseCount: 342, color: 'bg-blue-500' },
    { id: 3, name: 'Academic Education', courseCount: 289, color: 'bg-purple-500' },
    { id: 4, name: 'Skill Development', courseCount: 187, color: 'bg-yellow-500' },
    { id: 5, name: 'Business & Entrepreneurship', courseCount: 124, color: 'bg-red-500' },
    { id: 6, name: 'Job Preparation', courseCount: 231, color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Categories</h1>
        <p className="text-gray-600 mb-8">Explore learning paths by category</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className={`w-12 h-12 ${cat.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                {cat.name.charAt(0)}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{cat.name}</h3>
              <p className="text-gray-600 mb-4">{cat.courseCount} courses available</p>
              <button className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                Browse Courses →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;