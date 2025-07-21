import { FormTemplate } from '../../components/formTemplate/formTemplate';
import { createUserValidationSchema } from '../../utils/yup/createUserSchema';
import {
  initialValues,
  createUserFields,
  type ResponseDto,
} from './types';
import './createUserPage.scss';
import { useApi } from '../../hooks/useApi';
import axios from 'axios';
import { useEffect } from 'react';
export function CreateUserPage() {
  const { resData, execute } = useApi<ResponseDto, FormData>(async (body) =>
    axios.post('/api/user/CreateNewUser', body),
  );

  const handleSubmit = (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
    alert(1)
    execute(formData);
  };

  useEffect(() => {
    if (resData?.status === true) {
      // очистить все поля
    }
  }, [resData]);
  return (
    <div className="createUserPageContainer pageContainer">
      <FormTemplate
        initialValues={initialValues}
        fields={createUserFields}
        validationSchema={createUserValidationSchema}
        onSubmit={handleSubmit}
        submitText="Создать пользователя"
        onSuccess={(resetForm) => {
          if (resData?.status === true) {
            alert('Пользователь успешно создан!');
            resetForm();
          }
        }}
      />
    </div>
  );
}
