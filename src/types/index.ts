import {z} from "zod";
import {
    CartSchema,
    OrderItemSchema,
    ProductInputSchema,
    UserInputSchema,
    UserSignInSchema, UserSignUpSchema,
} from '@/lib/validator'

export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>



export type IProductInput = z.infer<typeof ProductInputSchema>

export type Data = {
    users: IUserInput[],
    products: IProductInput[]
    headerMenus: {
        name: string
        href: string
    }[]
    carousels: {
        image: string
        url: string
        title: string
        buttonCaption: string
        isPublished: boolean
    }[]
}


// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>