export interface User {
  id: string;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  gender: string;
  address: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export interface Props {
  userData: User;
}