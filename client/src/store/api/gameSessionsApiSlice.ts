import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const nodeEnvironment = import.meta.env.VITE_NODE_ENV;

const url =
  nodeEnvironment === "development"
    ? "http://localhost:3500"
    : "https://blackjack-backend-goet.onrender.com/";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: url }), // Adjust base URL as needed
  endpoints: (builder) => ({
    getAllGameSessions: builder.query({
      query: () => "gameSessions",
    }),
    getGameSessionById: builder.query({
      query: (id) => `gameSessions/${id}`,
    }),
    createGameSession: builder.mutation({
      query: (gameSessionData) => ({
        url: "gameSessions",
        method: "POST",
        body: gameSessionData,
      }),
    }),
    updateGameSession: builder.mutation({
      query: ({ id, ...gameSessionData }) => ({
        url: `gameSessions/${id}`,
        method: "PATCH",
        body: gameSessionData,
      }),
    }),
    deleteGameSession: builder.mutation({
      query: (id) => ({
        url: `gameSessions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllGameSessionsQuery,
  useGetGameSessionByIdQuery,
  useLazyGetGameSessionByIdQuery,
  useCreateGameSessionMutation,
  useUpdateGameSessionMutation,
  useDeleteGameSessionMutation,
} = apiSlice;

// Export the apiSlice itself
export { apiSlice }; // Make sure to add this line

// Export the apiSlice reducer to be included in the store
export default apiSlice.reducer;
