import React from "react";
import styles from "./card.module.css";
export const Card = props => {
  return (
    <div key={props.idw} className={styles.cardContainer}>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="Monster Visualization"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
