import { get } from "bx-utils/ajax";

export function loadUsers(): Promise<Areas.Account.IUser[]> {
  return get("/api/account/users");
}

export function getUser(userId: number): Promise<Areas.Account.IUser> {
    return get(`/api/account/users/${userId}`);
  }
  