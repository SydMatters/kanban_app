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
        })
        })
})
 
export const { useGetUsersQuery } = kanbanApi;

export default kanbanApi;