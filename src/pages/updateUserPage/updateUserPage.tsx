import { FormTemplate } from '../../components/formTemplate/formTemplate';
import {
  type ResponseDto,
  type ResponseUpdateUserDto,
  updateUserFields,
} from './types';
import { updateUserValidationSchema } from '../../utils/yup/updateUserSchema';
import { useApi } from '../../hooks/useApi';
import axios from 'axios';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store/store';
import { useEffect } from 'react';
import './updateUserPage.scss';
import { useNavigate } from 'react-router-dom';

export function UpdateUserPage() {
  const currentUserId = useSelector((state: RootState) => state.CurrentUserId);
  const navigate = useNavigate();

  const { resData, execute } = useApi<ResponseDto>(async () =>
    axios.get('/api/user/getUserbyId', {
      params: { userId: currentUserId.userId },
    }),
  );

  const { resData: resDataUpdateUser, execute: executeUpdateUser } = useApi<
    ResponseUpdateUserDto,
    FormData
  >(async (body) =>
    axios.put('/api/user/updateUser', body, {
      params: { userId: currentUserId.userId },
    }),
  );

  const handleSubmit = (values: ResponseDto) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '')
      ) {
        return;
      }
      formData.append(key, value as string | Blob);
    });
    executeUpdateUser(formData);
  };

  useEffect(() => {
    if (currentUserId.userId) {
      execute();
    } else {
      alert('Error: Пользователь не выбран');
    }
  }, []);

  useEffect(() => {
    if (resDataUpdateUser?.status === true) {
      alert('Пользователь успешно обновлен!');
      navigate('/userList');
    }
  }, [resDataUpdateUser]);
  return (
    <div className="createUserPageContainer pageContainer">
      {resData && (
        <FormTemplate
          initialValues={resData}
          fields={updateUserFields}
          validationSchema={updateUserValidationSchema}
          onSubmit={handleSubmit}
          submitText="Создать пользователя"
        />
      )}
    </div>
  );
}
