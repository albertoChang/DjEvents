export default function Page({ params }: { params: { slug: string } }) {
    return (
    <>
      <h1>My event-{params.slug}</h1>
    </>
)}