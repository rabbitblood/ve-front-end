import { loadStripe } from "@stripe/stripe-js";
const stripePublicKey =
  "pk_test_51PDwmZArIwdh3r3DfE4t6y3pCEgxGtjglSl7GBQVPcmXz5QKZbbyDKGT8trgeFBkbZfvjOBjB0MdgoXoq04GJ39d00MdtwUpCE";

const stripePromise = loadStripe(stripePublicKey);

export default stripePromise;
