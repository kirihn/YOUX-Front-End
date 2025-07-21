
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  gender: string;
  address: string;
  photo: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface GetUsersResponse {
  users: User[];
  totalPages: number;
}
