import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Collin Heenan
      </h1>
      <p className="mb-8">
        {`Undergraduate student at Worcester State University studying Economics & Computer Science.`}
      </p>
      <h1 className="mb-2 text-1xl font-semibold tracking-tighter">
        Academic Focus
      </h1>
      <p className="mb-4">
      {`Economic Theory & Analysis,
        Mathematical Economics,
        Data Structures & Algorithms,
        Statistical Analysis,
        Software Engineering,
        System Design.`} 
      </p>
      <h1 className="mb-2 text-1xl font-semibold tracking-tighter">
        Currently
      </h1>
      <p className="mb-4">
      {`Interning at Cornerstone Bank; Working on Commercial Data.`} 
      </p>
      <div className="my-8">
        <BlogPosts/>
      </div>
    </section>
  )
}
