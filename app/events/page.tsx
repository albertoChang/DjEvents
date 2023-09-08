'use client';
import { useEffect, useState } from "react";
import { getEvents } from "../actions/event";
import EventItem from "../components/eventItem";
import { Event, EventProps } from "../types/types";

export default function EventsPage() {

    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {    
        const loadInitialData = async () =>{
            try{
                const res: EventProps = await getEvents();
                setEvents(res.data)
            } catch (e){
                console.log(e)
            }
        }
        loadInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            {events?.length === 0 && <h3>No events to show</h3>}

            {events?.map((evt: Event)=>(
                <EventItem 
                    evt={evt.attributes} 
                    key={evt.id} 
                />
            ))}
        </>
    )
  }