import { z } from "zod";

const AddressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  suite: z.string().optional(),
  city: z.string(),
  province: z.string(),
  zip: z.string(),
  phone: z.string(),
});

export const CheckoutSchema = z
  .object({
    email: z.string().email(),
    emailSubscribe: z.boolean(),
    needsShipping: z.boolean(),
    shipping: AddressSchema.optional(),
    pickupLocation: z.string().optional(),
    textSubscribe: z.boolean(),
    payment: z
      .object({
        method: z.enum(["creditCard", "paypal"]),
        creditCard: z
          .object({
            number: z.string(),
            expiry: z.string(),
            cvv: z.string(),
          })
          .optional(),
      })
      .refine((data) => {
        if (data.method === "creditCard") {
          return data.creditCard !== undefined;
        }
        return true;
      }),
    billing: AddressSchema.optional(),
  })
  .refine((data) => {
    if (data.needsShipping) {
      return data.shipping !== undefined;
    } else {
      return data.pickupLocation !== undefined && data.billing !== undefined;
    }
  });

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
