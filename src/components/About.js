import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about__heading">About Us</h2>
      <div className="about__float">
        <div className="about__pic-container">
          <div className="about__pic"></div>
          <span className="about__pic-label">Founder Allison Walsh</span>
        </div>
      </div>
      <p className="about__text">
        Allison Walsh is the co-founder of Great Expectations. Allison brings
        more than 20 years of tutoring and test prep experience to Great
        Expectations, having begun her career as a subject tutor at her alma
        mater, The College of William and Mary. After graduating from William
        and Mary, Allison began working as an SAT prep classroom instructor for
        a local test prep company, teaching SAT prep classes at high schools
        throughout the South Shore. From there, she expanded into in-home
        tutoring for SATs, ACTs, and independent school entrance exams like the
        ISEE, SSAT and HSPT (also known as the Catholic High School Entrance
        Exam). Allison also frequently helps her test prep clients with their
        application essays/personal statements. With the advent of remote
        learning this year, Allison has also assisted students with academic
        subjects including middle and high school math, English, and social
        studies/history.
      </p>
      <br />
      <p className="about__text">
        Allison understands the South Shore, its local schools and its students
        well, having worked with students from almost every town and middle
        school/high school (public and private) over the years. Allison grew up
        in South Weymouth and graduated from Notre Dame Academy in Hingham. She
        holds a B.A. from The College of William and Mary and an M.A./J.D. from
        Syracuse University. She is currently enrolled in the College Counseling
        certificate program at Rice University.
      </p>
      <br />
      <p className="about__text">
        In her spare time, Allison enjoys spending time with her husband, two
        step-children, their dog and two cats. She is also actively involved in
        the community as a member of the Board Nominating and Development
        Committee of the Girl Scouts of Eastern Massachusetts and as a
        sustaining member of The Junior League of Boston.
      </p>
      <div className="about__divider">
        <div className="about__float--left">
          <div className="about__pic-container">
            <div className="about__pic-2"></div>
            <span className="about__pic-label">
              Allison Walsh & Gabe Parker
            </span>
          </div>
        </div>
        <p className="about__text">
          Gabe Parker brings a plethora of tutoring and teaching experiences to
          Great Expectations. A graduate of The College of William and Mary,
          Gabe has been licensed to teach in Massachusetts since 2003. During
          that time, he has tutored students from the third through tenth grades
          both at Sylvan Learning Centers in Rhode Island and privately. Gabe is
          a self professed “history nerd,” and history and social studies are
          his favorite subjects to tutor. That said, Gabe is also experienced
          tutoring reading, English, math and sciences through the tenth-grade
          level.
        </p>
        <br />
        <p className="about__text">
          Gabe is currently finishing up his executive MBA through William and
          Mary, and uses his knowledge to handle the day-to-day business of
          running Great Expectations. He loves working with kids even outside of
          tutoring, and served for a number of years as a Little League coach.
          He is presently on the Board of Advisors of the South Boston
          Neighborhood House. Gabe resides locally with his wife, two children
          and their many pets. In his spare time, he enjoys fishing (especially
          off of Chatham, where he spent all of his childhood summers), and
          touring Civil War battlefields (underscoring the nerd in history nerd)
        </p>
      </div>
    </div>
  );
};

export default About;
