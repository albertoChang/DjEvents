import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/eventItem.module.css'
import { EventDetail } from '../types/types'

interface EventItemProps {
    evt: EventDetail;
  }

export default function EventItem({evt}: EventItemProps) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image 
                alt = ''
                src={evt.image ? evt.image.data.attributes.url : '/images/event-default.png'} 
                width= {170}
                height= {100}
            />
        </div>

        <div className={styles.info}>
            <span>
                {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
            </span>
            <h3>
                {evt.name}
            </h3>
        </div>

        <div className={styles.link}>
            <a href={`/events/${evt.slug}`} className='btn'>
                Details
            </a>
        </div>
    </div>
  )
}
