import React from "react";

export const AboutCampst = () => {
  return (
    <section className="relative px-6 md:px-20 py-16 bg-gradient-to-b from-amber-50 via-white to-amber-100">
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-lime-900 tracking-tight drop-shadow-md mb-10 relative">
        CAMPST
        <span className="block w-24 h-1 bg-lime-500 mx-auto mt-4 rounded-full"></span>
      </h1>
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10">
        <p className="text-lime-900 leading-relaxed text-base md:text-lg space-y-4">
          <span className="block font-medium text-lime-800 text-xl md:text-2xl mb-4">
            Your partner for renewable energy growth and success.
          </span>

          Campst Collective (Campst) is a renewable energy advisor. We provide
          specialized consulting services for the renewable energy sector,
          supporting developers, investors, and stakeholders throughout the
          project lifecycle. Our expertise covers project origination, site
          screening, congestion analysis, and regulatory strategy, all backed by
          data-driven decision-making using industry-standard tools such as
          <span className="font-semibold text-lime-700"> PVsyst </span> for
          energy yield modeling and
          <span className="font-semibold text-lime-700"> AbaData </span> for
          land, environmental, and regulatory analysis.
          <br />
          <br />
          We also advise on acquisitions, divestitures, and M&A transactions,
          providing tailored support for complex deals and growth initiatives.
          When challenges extend beyond our expertise, Campst leverages a
          network of trusted industry partners to ensure clients always have
          access to the right solutions.
          <br />
          <br />
          By combining technical expertise, regulatory insight, and transactional
          advisory capabilities, Campst enables clients to identify, evaluate,
          and advance high-quality energy projects with precision and speed—from
          concept through regulatory approval and commercialization.
        </p>
      </div>
    </section>
  );
};
