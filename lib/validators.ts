import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

const currency = z.string().refine(value => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    'Preis muss angegeben werden')

export const insertProductSchema = z.object({

    name: z.string().min(3, "Name muss mindestens 3 Buchstaben beeinhalten"),

    slug: z.string().min(3, "Slug muss mindestens 3 Buchstaben beeinhalten"),

    category: z.string().min(3, "Kategorie muss mindestens 3 Buchstaben beeinhalten"),

    brand: z.string().min(3, "Marke muss mindestens 3 Buchstaben beeinhalten"),

    description: z.string().min(3, "Beschreibung muss mindestens 3 Buchstaben beeinhalten"),

    stock: z.coerce.number(),

    images: z.array(z.string()).min(1, "Produkt muss mindestens 1 Bild beinhalten"),

    isFeatured: z.boolean(),

    banner: z.string().nullable(),

    price: currency,

})
