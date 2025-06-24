import React from 'react'

import { redirect }  from "next/navigation"
import {Metadata} from "next";
import {auth} from "../../../../auth";
import CheckoutForm from "@/app/(root)/checkout/checkout-form";

export const metadata:Metadata = {
    title: 'Checkout',
}

export default  async function CheckoutPage() {
    const session = await auth()
    if (!session?.user) {
        redirect('/sign-in?callbackUrl=/checkout')
    }

    return (
        <CheckoutForm />
    )
}
