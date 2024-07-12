"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useRegisterMutation } from "../../../api/apiProvider";




// Definir el esquema de validación con Zod
const registrationSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export default function Register() {

  const [data,{isLoading}] = useRegisterMutation();

  // Configurar useForm con React Hook Form y Zod
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  // Función que se llama al enviar el formulario
 /* const onSubmit = async (data) => {
    console.log('Form submitted with data:', data);
    // Aquí puedes agregar la lógica para manejar el registro del usuario
  };
*/

  const onSubmit = async (datas) => {
    
    console.log('Form submitted with data:', datas);

    const { name, email, password } = datas;

    try {
       data({ name, email, password }).unwrap();
       console.log('Registered successfully!');
    } catch (err) {
      console.error('Failed to register:', err);
    }
  }; 
  
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="border border-pink-600 w-full max-w-md space-y-6">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>
          <CardDescription>Enter your details below to create a new account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                {...register('username')}
                className={`border ${errors.username ? 'border-red-600' : ''}`}
              />
              {errors.username && <p className="text-red-600 text-sm">{errors.username.message}</p>}
            </div>
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
            <Button type="submit" className="text-white bg-pink-600 w-full">Create!!!</Button>
          </form>
          <div className="w-full flex justify-center"><a href="/login">Login</a></div>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
