import type { FetchUserOption, ResponseUser } from "@/types/ServiceInterface";
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export abstract class UserService {
  private static settings: AxiosRequestConfig<string> = {
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
  };

  private static UserInstance = axios.create(this.settings);

  static async fetchUsers({
    page,
    result,
    seed,
  }: FetchUserOption): Promise<AxiosResponse<ResponseUser>> {
    const formatParam = `/?page=${page}&results=${result}&seed=${seed}&exc=login,registered,dob,cell&nat=gb`;
    return await this.UserInstance.get(formatParam);
  }
}
