import React from "react";
import "../styles/highlights.css";
import Navbar from "../components/Navbar";


import img1 from "../assets/social2.jpeg";
import img2 from "../assets/social3.jpeg";
import img3 from "../assets/social4.jpeg";
import img4 from "../assets/social5.jpeg";
import img5 from "../assets/social6.jpeg";
import img6 from "../assets/social7.jpeg";

export default function Highlights() {
  const images = [
    { src: img1, caption: "माजी मुख्यमंत्री श्री पृथ्वीराज चव्हाण साहेब दुर्गा खानावळ मधील सदिच्छा भेट...." },
    { src: img2, caption: "छत्रपती श्री. उदयनराजे भोसले समवेत दुर्गा खानावळ चे कुटुंबीय" },
    { src: img3, caption: "सातारा जिल्ह्याचे माजी जिल्हाधिकारी श्री शेखरसिंग साहेब दुर्गा खानावळीचे मालकांचे अभिनंदन करताना" },
    { src: img4, caption: "सातारा जिल्ह्याचे पोलीस अधीक्षक श्री समीर शेख साहेब यांचा सत्कार करताना दुर्गा खानावळीचे मालक श्री वसंतराव जाधव" },
    { src: img5, caption: "सातारा जिल्ह्याच्या माजी पोलीस प्रमुख सौ तेजस्विनी सातपुते मॅडमने दुर्गा खानावळीचे संचालिका. सौ.विमल वसंतराव जाधव,यांचा सत्कार करताना" },
    { src: img6, caption: "ज्येष्ठ समाजसेविका श्रीमती सिंधुताई सपकाळ यांनी दुर्गा खानावळीस भेट दिलेला दिलेला क्षण"}
  ];

  return (
    <div className="highlights-page">

      <Navbar />

      {/* Page Header */}
      <header className="highlights-header">
        <h1>Durga Khanawal Highlights</h1>
        <p className="subtag">A Glimpse of Our Journey, Recognition & Visitors</p>
      </header>

      {/* Grid */}
      <section className="highlights-grid">
        {images.map((img, index) => (
          <div key={index} className="highlight-card">
            <img src={img.src} alt="Highlight" />
            <p>{img.caption}</p>
          </div>
        ))}
      </section>

      

    </div>
  );
}
