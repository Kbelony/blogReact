import { ReactNode, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faGraduationCap,
  faScaleBalanced,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({
  setSelectedTease,
}: {
  setSelectedTease: (title: string) => void;
}) {
  const [teaseLists, setTeaseList] = useState<
    Array<{
      title: ReactNode;
      icon: string;
      id: string;
    }>
  >([]);
  const teaseCollectionRef = collection(db, "tease");

  const getTease = async () => {
    const data = await getDocs(teaseCollectionRef);
    setTeaseList(
      data.docs.map((doc) => ({
        ...doc.data(),
        title: doc.data().title,
        icon: doc.data().icon,
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getTease();
  }, []);

  const handleTeaseClick = (title: string) => {
    setSelectedTease(title);
    console.log(title);
  };

  const quotes = [
    "La technologie est le meilleur outil que nous ayons pour changer le monde.",
    "L'innovation distingue un leader d'un suiveur.",
    "La technologie ne connaît pas de frontières.",
    "L'innovation distingue les leaders des suiveurs. - Steve Jobs",
    "Le progrès n'est pas dû à la technologie, mais à l'usage intelligent de la technologie. - Nido Qubein",
    "La créativité découle de l'interaction entre l'expérience, la connaissance, l'imagination et les stimuli extérieurs.  - Bob Nelson",
    "Le futur appartient à ceux qui voient les possibilités avant qu'elles ne deviennent évidentes. - John Sculley",
    "Le succès, c'est la somme de petits efforts répétés jour après jour. - Robert Collier",
    "Votre temps est limité, ne le gaspillez pas en vivant la vie de quelqu'un d'autre.  - Steve Jobs",
    "La connaissance s'accroît quand on la partage.",
    "Les problèmes sont des opportunités déguisées. - John Adams",
    "La persévérance n'est pas une longue course, c'est de nombreux petits pas.  - Winston Churchill",
    "Le changement est le résultat final de tout véritable apprentissage.  - Leo Buscaglia",
    "La clé du succès est de commencer avant d'être prêt.  - Marie Forleo",
    "Le succès, c'est de tomber sept fois et de se relever huit. - Proverbe japonais",
    "L'échec est l'opportunité de recommencer intelligemment. - Henry Ford",
    "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez. - Albert Schweitzer",
    "La seule manière de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
    // Ajoutez d'autres citations inspirantes ici
  ];

  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 2 * 24 * 60 * 60 * 1000); // 2 jours en millisecondes

    return () => clearInterval(interval);
  }, [currentQuote]);

  return (
    <div className="sidebar sticky-top">
      <div className="filterbar">
        <h5>Filtres</h5>
        <div className="container">
          <div className="row">
            {teaseLists.map((tease) => (
              <div key={tease.id} className="row">
                <div className="col-1">
                  {tease.icon === "faScaleBalanced" && (
                    <FontAwesomeIcon icon={faScaleBalanced} />
                  )}
                  {tease.icon === "faVirus" && (
                    <FontAwesomeIcon icon={faVirus} />
                  )}
                  {tease.icon === "faGraduationCap" && (
                    <FontAwesomeIcon icon={faGraduationCap} />
                  )}
                  {tease.icon === "faHammer" && (
                    <FontAwesomeIcon icon={faHammer} />
                  )}
                </div>
                <div className="col-11">
                  <a onClick={() => handleTeaseClick(String(tease.title))}>
                    {tease.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="quotebar">
        <h5>Daily quote 🧠</h5>
        <h6>“ {currentQuote}”</h6>
      </div>
      <div className="linkbar">
        <a href="https://kbelony.webflow.io/" target="_blank">
          <h4>Lien utile</h4>
        </a>
      </div>
      <div className="explainationbar">
        <h5>Lien utile</h5>
        <div className="explainationtext">
          Ce projet m'a permis d'apprendre <b>React</b> en autodidacte en
          l'espace de deux semaines
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
