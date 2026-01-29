import React, { useEffect, useState } from 'react';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setShowButton(scrollPercent > 10);
      
      const progressCircle = document.getElementById('progressCircle');
      if (progressCircle) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (scrollPercent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }
      
      const button = document.getElementById('scrollToTop');
      if (button) {
        if (scrollPercent > 10) {
          button.classList.remove('opacity-0', 'scale-0');
          button.classList.add('opacity-100', 'scale-100');
        } else {
          button.classList.remove('opacity-100', 'scale-100');
          button.classList.add('opacity-0', 'scale-0');
        }
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { icon: '🌾', name: 'কৃষি', count: 156 },
    { icon: '💻', name: 'প্রযুক্তি', count: 342 },
    { icon: '📚', name: 'শিক্ষা', count: 289 },
    { icon: '🔧', name: 'দক্ষতা', count: 187 },
    { icon: '💼', name: 'ব্যবসা', count: 124 },
    { icon: '🎯', name: 'চাকরি', count: 231 },
  ];

  const courses = [
    { 
      title: 'ডিজিটাল মার্কেটিং', 
      instructor: 'আহমেদ রাসেল', 
      rating: 4.8, 
      students: 1250, 
      price: '৳ ২,৫০০', 
      discount: '৳ ৩,৫০০', 
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      duration: '১২ ঘণ্টা',
      lessons: 24
    },
    { 
      title: 'কৃষি ব্যবস্থাপনা', 
      instructor: 'ড. ফারহানা ইসলাম', 
      rating: 4.9, 
      students: 890, 
      price: 'বিনামূল্যে', 
      discount: null, 
      thumbnail: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=250&fit=crop',
      duration: '৮ ঘণ্টা',
      lessons: 16
    },
    { 
      title: 'ফ্রিল্যান্সিং গাইড', 
      instructor: 'জুবায়ের হোসেন', 
      rating: 4.7, 
      students: 2100, 
      price: '৳ ১,২০০', 
      discount: '৳ ২,০০০', 
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      duration: '১৫ ঘণ্টা',
      lessons: 30
    },
    { 
      title: 'প্রোগ্রামিং বেসিক', 
      instructor: 'তানভীর হাসান', 
      rating: 4.6, 
      students: 1670, 
      price: '৳ ১,৮০০', 
      discount: '৳ ২,৫০০', 
      thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
      duration: '২০ ঘণ্টা',
      lessons: 40
    },
  ];

  const instructors = [
    { 
      name: 'ড. সুমাইয়া খান', 
      expertise: 'কৃষি বিশেষজ্ঞ', 
      students: 5000, 
      courses: 12, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop',
      experience: '১০ বছর'
    },
    { 
      name: 'রাফি আহমেদ', 
      expertise: 'সফটওয়্যার ইঞ্জিনিয়ার', 
      students: 12000, 
      courses: 25, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      experience: '৮ বছর'
    },
    { 
      name: 'নিশাত জাহান', 
      expertise: 'ব্যবসা পরামর্শক', 
      students: 7500, 
      courses: 18, 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      experience: '১২ বছর'
    },
    { 
      name: 'আনিসুর রহমান', 
      expertise: 'এডুকেশনাল টেকনোলজি', 
      students: 9200, 
      courses: 21, 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      experience: '৬ বছর'
    },
  ];

  const stats = [
    { number: '৫০,০০০+', label: 'সক্রিয় শিক্ষার্থী', icon: '👨‍🎓' },
    { number: '১,২০০+', label: 'কোর্স', icon: '📚' },
    { number: '২০০+', label: 'ইন্সট্রাক্টর', icon: '👨‍🏫' },
    { number: '৯৫%', label: 'সন্তুষ্টি হার', icon: '⭐' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#8B5CF6' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20" 
               style={{ backgroundColor: '#10B981' }}></div>
          
          <div className="absolute top-1/4 left-10 w-16 h-16 rounded-lg rotate-12 animate-pulse"
               style={{ backgroundColor: 'rgba(79, 70, 229, 0.15)' }}></div>
          <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full animate-bounce"
               style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 rotate-45 animate-pulse"
               style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)' }}></div>
        </div>

        <div className="absolute inset-0" 
             style={{
               backgroundColor: '#F8FAFC'
             }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm border border-gray-200">
              <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#4F46E5' }}></div>
              <span className="text-sm font-medium" style={{ color: '#4F46E5' }}>
                🇧🇩 বাংলাদেশের সবচেয়ে বড় অনলাইন লার্নিং প্লাটফর্ম
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">বাংলায় শিখুন,</span>
              <span className="block mt-2">
                <span style={{ color: '#4F46E5' }}>
                  দক্ষ হয়ে উঠুন
                </span>
              </span>
            </h1>

            <div className="h-20 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 mb-4">
                <span className="typing-effect">
                  ১০০০+ বাংলা কোর্সে যুক্ত হোন, শিখুন বিশেষজ্ঞদের থেকে, গড়ে তুলুন আপনার ক্যারিয়ার
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
              {[
                { number: '১০০০+', label: 'বাংলা কোর্স', color: '#4F46E5' },
                { number: '৫০,০০০+', label: 'সক্রিয় শিক্ষার্থী', color: '#3B82F6' },
                { number: '২০০+', label: 'বিশেষজ্ঞ ইনস্ট্রাক্টর', color: '#10B981' },
                { number: '৯৫%', label: 'সন্তুষ্টি হার', color: '#EC4899' }
              ].map((stat, index) => (
                <div key={index} 
                     className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group relative px-8 py-4 rounded-xl font-medium text-lg text-white overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#4F46E5'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  কোর্স দেখুন
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <span className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
              <button 
                className="group relative px-8 py-4 rounded-xl font-medium text-lg border-2 overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ 
                  borderColor: '#4F46E5', 
                  color: '#4F46E5',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  ফ্রি শিখুন
                </span>
                <span className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">আমাদের বিশ্বাস করেন</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl">🏢</div>
                <div className="text-2xl">🏛️</div>
                <div className="text-2xl">🎓</div>
                <div className="text-2xl">💼</div>
                <div className="text-2xl">🌾</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-y py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold" style={{ color: '#4F46E5' }}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ক্যাটাগরি অনুসারে ব্রাউজ করুন</h2>
            <p className="text-gray-600">আপনার পছন্দের বিষয় নির্বাচন করুন</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl text-center hover:shadow-md transition-shadow cursor-pointer transform hover:-translate-y-1 duration-300"
                style={{ backgroundColor: 'rgb(229,230,250)' }}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} কোর্স</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'rgb(233,231,253)' }} className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">জনপ্রিয় কোর্স</h2>
              <p className="text-gray-700">এখন সবচেয়ে বেশি শিক্ষার্থী যুক্ত হচ্ছে</p>
            </div>
            <button 
              className="font-medium hover:underline flex items-center gap-1 group"
              style={{ color: '#4F46E5' }}
            >
              সব দেখুন 
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.price === 'বিনামূল্যে' && (
                    <div 
                      className="absolute top-3 left-3 text-white px-3 py-1 rounded text-sm font-medium shadow-md"
                      style={{ backgroundColor: '#4F46E5' }}
                    >
                      ফ্রি
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 hover:text-indigo-600 transition-colors cursor-pointer">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">ইন্সট্রাক্টর: {course.instructor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-gray-700 font-medium">{course.rating}</span>
                      <span className="text-gray-500 text-sm">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {course.duration} • {course.lessons} পাঠ
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div 
                        className="text-xl font-bold"
                        style={{ color: '#4F46E5' }}
                      >
                        {course.price}
                      </div>
                      {course.discount && (
                        <div className="text-sm text-gray-500 line-through">{course.discount}</div>
                      )}
                    </div>
                    <button 
                      className="px-4 py-2 rounded text-sm font-medium text-white hover:shadow-md transition-shadow"
                      style={{ backgroundColor: '#4F46E5' }}
                    >
                      বিস্তারিত
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">আমাদের ইন্সট্রাক্টর</h2>
            <p className="text-gray-600">বিশেষজ্ঞদের কাছ থেকে সরাসরি শিখুন</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 border"
                style={{ borderColor: 'rgb(229,230,250)' }}
              >
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2"
                  style={{ borderColor: 'rgb(233,231,253)' }}
                >
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-1">{instructor.name}</h3>
                <p 
                  className="font-medium mb-3"
                  style={{ color: '#4F46E5' }}
                >
                  {instructor.expertise}
                </p>
                <p className="text-gray-500 text-sm mb-4">{instructor.experience} অভিজ্ঞতা</p>
                
                <div className="flex justify-center gap-6 mb-4">
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{instructor.students.toLocaleString()}+</div>
                    <div className="text-gray-500 text-sm">শিক্ষার্থী</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900">{instructor.courses}</div>
                    <div className="text-gray-500 text-sm">কোর্স</div>
                  </div>
                </div>
                
                <button 
                  className="w-full py-2 rounded text-sm font-medium border hover:bg-indigo-50 transition-colors"
                  style={{ borderColor: '#4F46E5', color: '#4F46E5' }}
                >
                  প্রোফাইল দেখুন
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div 
            className="rounded-xl p-8 md:p-12 hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundColor: 'rgb(229,230,250)' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  বিনামূল্যে শিখুন
                  <span 
                    className="block"
                    style={{ color: '#4F46E5' }}
                  >
                    কোন খরচ ছাড়াই
                  </span>
                </h2>
                <p className="text-gray-700 mb-6">
                  ১০০+ ফ্রি কোর্স থেকে বেসিক দক্ষতা অর্জন করুন। 
                  শুরু করুন আজই, কোন পেমেন্টের প্রয়োজন নেই।
                </p>
                <button 
                  className="px-8 py-3 rounded-lg font-medium text-white hover:shadow-lg transition-shadow transform hover:-translate-y-0.5"
                  style={{ 
                    backgroundColor: '#4F46E5'
                  }}
                >
                  ফ্রি কোর্স দেখুন
                </button>
              </div>
              
              <div className="md:w-1/3">
                <div 
                  className="rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                  style={{ backgroundColor: 'rgb(233,231,253)' }}
                >
                  <div className="text-5xl mb-4 animate-bounce">🎓</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">১০০+ ফ্রি কোর্স</div>
                  <div className="text-gray-700">বিনামূল্যে শেখার সুযোগ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button
        id="scrollToTop"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 opacity-0 scale-0 hover:scale-110 hover:shadow-xl group"
        style={{ backgroundColor: '#4F46E5' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="শীর্ষে যান"
      >
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="4"
          />
          <circle
            id="progressCircle"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
        </svg>
        
        <svg 
          className="relative w-6 h-6 text-white transform transition-transform duration-300 group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        
        <div className="absolute -top-1 -right-1 bg-white text-indigo-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
          {Math.round(scrollProgress)}%
        </div>
      </button>
    </div>
  );
};

export default Home;