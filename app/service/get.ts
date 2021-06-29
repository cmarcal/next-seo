import { Api } from "./httpClient";

export const getListImage = () => Api.get("/v2/list");
