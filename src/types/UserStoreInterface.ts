import type { User } from "./ServiceInterface";

export default interface UserStore {
  userList: User[];
  currentPage: number;
  resultsPerPage: number;
  error: unknown | string;
  isLoading: boolean;
}
