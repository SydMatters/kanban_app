
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter } from '../ui/dialog'
import { Textarea } from '../ui/TextTarea'
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"


import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

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
              {/* Botón de cierre o acción adicional */}
            </Button>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white">User name</Label>
            <Input id="name" defaultValue="Enter your new name" {...register('name')} />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <DialogFooter>
            <Button type="submit" className="text-white bg-pink-600">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
