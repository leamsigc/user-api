import type { User } from "./ServiceInterface";

export default interface UserStore {
  userList: User[];
  unFilterUserList: User[];
  currentUser: User | undefined;
  currentPage: number;
  resultsPerPage: number;
  error: unknown | string;
  isLoading: boolean;
}
