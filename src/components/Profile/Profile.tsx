
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/Dialog"
import { Button } from '../ui/Button'
import { Label } from '../ui/Label'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/TextTarea'


export default function Profile() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <div>
              <Button variant="ghost" className="absolute top-4 right-4">
                
              </Button>
            </div>
          </DialogHeader>
          <form className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white" >Name</Label>
              <Input id="name" defaultValue="Jared Palmer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" defaultValue="jared@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio" className="text-white">Bio</Label>
              <Textarea id="bio" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
            <DialogFooter>
              <Button type="submit" className="text-white">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  }