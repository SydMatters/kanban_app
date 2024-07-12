'use client'
import Login from '../components/Login/login'

import { useGetUsersQuery } from "../../api/apiProvider";

export default function Home() {

  const { data, error, isLoading, isFetching } = useGetUsersQuery();

  if (isLoading || isFetching) return <div>loading</div>
  if (error) return <div>Error</div>
  console.log();

  return (

    <main>
      <Login />
    </main>
  );
}
