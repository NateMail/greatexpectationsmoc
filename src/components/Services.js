import React from "react";
import {
  TiEdit,
  TiGlobeOutline,
  TiDocumentText,
  TiFlowSwitch,
} from "react-icons/ti";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="services__heading">Services</h1>
      <div>
        <div className="services__box-1">
          <h3 className="services__tertiary">SAT Prep</h3>
          <TiEdit className="services__icon" />
          <p className="services__text">
            Great Expectations offers test preparation services that are
            customized to your student. Our tutors are experienced in working
            with a variety of students including those who have ADHD, executive
            functioning needs and who receive extra time on tests.
          </p>
          <div className="row">
            <div className="col-1-of-3">
              <div className="services__card">
                <h4 className="services__card__header">
                  College Admission Tests
                </h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">SAT</li>
                  <li className="services__card__list__item">ACT</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="services__card">
                <h4 className="services__card__header">SAT Subject Tests</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">
                    Literature/English
                  </li>
                  <li className="services__card__list__item">Math</li>
                  <li className="services__card__list__item">U.S. History</li>
                  <li className="services__card__list__item">World History</li>
                  <li className="services__card__list__item">French</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="services__card">
                <h4 className="services__card__header">
                  Independent School Exams
                </h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">ISEE</li>
                  <li className="services__card__list__item">SSAT</li>
                  <li className="services__card__list__item">
                    HSPT (Catholic High School Entrance Exam)
                  </li>
                  <li className="services__card__list__item">ERB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="services__box-2">
          <h3 className="services__tertiary">Subject Tutoring</h3>
          <TiGlobeOutline className="services__icon" />
          <p className="services__text">
            Great Expectations offers subject tutoring in a variety of subjects.
            Our tutors have worked with students as young as 8 years old through
            graduating high school seniors. We currently offer subject tutoring
            in the following disciplines:
          </p>
          <div className="row">
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">English (all levels)</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">
                    Reading/Literature
                  </li>
                  <li className="services__card__list__item">Writing</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">Math</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">
                    Elementary and Middle School
                  </li>
                  <li className="services__card__list__item">Algebra I</li>
                  <li className="services__card__list__item">Geometry</li>
                  <li className="services__card__list__item">Algebra II</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">History (all levels)</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">World History</li>
                  <li className="services__card__list__item">U.S. History</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">French (all levels)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="services__box-3">
          <h3 className="services__tertiary">
            Remote/Hybrid Learning Assistance
          </h3>
          <TiFlowSwitch className="services__icon" />
          <p className="services__text">
            This year, and practically overnight, our children’s lives (and ours
            along with them) were upended as students were sent home to engage
            in remote learning. With many school systems contemplating remote
            learning for the upcoming school year, and with most others having
            students return to in-person classes only a few days each week, many
            parents again find themselves trying to balance their own
            work-from-home needs with trying to remember things like the
            Pythagorean theorem as they help their children learn from home. By
            assisting your students with their studies on those days that they
            are learning from home, Great Expectations can help you concentrate
            on your work. Leave the teaching to us. You do your job and let us
            do ours. Remote/hybrid learning assistance is currently available
            for the following subjects and for students in elementary school
            through high school:
          </p>
          <div className="row">
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">English (all levels)</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">
                    Reading/Literature
                  </li>
                  <li className="services__card__list__item">Writing</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">Math</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">
                    Elementary and Middle School
                  </li>
                  <li className="services__card__list__item">Algebra I</li>
                  <li className="services__card__list__item">Geometry</li>
                  <li className="services__card__list__item">Algebra II</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">History (all levels)</h4>
                <ul className="services__card__list">
                  <li className="services__card__list__item">World History</li>
                  <li className="services__card__list__item">U.S. History</li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="services__card">
                <h4 className="services__card__header">French (all levels)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="services__box-4">
          <h3 className="services__tertiary">
            Application Essays/Personal Statements
          </h3>
          <TiDocumentText className="services__icon" />
          <p className="services__text">
            Writing an application essay, whether for admission to an
            independent lower school or to the college of your dreams, can be a
            daunting task. Great Expectations has worked with students at all
            levels - - from Grades 5 through 12 - - to assist them in
            brainstorming and painstakingly revising their application
            essays/personal statements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
