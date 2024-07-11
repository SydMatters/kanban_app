import Image from "next/image";
<<<<<<< HEAD
import { useGetUsersQuery } from "../../api/apiProvider";

/* const { user_name } = useGetUsersQuery */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       {/* <p>{user_name}</p> */}
      </div>
=======
import Register from "../components/Register/register";
import Login from "../components/Login/login";
import NavBar from "../components/Home/navBar";
import Footer from "../components/Home/footer"
import SideBar from "../components/Home/sideBar"
import Task from "../components/Home/task";

export default function Home() {
  return (
<<<<<<< HEAD
    <main>
      
>>>>>>> 1c6c85742e9b3b5a8fc0a8da377b97d143278847
    </main>
=======
   <main>
     <Login />
   </main>
>>>>>>> 90fb31607f4a9c32315c1e842f4b40c968a79c4d
  );
}
