import React from "react";
import { TiEdit, TiGlobeOutline, TiDocumentText, TiFlowSwitch } from 'react-icons/ti';

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="services__heading">Services</h1>

      <div className="row">
        <div className="col-1-of-4">
          <div className="services__box">
            
            <h3 className="services__tertiary">SAT Prep</h3>
            <TiEdit />
            <p className="services__text">
              Great Expectations offers test preparation services that are customized to your student.  Our tutors are experienced in working with a variety of students including those who have ADHD, executive functioning needs and who receive extra time on tests.
            </p>
            <h4>College Admission Tests</h4>
            <ul>
              <li>SAT</li>
              <li>ACT</li>
              <li>SAT Subject Tests
                <ul>
                  <li>Literature/English</li>
                  <li>Math</li>
                  <li>U.S. History</li>
                  <li>World History</li>
                  <li>French</li>
                </ul>
              </li>
            </ul>

            <h4>Independent School Exams</h4>
            <ul>
              <li>ISEE</li>
              <li>SSAT</li>
              <li>HSPT (Catholic High School Entrance Exam)</li>
              <li>ERB</li>
            </ul>
          </div>
        </div>
         <div className="col-1-of-4">
          <div className="services__box">
            <h3 className="services__tertiary">Subject Tutoring</h3>
            <TiGlobeOutline />
            <p className="services__text">
              Great Expectations offers subject tutoring in a variety of subjects.  Our tutors have worked with students as young as 8 years old through graduating high school seniors.  We currently offer subject tutoring in the following disciplines:
            </p>
            <ul>
              <li>
                English (all levels)
                <ul>
                  <li>Reading/Literature</li>
                  <li>Writing</li>
                </ul>
              </li>
              <li>
                Math
                <ul> 
                  <li>Elementary and Middle School</li>
                  <li>Algebra I</li>
                  <li>Geometry</li>
                  <li>Algebra II</li>
                </ul>
              </li>
              <li>
              History (all levels)
              <ul>
                <li>World History</li>
                <li>U.S. History</li>
              </ul>
              </li>
              <li>French (all levels)</li>
            </ul>
          </div>
        </div>
         <div className="col-1-of-4">
          <div className="services__box">
            <h3 className="services__tertiary">Remote/Hybrid Learning Assistance</h3>
            <TiFlowSwitch />
            <p className="services__text">
             This year, and practically overnight, our children’s lives (and ours along with them) were upended as students were sent home to engage in remote learning.  With many school systems contemplating remote learning for the upcoming school year, and with most others having students return to in-person classes only a few days each week, many parents again find themselves trying to balance their own work-from-home needs with trying to remember things like the Pythagorean theorem as they help their children learn from home.  By assisting your students with their studies on those days that they are learning from home, Great Expectations can help you concentrate on your work.  Leave the teaching to us.  You do your job and let us do ours.  Remote/hybrid learning assistance is currently available for the following subjects and for students in elementary school through high school:
            </p>
            <ul>
              <li>
                English (all levels)
                <ul>
                  <li>Reading/Literature</li>
                  <li>Writing</li>
                </ul>
              </li>
              <li>
                Math
                <ul> 
                  <li>Elementary and Middle School</li>
                  <li>Algebra I</li>
                  <li>Geometry</li>
                  <li>Algebra II</li>
                </ul>
              </li>
              <li>
              History (all levels)
              <ul>
                <li>World History</li>
                <li>U.S. History</li>
              </ul>
              </li>
              <li>French (all levels)</li>
            </ul>
          </div>
        </div>
          <div className="col-1-of-4">
          <div className="services__box">
            <h3 className="services__tertiary">Application Essays/Personal Statements</h3>
            <TiDocumentText />
            <p className="services__text">
              Writing an application essay, whether for admission to an independent lower school or to the college of your dreams, can be a daunting task.  Great Expectations has worked with students at all levels  - - from Grades 5 through 12 - - to assist them in brainstorming and painstakingly revising their application essays/personal statements. 
            </p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Services;
