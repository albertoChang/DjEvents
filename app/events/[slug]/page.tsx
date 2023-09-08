'use client';
import { Event } from "@/app/types/types";
import styles from '@/app/styles/event.module.css'
import { getEventBySlug } from "@/app/actions/event";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
    
  const [evt, setEvt] = useState<Event>()

  useEffect(() => {    
    const loadInitialData = async () =>{
      try{
        const res = await getEventBySlug(params.slug)
        setEvt(res)
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
          <a href={`/events/edit/${evt?.id}`}>
            Edit event
          </a>
          <a href='#' className={styles.delete}
          onClick={deleteEvent}>
            Delete event
          </a>
        </div>
        <span>
          {new Date(evt.attributes.date).toLocaleDateString('en-US')} at {evt.attributes.time}
        </span>
        <h1>
          {evt.attributes.name}
        </h1>
        {evt.attributes.image && (
          <div>
            <Image 
                alt = ''
                src={evt.attributes.image.data.attributes.url} 
                width= {960}
                height= {600}
            />
          </div>
        )}
        <h3>
          Performers:
        </h3>
        <p>
          {evt.attributes.performers}
        </p>
        <h3>
          Description:
        </h3>
        <p>
          {evt.attributes.description}
        </p>
        <h3>
          Venue: {evt.attributes.venue}
        </h3>
        <p>
          {evt.attributes.address}
        </p>
        <a href='/events' className={styles.back}>
            {'<'}Go back
        </a>
      </div>
    }
  </>
)}