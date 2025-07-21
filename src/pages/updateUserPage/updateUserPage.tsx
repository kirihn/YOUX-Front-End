import { FormTemplate } from '../../components/formTemplate/formTemplate';
import { createUserValidationSchema } from '../../utils/yup/createUserSchema';
import { initialValues, createUserFields } from './types';
import './createUserPage.scss';
export function CreateUserPage() {
  const handleSubmit = (values: typeof initialValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string | Blob);
    });
  };
  return (
    <div className="createUserPageContainer pageContainer">
      <FormTemplate
        initialValues={initialValues}
        fields={createUserFields}
        validationSchema={createUserValidationSchema}
        onSubmit={handleSubmit}
        submitText="Создать пользователя"
      />
    </div>
  );
}
