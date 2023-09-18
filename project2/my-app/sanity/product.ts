import { defineField } from "sanity";

export  const pet ={
name:"Product",
type:"document",
title:"product",
fields:[
       {
        name:"Name",
        type:"string",
        title:"product Name"
       },
       {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
            source: 'Name',
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input: any) => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
        }
    },
       {
        name:"description",
        type:"string",
        title:"product description"
       },
       
       {
        name:"price",
        type:'number',
        title:"price"
       },
       {
        name:"Image",
        type:"image",
        title:"product image",
       },
       {
        name: 'quantity',
        type: 'number',
        validation: (Rule: any) => Rule.required().integer().min(0),
      },
       defineField( {
        name:'category',
        title:'category',
        type:'reference',
        to:[
            {
            type:"category",
        }
    ]
       }) 
]




}
