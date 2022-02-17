import type { RemovableRef } from "@vueuse/core";
import type { CurrentUser, User } from "./ServiceInterface";

export default interface UserStore {
  userList: RemovableRef<User[]>;
  unFilterUserList: RemovableRef<User[]>;
  currentUser: RemovableRef<CurrentUser>;
  currentPage: RemovableRef<number>;
  resultsPerPage: number;
  error: unknown | string;
  isLoading: boolean;
}
