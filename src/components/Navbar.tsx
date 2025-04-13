import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const menuItems = {
    "Jobs": [
      { label: "Browse All Jobs", href: "/jobs" },
      { label: "Remote Jobs", href: "/jobs/remote" },
      { label: "Full-time Jobs", href: "/jobs/full-time" },
      { label: "Part-time Jobs", href: "/jobs/part-time" },
    ],
    "Resources": [
      { label: "Career Guide", href: "/resources/career-guide" },
      { label: "Resume Builder", href: "/resources/resume-builder" },
      { label: "Interview Tips", href: "/resources/interview-tips" },
      { label: "Skill Assessments", href: "/resources/assessments" },
    ],
    "For Employers": [
      { label: "Post a Job", href: "/employer/post-job" },
      { label: "Browse Candidates", href: "/employer/candidates" },
      { label: "Hiring Solutions", href: "/employer/solutions" },
      { label: "Pricing", href: "/employer/pricing" },
    ]
  };

  const handleDropdownClick = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-blue-500">Work</span>
              <span className="text-green-500">Bridge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
            >
              Home
            </Link>

            {/* Jobs Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownClick('Jobs')}
                className="text-gray-700 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                Jobs
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    activeDropdown === 'Jobs' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'Jobs' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {menuItems['Jobs'].map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownClick('Resources')}
                className="text-gray-700 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    activeDropdown === 'Resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeDropdown === 'Resources' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {menuItems['Resources'].map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                        role="menuitem"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* For Employers Link */}
            <Link
              to="/employer/post-job"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
            >
              For Employers
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  >
                    <User size={20} />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
              >
                Home
              </Link>

              {/* Mobile Dropdowns */}
              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key} className="space-y-1">
                  <button
                    onClick={() => handleDropdownClick(key)}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200 flex items-center justify-between"
                  >
                    {key}
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === key && (
                    <div className="pl-4 space-y-1 bg-gray-100 rounded-md">
                      {items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
                    >
                      <User size={20} />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full mt-2 px-3 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block w-full px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block w-full px-3 py-2 text-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
