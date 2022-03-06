import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './RatingComponent.module.css'

export const RatingComp = () => {

  const [rating, setRating] = useState(0)
  
  
  return (
    <div >
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        return (
          <label key={i}>
            <input 
            data-testid={`rating-${ratingValue}`}
            className={styles.radioInput} 
            type='radio' name='rating' 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)}/>
            <FaStar className='stars' color={ratingValue <=  rating ? "#ffc107" : "#e4e5e9"}/> 
          </label>
        )
      })}

    </div>
  )

}

