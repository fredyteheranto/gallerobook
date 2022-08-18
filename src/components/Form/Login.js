import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import useLoginForm from 'hooks/useLoginForm';
import { useRouter } from 'next/router';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6).required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const FormLogin = () => {
  const router = useRouter();
  const { onSubmit, loading, error } = useLoginForm();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema}>
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <p className="mb-4">Please login to your account</p>
          <div className="mb-4">
            <input
              type="email"
              className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                !!errors.email || !!touched.email ? 'border-red-400' : 'border-gray-300 '
              } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              id="email"
              value={values.email}
              name="email"
              onChange={handleChange}
              placeholder="Your email..."
            />
            {errors.email && touched.email && (
              <div className="text-sm text-red-400 mt-1">{errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Your password..."
              className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                !!errors.password || !!touched.password ? 'border-red-400' : 'border-gray-300 '
              } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && (
              <div className="text-sm text-red-400 mt-1">{errors.password}</div>
            )}
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 gradientGallo"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Log in
            </button>
            <a className="text-gray-500" href="#!">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">¿No tienes cuenta crea una?</p>
            <button
              type="button"
              onClick={() => router.push('/register')}
              className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Registrarme
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
