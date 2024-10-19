import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust base URL as needed
  endpoints: (builder) => ({
    getAllGameSessions: builder.query({
      query: () => 'gameSessions',
    }),
    getGameSessionById: builder.query({
      query: (id) => `gameSessions/${id}`,
    }),
    createGameSession: builder.mutation({
      query: (gameSessionData) => ({
        url: 'gameSessions',
        method: 'POST',
        body: gameSessionData,
      }),
    }),
    updateGameSession: builder.mutation({
      query: ({ id, gameSessionData }) => ({
        url: `gameSessions/${id}`,
        method: 'PATCH',
        body: gameSessionData,
      }),
    }),
    deleteGameSession: builder.mutation({
      query: (id) => ({
        url: `gameSessions/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllGameSessionsQuery,
  useGetGameSessionByIdQuery,
  useCreateGameSessionMutation,
  useUpdateGameSessionMutation,
  useDeleteGameSessionMutation,
} = apiSlice;

// Export the apiSlice itself
export { apiSlice }; // Make sure to add this line

// Export the apiSlice reducer to be included in the store
export default apiSlice.reducer;
