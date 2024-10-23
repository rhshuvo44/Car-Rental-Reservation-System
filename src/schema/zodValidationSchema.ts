import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});
export const signupSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
    }),
    email: z.string({
        required_error: 'Email is required',
    }).email('Invalid email address'),
    role: z.enum(['user', 'admin']).default("user"),
    password: z.string({
        required_error: 'Password must be at least 6 characters long',
    }).min(6, 'Password must be at least 6 characters long'),
    phone: z.string({
        required_error: 'Phone number is required',
    }),
    address: z.string({
        required_error: 'Address is required',
        invalid_type_error: 'Address must be a string',
    }),
})