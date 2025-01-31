import CommentBox from '@/components/Comment'
import { client } from '@/sanity/lib/client'
import { ulForr } from '@/sanity/lib/image'
import { PortableText } from 'next-sanity'
import React from 'react'

export default async function blog({ params: {slug}} : {params: {slug: string}}) {

    const query = `*[_type == "blog" && slug.current == "${slug}"]{
    title,
    paragraph,
    image,
    block}[0]`

    const data = await client.fetch(query)


  return (
    <article className='mt-12 mb-24 px-3 md:px-6 md:py-4 mx-6 flex flex-col gap-y-7 text-white'>
        <h1 className='text-2xl md:text-4xl font-serif font-bold'>
            {data.title}</h1>

            <img src={ulForr(data.image).url()} alt={data.title} width={400} height={400} className='rounded-md shadow-2xl transition-transform transform hover:scale-105'/>

            <section>
                <h2 className='text-2xl font-serif font-semibold mb-4'>Summary</h2>
                <p className='text-lg'>{data.paragraph}</p>
            </section>

            <section className='text-xl font-serif space-y-5'>
                <PortableText value={data.block}/>
                <CommentBox/>
            </section>
    </article>
  )
}

