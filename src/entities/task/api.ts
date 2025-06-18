import { api, ApiEndpointBuilder } from "@shared/api";
import type { Task } from "./types";

export const taskApi = api.injectEndpoints({
  endpoints: (builder: ApiEndpointBuilder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "tasks",
      providesTags: ["Task"],
    }),
    createTask: builder.mutation<Task, Partial<Task>>({
      query: (task: Task) => ({
        url: "tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = taskApi;
