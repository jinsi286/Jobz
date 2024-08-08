import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How it Works?</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create an account</p>
              <p>
              Start your job search journey by creating a profile. Provide your basic details and that's it.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Once you're registered, find your dream job. And if you're a hiring partner, you can post a job for yourself.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply for a job/ Recruit talents</p>
              <p>
                Apply for a job that suits you the best. Recruiters find the best talents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
