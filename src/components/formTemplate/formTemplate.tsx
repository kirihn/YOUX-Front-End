import { Formik, Form, Field, ErrorMessage } from 'formik';
import type { Props } from './types';
import './formTemplate.scss';
export function FormTemplate<T extends object>(props: Props<T>) {
  return (
    <div className="formContainer">
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.validationSchema}
        // onSubmit={props.onSubmit}
        onSubmit={async (values, formikHelpers) => {
          await props.onSubmit;
          props.onSuccess?.(formikHelpers.resetForm);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="formTemplate">
            {props.fields.map((field) => (
              <div className="inputContainer" key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="form-error"
                />
                {field.type === 'select' && field.options ? (
                  <Field as="select" name={field.name}>
                    <option value="">Выберите...</option>
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Field>
                ) : field.type === 'file' ? (
                  <input
                    name={field.name}
                    type="file"
                    onChange={(e) => {
                      if (e.currentTarget.files && e.currentTarget.files[0]) {
                        setFieldValue(field.name, e.currentTarget.files[0]);
                      }
                    }}
                  />
                ) : (
                  <Field
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeHolder}
                  />
                )}
              </div>
            ))}
            <button type="submit" className="submitButton">
              {props.submitText}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
