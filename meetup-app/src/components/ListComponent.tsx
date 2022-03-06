
import { EventCardComp } from '../components/EventCard';
import { List } from '../model/list'
import styles from './ListComponent.module.css'
export const ListComponent = (props: List) => {
  const data = props.data
  return (
    <div className={styles.listComp}>
      {data.map((event) => {

        return <EventCardComp event={event} key={event.id} />

      })}

    </div>
  )

}