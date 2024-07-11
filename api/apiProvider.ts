import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface user{
    user_name: string,
    email: string,
    password: string
}

export const kanbanApi = createApi({
    reducerPath: 'KanbanApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://api-kanban-zgyh.onrender.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<user[], void>({
            query: () => 'api/users',
        })
    })
})

export const { useGetUsersQuery } = kanbanApi;

export default kanbanApi;