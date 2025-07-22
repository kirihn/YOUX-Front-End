export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  placeHolder?: string;
  options?: { value: string; label: string }[];
}

export const initialValues = {
  firstName: '',
  lastName: '',
  height: 0,
  weight: 0,
  gender: '',
  address: '',
  photo: null as File | null,
};

export interface ResponseDto {
  firstName?: string | undefined;
  lastName?: string | undefined;
  height?: number | undefined;
  weight?: number | undefined;
  gender?: string | undefined;
  address?: string | undefined;
  photo?: File | null | undefined;
}

export interface ResponseUpdateUserDto {
  status: boolean;
}

export const updateUserFields: FieldConfig[] = [
  { name: 'firstName', label: 'Имя', placeHolder: 'Введите имя' },
  { name: 'lastName', label: 'Фамилия', placeHolder: 'Введите фамилию' },
  {
    name: 'height',
    label: 'Рост (см)',
    type: 'number',
    placeHolder: 'Введите рост',
  },
  {
    name: 'weight',
    label: 'Вес (кг)',
    type: 'number',
    placeHolder: 'Введите вес',
  },
  {
    name: 'gender',
    label: 'Пол',
    type: 'select',
    options: [
      { value: 'м', label: 'Мужской' },
      { value: 'ж', label: 'Женский' },
    ],
  },
  {
    name: 'address',
    label: 'Место жительства',
    placeHolder: 'Введите место жительства',
  },
  { name: 'photo', label: 'Фото', type: 'file' },
];
