import { Event } from "@/app/types/types";

export default function Page({ params }: { params: { slug: string } }) {
    console.log({params})
    return (
    <>
      <h1>My event-{params.slug}</h1>
    </>
)}