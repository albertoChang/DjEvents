'use client';
import styles from './styles/page.module.css'
import { Event, Pagination } from '../app/types/types';
import { getEvents } from './actions/event';
import { useEffect, useState } from 'react';
import EventItem from './components/eventItem';

interface HomeProps {
  data: Event[];
  meta: Pagination;
}

export const Home = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {    
    const loadInitialData = async () =>{
      try{
        const res: HomeProps = await getEvents();
        console.log(res);
        setEvents(res.data)
      } catch (e){
        console.log(e)
      }
    }
    loadInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (    
    <main >
      <div className={styles.container}>
        <div>
            <a href='./'
             >
              <p className={styles.title}>
                Upcoming Events
              </p>
            </a>
        </div>
        <div></div>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((evt: Event)=>(
          <EventItem 
            evt={evt.attributes} 
            key={evt.id} 
          />
        ))}

        {/*
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Proyecto Valdelomar Park <span>-&gt;</span>
            </h2>
            <p>Pueblo Libre</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Proyecto Génesis <span>-&gt;</span>
            </h2>
            <p>Pueblo Libre</p>
          </a>

        </div>
        */}
      </div>
    </main>
  )
}

export default Home;