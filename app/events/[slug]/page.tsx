'use client';
import { EventSlug } from "@/app/types/types";
import styles from '@/app/styles/event.module.css'
import { getEventBySlug } from "@/app/actions/event";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
    
  const [evt, setEvt] = useState<EventSlug>()

  useEffect(() => {    
    const loadInitialData = async () =>{
      try{
        const res: EventSlug = await getEventBySlug(params.slug)
        setEvt(res)
        console.log(res)
      } catch (e){
        console.log(e)
      }
    }
    loadInitialData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const deleteEvent = () => {
    console.log('delete')
  }
  
  return (
  <>
    {evt &&
      <div className={styles.event}>
        <div className={styles.controls}>
          <a href={`/events/edit/${evt.data.id}`}>
            Edit event
          </a>
          <a href='#' className={styles.delete}
          onClick={deleteEvent}>
            Delete event
          </a>
        </div>
        <span>
          {new Date(evt.data.attributes.date).toLocaleDateString('en-US')} at {evt.data.attributes.time}
        </span>
        <h1>
          {evt.data.attributes.name}
        </h1>
        {evt.data.attributes.image && (
          <div>
            <Image 
                alt = ''
                src={evt.data.attributes.image.data.attributes.url} 
                width= {960}
                height= {600}
            />
          </div>
        )}
        <h3>
          Performers:
        </h3>
        <p>
          {evt.data.attributes.performers}
        </p>
        <h3>
          Description:
        </h3>
        <p>
          {evt.data.attributes.description}
        </p>
        <h3>
          Venue: {evt.data.attributes.venue}
        </h3>
        <p>
          {evt.data.attributes.address}
        </p>
        <a href='/events' className={styles.back}>
            {'<'}Go back
        </a>
      </div>
    }
  </>
)}