import React from 'react';
import {FaStar} from "react-icons/fa"



// deux boucle : recuperer le nombre de rating
// une pour etoile pleine: bouche pour chaque rating afficher : 
// une pour les autre : longueur du tableau - rating afficher

const Ratings = ({ rating }) => {
  const displayStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} size={18} />);
      } else {
        stars.push(<FaStar className="grey-star" key={i} size={18} />);
      }
    }
    return stars;
  };

  return (
    <div>
      {displayStars()}
    </div>
  );
};

export default Ratings;