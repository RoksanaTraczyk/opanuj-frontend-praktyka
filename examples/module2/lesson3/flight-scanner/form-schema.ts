import {z} from 'zod';

export const FlightScannerFormSchema = z.object({
  origin: z.string().min(1, {message: 'Origin cannot be empty'}).max(100, {message: 'Origin cannot be longer than 100 characters'}),
  destination: z.string().min(1, {message: 'Destination cannot be empty'}).max(100, {message: 'Destination cannot be longer than 100 characters'}),
  startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/),
  returnDate: z.string().optional(),
  trip: z.enum(['one-way', 'round-trip']),
});

export type FormValues = z.infer<typeof FlightScannerFormSchema>; // this is the type of the form values. We can use it to type the formData variable in the form submit event listener.