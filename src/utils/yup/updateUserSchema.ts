import * as yup from 'yup';

const FILE_SIZE_LIMIT = 15 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];

export const updateUserValidationSchema = yup.object({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  height: yup
    .number()
    .integer()
    .typeError('Рост должен быть числом')
    .positive('Рост должен быть положительным')
    .optional(),
  weight: yup
    .number()
    .typeError('Вес должен быть числом')
    .positive('Вес должен быть положительным')
    .optional(),
  gender: yup.string().oneOf(['м', 'ж']).optional(),
  address: yup.string().optional(),
  photo: yup
    .mixed<File>()
    .optional()
    .test('fileSize', 'Слишком большой файл', (value) => {
      if (!value) return true;
      return value instanceof File && value.size <= FILE_SIZE_LIMIT;
    })
    .test('fileType', 'Неподдерживаемый формат', (value) => {
      if (!value) return true;
      return value instanceof File && SUPPORTED_FORMATS.includes(value.type);
    }),
});
