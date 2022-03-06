import { useState,  ChangeEvent } from 'react'
import { EventProps } from '../model/event'
import { RatingComp } from './RatingComponent'
import styles from './EventCard.module.css'
import { data } from '../data/data'


export const EventCardComp = (props: EventProps) => {

  const { id, name, description, time, date, attendeces, image, comments } = props.event
  
  const [signUp, SetSignUp] = useState(true)
  
  const [comment, setComment] = useState("");

  function addComment(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    
    event.preventDefault();
    const eventData = data.find(meet => meet.id === id)
    eventData?.comments.push(comment)
    setComment("")
    console.log(eventData?.comments);
  }


  const join = () => SetSignUp(prevsignUp => !prevsignUp)


  return (<div className={styles.eventWrapper}>
    <div className={signUp ? `${styles.eventCard}` : `${styles.eventCard} ${styles.eventAttend}`}>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h1 className={styles.overlayHeader}>{name}</h1>
          <RatingComp />
          <p className={styles.overlayDesc}>{description}</p>
          <p className={styles.overlayAttend}>Deltagare: {attendeces.join(', ')}</p>
          <p className={styles.overlayComments}>Kommentarer: {comments.join('\n')}</p>
          <div className={styles.inputWrapper}>
          <input className={styles.overlayInput} value={comment} type="text" onChange={e => setComment(e.target.value)} placeholder='Skriv en kommentar...' />
          <button className={styles.overlayButton} onClick={addComment} >skicka</button>
          </div>
          <button className={styles.cardButton} onClick={join}>{signUp ? 'Gå med' : 'Lämna'}</button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.cardImage} src={image} alt="" />
      </div>
      <h1 className={styles.cardName}>{name}</h1>
      <p className={styles.cardDesc}>{description}</p>
      <p className={styles.cardTime}>{time}</p>
      <p className={styles.cardDate}>{date}</p>
    </div>
  </div>)
}
