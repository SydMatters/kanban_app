import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Section, Task } from '../src/lib/types'


export const kanbanApi = createApi({
    reducerPath: 'KanbanApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://api-kanban-zgyh.onrender.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'api/users',
        }),
        getTasks: builder.query<Task[], (User & Section)>({
            query: ({user_id, section_id}) => `api/users/${user_id}/sections/${section_id}/tasks`,
        }),

        getTask: builder.query<Task, (User & Section & Task)>({
            query: ({user_id, section_id, task_id}) => `api/users/${user_id}/sections/${section_id}/tasks/${task_id}`,
        }),

        createSection: builder.query<Section[], User>({
            query: ({user_id}) => `api/users/${user_id}/sections`,
        })
    })
})
 
export const { useGetUsersQuery } = kanbanApi;

export default kanbanApi;