import { z } from "zod";

export const FormDataSchema = z.object({
    user_name: z.string().min(1, "Name is required"),
    user_email: z.string().min(1, "Email is required").email("Invalid email address"),
    user_company: z.string().min(1, "Company name is required"),
    message: z.string().min(1, "Message is required"),
});

export type Inputs = z.infer<typeof FormDataSchema>;
