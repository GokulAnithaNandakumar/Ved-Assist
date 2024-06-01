import "./Team.css";
import Devimg from "./devlogo.png";
import Amrit from "./Amrit_Icon.jpg";
import Goutham from "./Goutham_Icon.jpg";
import Vijay from "./Vijay_Icon.jpg";
import Gokul from "./Gokul_Icon.jpg";
import Card from "./Card";

function Team() {
    return (
        <>
          <section id="team">
            <h1 className="main-heading">Our Team</h1>
            <div className="team-row">
              <Card Devimg={Vijay} name="Vijay Varadarajan" role="Django Developer" github="https://github.com/vijay-varadarajan" linkedin="https://www.linkedin.com/in/vijay-varadarajan-630597200/" mail="mailto:vijayvaradarajan84@gmail.com"/>
              <Card Devimg={Amrit} name="Amrit Sundarka" role="Django Developer" github="https://github.com/Amrit02102004" linkedin="https://www.linkedin.com/in/amrit-sundarka-6a9b89249/" mail="mailto:amritsundarka2004@gmail.com"/>
              <Card Devimg={Goutham} name="Goutham Kurapati" role="React.js Developer" github="https://github.com/gouthamKurapati13/" linkedin="https://www.linkedin.com/in/goutham-kurapati" mail="mailto:gouthamkurapati@gmail.com" />
              <Card Devimg={Gokul} name="Gokul Nandakumar" role="React.js Developer" github="https://github.com/GokulAnithaNandakumar" linkedin="http://www.linkedin.com/in/gokulnandakumar" mail="mailto:gokul.nandakumar04@gmail.com" />
            </div>
          </section>
        </>
    );
}

export default Team;