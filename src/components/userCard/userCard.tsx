import type { Props } from './types';

export function UserCard(props: Props) {
  const { userData } = props;
  return (
    <div className="UserCardContainer">
      <div className="PhotoContainer">
        <img src={userData.photo} alt="photo" />

      </div>
    </div>
  );
}
// export interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
//   height: number;
//   weight: number;
//   gender: string;
//   address: string;
//   photo: string;
//   createdAt: string;
//   updatedAt: string;
// }
