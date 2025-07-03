import React, { useState } from "react";
import styles from "../style";
import award1 from "../assets/Awards & Achievements/1 1st Place Debate (Google Dev Students Club).jpg";
import award2 from "../assets/Awards & Achievements/2 Prize-1st Place GATEWAY_25 10 hours Hackathon.jpg";
import award3 from "../assets/Awards & Achievements/3 3rd Place DAKSHAA T25 AI Hackathon (KSR College of Technology).jpg";
import award4 from "../assets/Awards & Achievements/4 1st Place PRATHIYOGITHA_25 Hackathon (IEEE ComSoc - ECE Dept Kongu Engineering College).jpg";
import award5 from "../assets/Awards & Achievements/5 1st Place English Speech (ORLIA 2025 Cultural Fest).jpg";
import award6 from "../assets/Awards & Achievements/6 2nd Place Best Manager (ORLIA 2025 Cultural Fest).jpg";
import award7 from "../assets/Awards & Achievements/7 Best Student of the Month Award for Aug 2024.jpg";
import award8 from "../assets/Awards & Achievements/8 Best Student of the Month Award for Sept 2023.jpg";
import award9 from "../assets/Awards & Achievements/9 2nd Place English Essay Writing (Pongal Fest).jpg";
import award10 from "../assets/Awards & Achievements/10 2nd Place Essay Writing (Citizen Consumer Club).jpg";
import award11 from "../assets/Awards & Achievements/11 1st Place English Debate (Intra-College Green Energy Club).jpg";
import award12 from "../assets/Awards & Achievements/12 2nd Place Paper Presentation - Kongu Engineering College.jpg";
import award13 from "../assets/Awards & Achievements/13 Certificate of Merit (Naukri Campus Young Turks Contest).jpg";

const awards = [
  { id: 1, image: award1, title: "1st Place Debate - Google Dev Students Club", description: "Won first place in the technical debate competition organized by Google Developer Student Clubs" },
  { id: 2, image: award2, title: "1st Place GATEWAY_25 Hackathon", description: "Secured first position in the 10-hour hackathon focusing on innovative solutions" },
  { id: 3, image: award3, title: "3rd Place DAKSHAA T25 AI Hackathon", description: "Achieved third place in the AI-focused hackathon at KSR College of Technology" },
  { id: 4, image: award4, title: "1st Place PRATHIYOGITHA_25 Hackathon", description: "Won first place in the IEEE ComSoc hackathon at Kongu Engineering College" },
  { id: 5, image: award5, title: "1st Place English Speech - ORLIA 2025", description: "Secured first position in the English speech competition at ORLIA Cultural Fest" },
  { id: 6, image: award6, title: "2nd Place Best Manager - ORLIA 2025", description: "Achieved second place in the Best Manager competition at ORLIA Cultural Fest" },
  { id: 7, image: award7, title: "Best Student of the Month - Aug 2024", description: "Recognized as the Best Student of the Month for outstanding academic performance" },
  { id: 8, image: award8, title: "Best Student of the Month - Sept 2023", description: "Awarded Best Student of the Month for exceptional academic achievements" },
  { id: 9, image: award9, title: "2nd Place English Essay Writing - Pongal Fest", description: "Secured second position in the English essay writing competition during Pongal Fest" },
  { id: 10, image: award10, title: "2nd Place Essay Writing - Citizen Consumer Club", description: "Achieved second place in the essay writing competition organized by Citizen Consumer Club" },
  { id: 11, image: award11, title: "1st Place English Debate - Green Energy Club", description: "Won first place in the English debate competition organized by the Green Energy Club" },
  { id: 12, image: award12, title: "2nd Place Paper Presentation - Kongu Engineering College", description: "Secured second position in the paper presentation competition at Kongu Engineering College" },
  { id: 13, image: award13, title: "Certificate of Merit - Naukri Campus Young Turks", description: "Received Certificate of Merit in the Naukri Campus Young Turks Contest" },
];

const AwardCard = ({ item }) => (
  <div className="w-full sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] bg-black/20 rounded-lg overflow-hidden shadow-md">
    <img src={item.image} alt={item.title} className="w-full h-[140px] object-cover" />
    <div className="p-3">
      <h3 className="text-white text-[15px] font-semibold mb-1">{item.title}</h3>
      <p className="text-dimWhite text-[12px]">{item.description}</p>
    </div>
  </div>
);

const ExtraCurricular = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleAwards = showAll ? awards : awards.slice(0, 10);

  return (
    <section id="extraCurricular" className="mb-16">
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white mb-10">
        Awards & Achievements
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {visibleAwards.map((item) => (
          <AwardCard key={item.id} item={item} />
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default ExtraCurricular;
