import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "../core/api-request";

// Sample Test
export const test = async (payload = {}) => {
  return await apiRequest_Error("GET", "/api-path-test/", payload);
};

// Sample Test Query
export const useTestQuery = async () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/user/carts");
    },
  });
};

// Sample Test Mutation
export const useTestMutation = async () => {
  return useMutation({
    mutationKey: ["addresses", "update"],
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", `/api-post-methods`, payload),
  });
};
