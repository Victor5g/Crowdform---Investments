import { api } from "./api";

export const CostumerInfo = async () => {
  let response: any = await api.get("/user-info");
  return response?.status === 200 ? response?.data : {};
};

export const News = async () => {
  let response: any = await api.get("/news");
  return response?.status === 200 ? response?.data : {};
};
