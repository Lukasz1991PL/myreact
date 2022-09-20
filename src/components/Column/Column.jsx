import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
//import { useState } from 'react';
const Column = (props) => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        {props.title}
        <span className={styles.icon + ' fa fa-' + props.icon}></span>
      </h2>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={props.id} action={props.actionAddCart} />
    </article>
  );
};

export default Column;
