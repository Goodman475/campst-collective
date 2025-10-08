import React from "react";
import ProfileIcon from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="relative px-6 md:px-20 py-12 bg-gradient-to-b from-amber-50 via-white to-amber-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            className="w-40 h-40 md:w-70 md:h-70 rounded-full shadow-xl border-4 border-lime-800 object-cover transform transition duration-300 hover:scale-105"
            src={ProfileIcon}
            alt="Profile"
          />
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-lime-900 tracking-tight mb-4">
            Jacob Roth, JD
          </h1>
          <p className="text-lime-800 leading-relaxed text-base md:text-lg">
            Jacob Roth, JD, is a Regulatory Specialist with extensive experience
            navigating complex proceedings before the Alberta Utilities
            Commission (AUC) for large-scale renewable energy projects. Called
            to the Bar in Alberta, Jacob brings a strong track record of
            engagement with regulatory bodies including the AUC, the Alberta
            Energy Regulator, the Canadian Energy Regulator, and Alberta
            Environment and Protected Areas.
          </p>
          <p className="mt-4 text-lime-800 leading-relaxed text-base md:text-lg">
            He has held roles in both private practice and in-house, providing a
            unique perspective on regulatory, commercial, and corporate matters
            in the energy sector. Jacob served as the lead corporate
            representative in AUC Power Plant Approval hearings for the Oyen I
            and Oyen II solar projects.
          </p>
          <p className="mt-4 text-lime-800 leading-relaxed text-base md:text-lg">
            Jacob’s experience is often leveraged to assist with project
            financing and commercial contracting. While at Universal Kraft, he
            supported financing negotiations with Crayhill Capital Management,
            helping secure a USD 15 million initial commitment credit facility,
            expandable to USD 50 million. He also negotiated and executed a
            30-year Power Purchase Agreement with Saint John Energy for the
            largest commercial solar project in Saint John, New Brunswick.
          </p>
          <p className="mt-4 text-lime-800 leading-relaxed text-base md:text-lg">
            His expertise lies in aligning regulatory strategy with business
            objectives, ensuring projects not only meet compliance requirements
            but also advance efficiently through financing, development, and
            commercial milestones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
