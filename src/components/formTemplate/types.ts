import * as yup from 'yup';

export interface FieldConfig {
  name: string;
  label: string;
  type?: string;
  placeHolder?: string;
  options?: { value: string; label: string }[];
}

export interface Props<T extends yup.Maybe<yup.AnyObject>> {
  initialValues: T;
  fields: FieldConfig[];
  validationSchema: yup.ObjectSchema<T>;
  onSubmit: (values: T) => void;
  onSuccess?: (resetForm: () => void) => void;
  submitText: string;
}
