import { loadStripe } from "@stripe/stripe-js";
const stripePublicKey = process.env
  .NEXT_PUBLIC_VITE_STRIPE_PUBLIC_KEY as string;

const stripePromise = loadStripe(stripePublicKey);

export default stripePromise;
