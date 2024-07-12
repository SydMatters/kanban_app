
import { Label } from "@/components/ui/Label"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="border border-pink-600 p-8 rounded-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center">Welcome to Kanban</h2>
        <p className="text-center text-muted-foreground">Enter your email below to log in to your account</p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="demo@gmail.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="text-white bg-pink-600 w-full">Log in</Button>
        </div>
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
  )
}