import Image from "next/image";
import { useGetUsersQuery } from "../../api/apiProvider";

/* const { user_name } = useGetUsersQuery */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       {/* <p>{user_name}</p> */}
      </div>
    </main>
  );
}
