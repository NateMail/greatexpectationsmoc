import React from "react";
import defaultAbout from "../photos/about/defaultAbout.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about__heading">About Us</h1>
      <div className="about__float">
        <div className="about__pic-container">
          <img src={defaultAbout} alt="dog" className="about__pic" />
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
        studies/history. Allison understands the South Shore, its local schools
        and its students well, having worked with students from almost every
        town and middle school/high school (public and private) over the years.
        Allison grew up in South Weymouth and graduated from Notre Dame Academy
        in Hingham. She holds a B.A. from The College of William and Mary and an
        M.A./J.D. from Syracuse University. She is currently enrolled in the
        College Counseling certificate program at Rice University. In her spare
        time, Allison enjoys spending time with her husband, two step-children,
        their dog and two cats. She is also actively involved in the community
        as a member of the Board Nominating and Development Committee of the
        Girl Scouts of Eastern Massachusetts and as a sustaining member of The
        Junior League of Boston.
      </p>
    </div>
  );
};

export default About;
