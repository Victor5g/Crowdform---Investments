import { api } from "./api";

export const DetailsFunds = async (fundname: string) => {
  let response: any = await api.post("/detailsFund", { name: fundname });
  return response?.status === 200 ? response?.data : {};
};

export const CostummerFunds = async () => {
  let response: any = await api.get("/funds");
  return response?.status === 200 ? response?.data : {};
};
