'use client'
import Register from "../components/Register/register";
import Login from "../components/Login/login";
import NavBar from "../components/Home/navBar";
import Footer from "../components/Home/footer"
import SideBar from "../components/Home/sideBar"
import Task from "../components/Home/task";
import { useGetUsersQuery } from "../../api/apiProvider";

export default function Home() {

  const { data, error, isLoading, isFetching } = useGetUsersQuery();

  if (isLoading || isFetching ) return <div>loading</div>
  if (error) return <div>Error</div>
  console.log();

  return (

   <main>
     <Login />
     { data?.map (user => (
      <div key={user.user_id}>
        <p>{user.user_name}</p>
      </div>
      )) }
   </main>
  );
}
