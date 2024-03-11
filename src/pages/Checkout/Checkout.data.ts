import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const AddressSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  suite: z.union([z.string().min(2), z.string().length(0)]),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Please select a province"),
  country: z.string().min(1, "Please select a country"),
  zip: z.string().min(1, "Zip code is required"),
  phone: z.union([
    z.string().regex(phoneRegex, "Invalid phone number"),
    z.string().length(0),
  ]),
});

export const CheckoutSchema = z.object({
  email: z.string().email(),
  emailSubscribe: z.boolean(),
  needsShipping: z.boolean(),
  address: AddressSchema,
  pickupLocation: z.string().optional(),
  textSubscribe: z.boolean(),
  payment: z
    .object({
      method: z.enum(["creditCard", "paypal"]),
      creditCard: z
        .union([
          z.object({
            number: z.string().min(13, "Card number is too short"),
            expiry: z.string().min(5),
            cvv: z.string().min(3),
            name: z.string().min(2),
          }),
          z.object({
            number: z.string().length(0),
            expiry: z.string().length(0),
            cvv: z.string().length(0),
            name: z.string().length(0),
          }),
        ])
        .optional()
        .transform((e) => {
          if (!e?.cvv && !e?.expiry && !e?.name && !e?.number) {
            return undefined;
          }
          return e;
        }),
    })
    .transform((e) => {
      if (e.method === "paypal") {
        return { method: "paypal" };
      }
      return e;
    })
    .refine(
      (data) => {
        if (data.method === "creditCard") {
          return data.creditCard?.number;
        }
        return true;
      },
      {
        message: "Credit card number is required",
        path: ["creditCard", "number"],
      }
    )
    .refine(
      (data) => {
        if (data.method === "creditCard") {
          return data.creditCard?.expiry;
        }
        return true;
      },
      {
        message: "Expiration date is required",
        path: ["creditCard", "expiry"],
      }
    )
    .refine(
      (data) => {
        if (data.method === "creditCard") {
          return data.creditCard?.cvv;
        }
        return true;
      },
      {
        message: "CVV is required",
        path: ["creditCard", "cvv"],
      }
    )
    .refine(
      (data) => {
        if (data.method === "creditCard") {
          return data.creditCard?.name;
        }
        return true;
      },
      {
        message: "Name on card is required",
        path: ["creditCard", "name"],
      }
    ),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
