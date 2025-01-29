import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <ul>
        <li>c</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>c++</li>
        <li>Git & GitHub</li>
        <li>python</li>
        <div class="skills-category">
                <h3>Tools & Technologies</h3>
                <ul>
                    <li>VS Code: <progress value="90" max="100"></progress></li>
                    <li>Canva: <progress value="80" max="100"></progress></li>
                    <li>GitHub: <progress value="85" max="100"></progress></li>
                </ul>
            </div>
      </ul>
    
  
    
  
      
       
        </div>
    
    
   
    
   
  );

  
}

export default Skills;
