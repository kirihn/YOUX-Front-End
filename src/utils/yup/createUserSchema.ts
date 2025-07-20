import * as yup from 'yup';

const FILE_SIZE_LIMIT = 15 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];

export const createUserValidationSchema = yup.object({
  firstName: yup.string().required('Имя обязательно'),
  lastName: yup.string().required('Фамилия обязательна'),
  height: yup
    .number()
    .integer()
    .typeError('Рост должен быть числом')
    .positive('Рост должен быть положительным')
    .required('Рост обязателен'),
  weight: yup
    .number()
    .typeError('Вес должен быть числом')
    .positive('Вес должен быть положительным')
    .required('Вес обязателен'),
  gender: yup.string().oneOf(['м', 'ж']).required('Пол обязателен'),
  address: yup.string().required('Место жительства обязательно'),
  photo: yup
    .mixed<File>()
    .required('Фото обязательно')
    .test('fileSize', 'Слишком большой файл', (value) => {
      return value instanceof File && value.size <= FILE_SIZE_LIMIT;
    })
    .test('fileType', 'Неподдерживаемый формат', (value) => {
      return value instanceof File && SUPPORTED_FORMATS.includes(value.type);
    }),
});
