import type { DeleteUserDto, Props, ResponseDto } from './types';
import { setNewUserId } from '../../redux/slices/CurrentUserSlice';
import './userCard.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useApi } from '../../hooks/useApi';
import { useEffect } from 'react';

export function UserCard(props: Props) {
  const dispatch = useDispatch();
  const { resData, execute } = useApi<ResponseDto, DeleteUserDto>(
    async (body) => axios.delete('/api/user/DeleteUser', { data: body }),
  );

  const { userData } = props;

  const handleUpdateUser = () => {
    dispatch(setNewUserId(userData.id));
  };

  const handleDeleteUser = () => {
    execute({ id: userData.id });
  };

  useEffect(()=>{
    if(resData && resData.status){
      alert('Пользователь успешно удален!')
    }
  }, [resData])
  return (
    <div className="UserCardContainer">
      <div className="PhotoContainer">
        <img src={userData.photo} alt="photo" />
      </div>
      <div className="userInfoContainer">
        <p className="Id">
          <span className="descriptionField">Id: </span>
          {userData.id}
        </p>
        <p className="firstname">
          <span className="descriptionField">Имя: </span>
          {userData.firstName} {userData.lastName}
        </p>
        <p className="height">
          <span className="descriptionField">Рост: </span>
          {userData.height} (см.)
        </p>
        <p className="weight">
          <span className="descriptionField">Вес: </span>
          {userData.weight} (кг.)
        </p>
        <p className="gender">
          <span className="descriptionField">Пол: </span>
          {userData.gender}
        </p>
        <p className="address">
          <span className="descriptionField">Aдрес: </span>
          {userData.address}
        </p>
      </div>
      <div className="buttonsContainer">
        <button className="updateButton" onClick={handleUpdateUser}>
          Update
        </button>
        <button className="deleteButton" onClick={handleDeleteUser}>
          Delete
        </button>
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
