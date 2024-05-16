import { loadStripe } from "@stripe/stripe-js";
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY as string;

const stripePromise = loadStripe(stripePublicKey);

export default stripePromise;
