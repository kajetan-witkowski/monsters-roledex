import React from "react";
import { Card } from "../card/card.component";
import styles from "./card-list.module.css";

export const CardList = props => {
  return (
    <div className={styles.cardList}>
      {props.monsters.map((monster, index) => {
        return <Card id={index} monster={monster} />;
      })}
    </div>
  );
};
