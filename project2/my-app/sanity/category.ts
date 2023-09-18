import { defineType,defineField } from "sanity"

export const category=defineType(
    {
        name: 'category',
        type: 'document',
        title: 'category',
        fields: [defineField({
            name:'type',
            type:'string',
            title:'category'
        })
    ]
    }
)