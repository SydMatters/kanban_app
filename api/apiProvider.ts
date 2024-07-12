import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Section, Task } from '../src/lib/types'

export const kanbanApi = createApi({
    reducerPath: 'KanbanApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://api-kanban-zgyh.onrender.com/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/',
        }),
        patchSections: builder.mutation<Section, {id: number; section_id: number}>({
            query: ({id, section_id, ...sectionToPatch}) => ({
                url: `api/users/${id}/sections/${section_id}`,
                method: 'PATCH',
                body: sectionToPatch
             }
            )
        }),

        patchTasks: builder.mutation<Task, {id: number, task_id: number, section_id: number}>({
            query: ({id, section_id, task_id, ...taskToPatch}) => ({
                url: `api/users/${id}/sections/${section_id}/tasks/${task_id}`,
                method: 'PATCH',
                body: taskToPatch
            })
        }),

        postSections: builder.mutation<Section, { id: number }>({
            query: ({id, ...section_Name}) => ({
                url: `api/users/${id}/sections/`,
                method: 'POST',
                body: section_Name 
            })
        }),
        
        postTasks: builder.mutation<Task, { id: number, section_id: number }>({
            query: ({section_id, id, ...task_name}) => ({
                url: `api/users/${id}/sections/${section_id}/tasks`,
                method: 'POST',
                body: task_name
            })
        }),

        getUserById: builder.query<User, User>({
            query: ({user_id}) => `api/users/${user_id}`,
        }),

        getSections: builder.query<User, User>({
            query: ({user_id}) => `api/users/${user_id}/sections`,
        }),

        getSectionById: builder.query<User, User & Section>({
            query: ({user_id, section_id}) => `api/users/${user_id}/sections/${section_id}`,
        }),


        })
})
 
export const { useGetUsersQuery } = kanbanApi;

export default kanbanApi;
