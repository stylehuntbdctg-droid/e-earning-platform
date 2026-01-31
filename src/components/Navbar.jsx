import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Categories', path: '/categories' },
    { name: 'Instructors', path: '/instructors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Free Learning', path: '/free-learning' },
    { name: 'Contact', path: '/contact' },
  ];

  const categories = [
    'Agriculture', 'Technology', 'Academic Education', 'Skill Development', 
    'Business & Entrepreneurship', 'Job Preparation'
  ];

  // ডার্ক মোড টগল করার ফাংশন
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // localStorage-এ স্টোর করা
    localStorage.setItem('darkMode', newDarkMode);
    
    // HTML element-এ dark ক্লাস টগল করা
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // কম্পোনেন্ট মাউন্ট হলে localStorage থেকে ডার্ক মোড স্টেট লোড করা
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Compact glass blur bar */}
      <nav 
        className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl rounded-xl dark:bg-gray-900/80"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
        }}
      >
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center">
            {/* Compact Logo with Image */}
            <Link to="/" className="flex items-center space-x-2.5 z-20 group">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                }}
              >
                <img 
                  src="https://i.ibb.co.com/rKTD0YgT/unnamed-removebg-preview.png" 
                  alt="Shikkhon Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h1 
                  className="text-xl font-bold tracking-tight dark:text-white"
                  style={{
                    color: '#1f2937',
                    textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
                  }}
                >
                  Shikkhon
                </h1>
                <p className="text-xs dark:text-gray-300" style={{ color: '#6b7280' }}>E-Learning</p>
              </div>
            </Link>

            {/* Desktop Navigation - More compact */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 dark:text-gray-300"
                  style={{ 
                    color: link.name === 'Home' ? '#4F46E5' : '#374151',
                    fontWeight: link.name === 'Home' ? '600' : '500'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Categories Dropdown */}
              <div className="dropdown dropdown-hover">
                <label 
                  tabIndex={0} 
                  className="px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 dark:text-gray-300 flex items-center gap-1"
                  style={{ 
                    color: '#374151'
                  }}
                >
                  Categories
                  <svg 
                    className="w-3.5 h-3.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </label>
                
                <div 
                  tabIndex={0} 
                  className="dropdown-content menu p-3 shadow-xl rounded-xl w-60 mt-2 dark:bg-gray-800"
                  style={{
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)'
                  }}
                >
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat, idx) => (
                      <a 
                        key={idx} 
                        className="p-2.5 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 text-center"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
        
              <div className="w-px h-5 mx-2 dark:bg-gray-600" style={{ background: 'rgba(0, 0, 0, 0.1)' }}></div>
              
              {/* Dark/Light Mode Toggle Button */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 relative group"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  {/* সূর্য আইকোন (লাইট মোডে দেখা যাবে) */}
                  <svg
                    className={`w-5 h-5 text-yellow-500 transform transition-all duration-500 ${
                      darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  
                  {/* চাঁদ আইকোন (ডার্ক মোডে দেখা যাবে) */}
                  <svg
                    className={`absolute top-0 left-0 w-5 h-5 text-indigo-300 transform transition-all duration-500 ${
                      darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
                
                {/* টুলটিপ */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {darkMode ? 'Switch to Light' : 'Switch to Dark'}
                </div>
              </button>
              
              {/* Compact Cart Button */}
              <button 
                className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 relative"
                style={{ 
                  color: '#4F46E5'
                }}
              >
                <div className="indicator">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span 
                    className="badge badge-xs indicator-item"
                    style={{ 
                      backgroundColor: '#10B981',
                      color: 'white',
                      border: '1px solid white'
                    }}
                  >
                    3
                  </span>
                </div>
              </button>
              
              {/* Updated Login Button with Link */}
              <Link
                to="/login"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20 dark:text-gray-300"
                style={{ 
                  color: '#374151'
                }}
              >
                Login
              </Link>
              
              {/* Updated Register Button with Link */}
              <Link
                to="/register"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                  boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)'
                }}
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg z-20 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-700/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                color: '#4F46E5'
              }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Compact */}
        {isMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 w-full mt-1 rounded-xl overflow-hidden dark:bg-gray-900/95"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(31, 38, 135, 0.2)'
            }}
          >
            <div className="p-4">
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 dark:text-gray-300"
                    style={{ 
                      color: link.name === 'Home' ? '#4F46E5' : '#374151'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Dark Mode Toggle */}
                <button 
                  onClick={toggleDarkMode}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 mt-2 dark:text-gray-300"
                  style={{ 
                    color: '#374151',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div className="relative w-5 h-5">
                    <svg
                      className={`w-5 h-5 text-yellow-500 absolute top-0 left-0 transition-all duration-500 ${
                        darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className={`w-5 h-5 text-indigo-300 absolute top-0 left-0 transition-all duration-500 ${
                        darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div>
                  <span className="font-medium">
                    {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  </span>
                </button>
                
                {/* Mobile Categories */}
                <div className="px-3 py-2">
                  <h3 className="font-bold mb-2 text-sm dark:text-gray-300" style={{ color: '#4F46E5' }}>Categories</h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {categories.map((cat, idx) => (
                      <a 
                        key={idx} 
                        className="p-2 rounded text-xs font-medium text-center hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 dark:text-gray-300"
                        style={{ 
                          color: '#374151',
                          border: '1px solid #e5e7eb'
                        }}
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="divider my-1 dark:border-gray-700" style={{ borderColor: '#e5e7eb' }}></div>
                
                {/* Mobile Cart */}
                <button 
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 dark:text-gray-300"
                  style={{ 
                    color: '#374151',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <div className="relative">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span 
                      className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center"
                    >
                      3
                    </span>
                  </div>
                  <span>Cart</span>
                </button>
                
                {/* Updated Mobile Auth Buttons with Links */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Link
                    to="/login"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-center dark:text-gray-300"
                    style={{ 
                      color: '#374151',
                      border: '1px solid #e5e7eb'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 text-center"
                    style={{ 
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;