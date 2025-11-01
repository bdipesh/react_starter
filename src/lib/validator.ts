import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const TaskSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  description: z.string().min(2, 'Description is required').max(600),
  status: z.enum(['pending', 'in-progress', 'completed']),
  dueDate: z.date(),
  priority: z.enum(['Urgent', 'Important', 'Medium', 'Normal']),
  userId: z.string().min(2, 'Title is required'),
});
