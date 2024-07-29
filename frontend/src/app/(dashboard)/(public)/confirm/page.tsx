import { stripe } from "@/utils/stripe/stripe"

interface ConfirmPageProps {
    searchParams: { [key: string]: string | undefined },
}

export default async function ConfirmPage({searchParams}: ConfirmPageProps) {
    const session = await stripe.checkout.sessions.retrieve(searchParams.session_id || "");
    // const customer = await stripe.customer.retrieve(session.customer);
    const success = searchParams.success;

    if(success !== "true")
        return  <div className="grid place-content-center py-24 text-2xl">
            Something went wrong
        </div>
    
    return  <div className="grid place-content-center py-24 text-2xl">
            Thank you, you will receive an email of successful payment
        </div>
}