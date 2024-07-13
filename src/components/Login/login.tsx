"use client"

import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

import { useLoginMutation } from "../../../api/apiProvider";

// Definición de userSchema (verifica que esto esté en tu archivo de validaciones)
export const userSchema = z.object({
  email: z.string().email({
      message: 'Invalid email'
  }),
  password: z.string().min(6,{
      message: 'Password must be at least 6 characters long'
  }),
})


export default function Login() {

  const [data,{isLoading}] = useLoginMutation();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (datas) => {

    console.log('Form submitted with data:', datas);

    const { email, password } = datas;

    try {
      data({ email, password }).unwrap()
      .then(() => {
        toast.success('Login successfully!');
      })
      .catch((err) => {
        console.error('Failed to register:', err);
      });
    } catch (err) {
       toast.error('Failed to register: ' + err.message);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="border border-pink-600 p-8 rounded-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Welcome to Kanban</h2>
        <p className="text-center text-muted-foreground">Enter your email below to log in to your account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="demo@gmail.com"
              {...register('email')}
              className={`border ${errors.email ? 'border-red-600' : ''}`}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              className={`border ${errors.password ? 'border-red-600' : ''}`}
            />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
          </div>
          <Button type="submit" className="text-white bg-pink-600 w-full">Log in</Button>
          <div className="w-full flex justify-center"><a href="/register">Register</a></div>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
