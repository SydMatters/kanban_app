import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Section, Task } from '../src/lib/types'

export const kanbanApi = createApi({
    reducerPath: 'KanbanApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://api-kanban-zgyh.onrender.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'api/users',
        }),
        })
})
 
export const { useGetUsersQuery } = kanbanApi;

export default kanbanApi;