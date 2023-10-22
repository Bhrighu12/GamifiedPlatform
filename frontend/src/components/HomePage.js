import React from 'react';
import OfferSection from '../HomeComponents/OfferSection';
import "./HomePageNew.css"

const HomePage=()=>{
    return(
        <div className="home-page-new">
      <main className="home-page-2">
        <img className="home-page-2-child" alt="" src="/polygon-4.svg" />
        <img className="home-page-2-item" alt="" src="/polygon-4.svg" />
        <div className="home-page-2-inner" />
        <div className="line-div" />
        <img className="polygon-icon" alt="" src="/polygon-5.svg" />
        <img className="group-icon" alt="" src="/group-1.svg" />
        <div className="rectangle-div" />
        <div className="home-page-2-child1" />
        <div className="home-page-2-child2" />
        <div className="home-page-2-child3" />
        <div className="teaching-children-about">
          Teaching children about their laws and rights
        </div>
        <div className="why-to-choose">Why to choose us</div>
        <div className="understanding-their-legal">
          Understanding their legal rights empowers children to advocate for
          themselves and make informed decisions.
        </div>
        <div className="knowledge-of-their">
          Knowledge of their rights can help children recognize when those
          rights are being violated or infringed upon.
        </div>
        <img
          className="business-mom-working-at-laptop"
          alt=""
          src="/business-mom-working-at-laptop-while-her-daughter-drawing-on-her-document@2x.png"
        />
        <div className="empowerment">Empowerment</div>
        <div className="protective">Protective</div>
        <div className="social-justice">Social Justice</div>
        <img
          className="judge-gavel-with-law-books-and"
          alt=""
          src="/judge-gavel-with-law-books-and-scales@2x.png"
        />
        <img
          className="children-chatting-with-books"
          alt=""
          src="/children-chatting-with-books@2x.png"
        />
        <div className="education-about-laws">
          Education about laws and rights can help children develop a sense of
          social justice.
        </div>
        <div className="what-kind-of-courses-we-provid-parent">
          <div className="what-kind-of">What kind of courses we provided?</div>
          <img
            className="interface-arrows-button-down-b"
            alt=""
            src="/interface-arrows-button-down-by-streamlinehq.svg"
          />
        </div>
        <div className="is-there-any-way-to-get-clarit-parent">
          <div className="what-kind-of">
            Is there any way to get clarity during the course?
          </div>
          <img
            className="interface-arrows-button-down-b"
            alt=""
            src="/interface-arrows-button-down-by-streamlinehq1.svg"
          />
        </div>
        <div className="how-will-you-solve-the-problem-parent">
          <div className="what-kind-of">
            How will you solve the problem of boredom?
          </div>
          <img
            className="interface-arrows-button-down-b"
            alt=""
            src="/interface-arrows-button-down-by-streamlinehq1.svg"
          />
        </div>
        <div className="engaging-courses-parent">
          <div className="engaging-courses">Engaging Courses</div>
          <div className="our-website-offers">
            Our website offers a wide range of courses specifically designed to
            make learni ng about rights and laws a fun adventure tailored
            children’s age groups and comprehension levels.
          </div>
        </div>
        <div className="interactive-quizzes-parent">
          <div className="engaging-courses">Interactive Quizzes</div>
          <div className="our-website-offers">
            They are designed to reinforce what you’ve learned and make it
            enjoyable. Earn badges and rewards as you progress through the
            quizzes, making your learning journey even more exciting.
          </div>
        </div>
        <div className="illustration-visuals-and-game-parent">
          <div className="engaging-courses">
            Illustration, Visuals and Games
          </div>
          <div className="our-website-is">
            Our website is packed with colorfull illustrations, visual and games
            that make learning visually stimulating and enjoyable.
          </div>
        </div>
        <OfferSection />
      </main>
    </div>
    )
}

export default HomePage; 