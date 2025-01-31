import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import { client } from '@/sanity/lib/client';
import Contact from "@/components/Contact";

export default async function Home() {
  const query = `*[_type == "blog"] | order(_updatedAt asc){
  title,
  paragraph,
  image,
  "slug": slug.current
  }`

  const data: Blog[] = await client.fetch(query) 
  console.log(data); 

  return (
    <div>
      <Hero/>

      <section className="body-font font-serif text-white">
        <div className="container px-5 mt-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1 className="text-2xl font-semibold mb-4">
              Glow Up with Makeup!
            </h1>
            <p className="md:w-2/3 mx-auto leading-relaxed text-base">
              Makeup is the art of enhancing your natural beauty and expressing
              your unique style. From bold lipsticks to radiant highlighters,
              the right products can transform your look and boost your
              confidence effortlessly!
            </p>
          </div>
          </div>
      </section>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
      {data.map((data: Blog) => (
        <Blog data={data} key={data.slug} />
      ))}
      </div>

      <Contact />
    </div>
  );
}
