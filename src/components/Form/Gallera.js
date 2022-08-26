import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import useFormGallera from 'hooks/useFormGallera';

const loginSchema = Yup.object().shape({
  name: Yup.string().min(3).required('Required'),
});

const initialValues = {
  name: '',
};

const FormGallera = () => {
  const { onSubmit, loading, error } = useFormGallera();
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema}>
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <div className="mb-4">
            <input
              type="text"
              className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                !!errors.name || !!touched.name ? 'border-red-400' : 'border-gray-300 '
              } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              id="name"
              value={values.name}
              name="name"
              onChange={handleChange}
              placeholder="Your name..."
            />
            {errors.name && touched.name && (
              <div className="text-sm text-red-400 mt-1">{errors.name}</div>
            )}
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 gradientGallo"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormGallera;
