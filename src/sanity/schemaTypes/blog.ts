import { defineField, defineType } from "sanity"

export const blog = defineType( {
    name: "blog",
    title: "Blog",
    type: "document",

    fields: [
        defineField({
        name: "title",
        title: "Title",
        type: "string",
    }),

    defineField({
        name: "paragraph",
        type: "text",
        title: "Paragraph",
    }),

    defineField({
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
            source: "title",
        },
    }),

    defineField({
        name: "image",
        type: "image",
        title: "Image",
        options: {
            hotspot: true,
        },
    }),

    defineField({
        name: "block",
        type: "array",
        title: "Block",
        of: [{ type: "block" }],
    }),
],
})