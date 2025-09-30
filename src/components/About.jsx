import React from 'react';
import ProfileIcon from '../assets/profile.png';

const About = () => {
  return (
    <div className="text-center px-2">
      <h1 className="text-2xl md:text-4xl mt-5 text-lime-800">CEO</h1>
      <img className="w-32 md:w-48 mx-auto mt-4 rounded-full" src={ProfileIcon} alt="icon" />
      <div className="mx-auto mt-6 max-w-md md:max-w-2xl bg-white/60 backdrop-blur-md rounded-lg p-4 md:p-6 shadow-lg">
        <p className="text-lime-900 text-left leading-relaxed text-sm md:text-base">
          Jacob Roth, JD, is a Regulatory Specialist with extensive experience navigating complex proceedings before the Alberta Utilities Commission (AUC) for large-scale renewable energy projects. Called to the Bar in Alberta, Jacob brings a strong track record of engagement with regulatory bodies including the AUC, the Alberta Energy Regulator, the Canadian Energy Regulator, and Alberta Environment and Protected Areas.
          <br /><br />
          He has held roles in both private practice and in-house, providing a unique perspective on regulatory, commercial, and corporate matters in the energy sector. Jacob served as the lead corporate representative in AUC Power Plant Approval hearings for the Oyen I and Oyen II solar projects.
          <br /><br />
          Jacob’s experience is often leveraged to assist with project financing and commercial contracting. While at Universal Kraft, he supported the Generating Unit Owner’s Contribution financing negotiations with Crayhill Capital Management, helping successfully secure a USD 15 million initial commitment credit facility expandable to USD 50 million. He also successfully negotiated and executed a 30-year Power Purchase Agreement with Saint John Energy for what will be the largest commercial scale solar project in Saint John, New Brunswick.
          <br /><br />
          Jacob’s expertise lies in aligning regulatory strategy with business objectives, ensuring projects not only meet compliance requirements but also advance efficiently through financing, development, and commercial milestones.
        </p>
      </div>
    </div>
  );
};

export default About;