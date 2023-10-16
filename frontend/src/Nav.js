import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav =()=> {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const navigate=useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login')
}
  
  const handleCoursesHover=()=> {
    setIsCoursesDropdownOpen(true);
  };

  const handleCoursesLeave = () => {
    setIsCoursesDropdownOpen(false);
  };
  const auth = localStorage.getItem('s-user');
  const lauth = localStorage.getItem('l-user');
  
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li
          onMouseEnter={handleCoursesHover}
          onMouseLeave={handleCoursesLeave} 
        >
          {isCoursesDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/learn/courseoverview">Course Overview</Link></li>
              <li><Link to="/learn/module1">Module 1</Link></li>
              <li><Link to="/learn/module2">Module 2</Link></li>
            </ul>
          )}<Link to="/learn">Learn</Link>
        </li>
        <li
          onMouseEnter={handleCoursesHover}
          onMouseLeave={handleCoursesLeave} 
        >
          {isCoursesDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/play/quiz">Quiz</Link></li>
              <li><Link to="/play/storymode">Story</Link></li>
            </ul>
          )}<Link to="/games">Play</Link>
        </li>
        <li>{lauth? <Link onClick={logout}to="/">Logout</Link>:<Link to="/login">Login</Link>}</li>
        <li
          onMouseEnter={handleCoursesHover} 
          onMouseLeave={handleCoursesLeave}  
        >
          {auth || lauth? <Link to="/support">Support</Link>:isCoursesDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/register/student">Student</Link></li>
              <li><Link to="/register/parent">Parent</Link></li>
              <li><Link to="/register/educator">Educator</Link></li>
            </ul>
          )}{auth || lauth?<Link  to="/support"></Link>:<Link to="/register">Register</Link>}
          </li>
      </ul>
    </div>
  );
};

export default Nav;