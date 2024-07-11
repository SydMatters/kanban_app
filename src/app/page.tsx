import Image from "next/image";
import Register from "../components/Register/register";
import Login from "../components/Login/login";
import NavBar from "../components/Home/navBar";
import Footer from "../components/Home/footer"
import SideBar from "../components/Home/sideBar"
import Task from "../components/Home/task";

export default function Home() {
  return (
   <main>
     <Login />
   </main>
  );
}
