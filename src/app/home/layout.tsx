import Header from "@/components/Home/Header";
import Kanban from "@/components/Home/Kanban";
import NavBar from "@/components/Home/navBar";
import SideBar from "@/components/Home/sideBar";

export default function Layout (
  {children} : {children: React.ReactNode}
)
{
  return (
    <div className='h-screen overflow-y-hidden'>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className='flex flex-col'>
          <Header /> 
          <Kanban />
        </div>
      </div>  
    </div>
  )
}