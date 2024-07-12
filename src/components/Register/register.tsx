"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRegisterMutation } from "../../../api/apiProvider"
import React, { useState } from 'react';

export default function Register() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, { isLoading, error }] = useRegisterMutation();

  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="border border-pink-600 w-full  max-w-md space-y-6">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>Enter your details below to create a new account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="demo@gmail.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className="text-white bg-pink-600 w-full" onClick={() => register({email, password})} >Create!!!</Button>
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
  )
}
