import { routes } from "../constants/routes-api";
import { detailsFunds, fundsInfo } from "../constants/dummy";

const emulatedApi = (route: string, base: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (base.hasOwnProperty(route)) {
        resolve({ data: base[route], status: 200 });
      } else {
        reject(new Error("Error, route not found"));
      }
    }, 700); // Simulating a 1 second delay in response
  });
};

export const api = {
  post: (route: string, data?: any) => {
    return route.includes("/detailsFund")
      ? emulatedApi(data.name, detailsFunds)
      : route.includes("/funds-info")
      ? emulatedApi(data.name, fundsInfo)
      : emulatedApi(route, routes);
  },
  get: (route: string): object => {
    return emulatedApi(route, routes);
  },
};
