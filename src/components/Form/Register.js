import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import useRegisterForm from 'hooks/useRegisterForm';
import { phoneRegExp } from 'utils/constants';

const loginSchema = Yup.object().shape({
  fullName: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  username: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6).required('Password is required'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  username: '',
  password: '',
  passwordConfirmation: '',
};

const RegisterForm = () => {
  const router = useRouter();
  const { onSubmit, loading, error } = useRegisterForm();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema}>
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <p className="mb-4">Please register to your account</p>
          <div className="lg:flex lg:flex-wrap g-1">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="fullName" className="form-label inline-block mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.fullName && !!touched.fullName ? 'border-red-400' : 'border-gray-300 '
                  } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  id="fullName"
                  value={values.fullName}
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Your fullName..."
                />
                {errors.fullName && touched.fullName && (
                  <div className="text-sm text-red-400 mt-1">{errors.fullName}</div>
                )}
              </div>
            </div>
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">
                  Phone
                </label>
                <input
                  type="number"
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.phone || !!touched.phone ? 'border-red-400' : 'border-gray-300 '
                  } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  id="phone"
                  value={values.phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder="Your phone..."
                />
                {errors.phone && touched.phone && (
                  <div className="text-sm text-red-400 mt-1">{errors.phone}</div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-wrap g-1">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="username" className="form-label inline-block mb-2 text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.username && !!touched.username ? 'border-red-400' : 'border-gray-300 '
                  } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  id="username"
                  value={values.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="Your username..."
                />
                {errors.username && touched.username && (
                  <div className="text-sm text-red-400 mt-1">{errors.username}</div>
                )}
              </div>
            </div>
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.email && !!touched.email ? 'border-red-400' : 'border-gray-300 '
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
            </div>
          </div>

          <div className="lg:flex lg:flex-wrap g-1">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your password..."
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.password && !!touched.password ? 'border-red-400' : 'border-gray-300 '
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
            </div>
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="mb-4">
                <label
                  htmlFor="passwordConfirmation"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Password Confirmation
                </label>
                <input
                  type="password"
                  placeholder="Your Password Confirmation..."
                  className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid ${
                    !!errors.passwordConfirmation && !!touched.passwordConfirmation
                      ? 'border-red-400'
                      : 'border-gray-300 '
                  } rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  onChange={handleChange}
                  value={values.passwordConfirmation}
                />
                {errors.passwordConfirmation && touched.passwordConfirmation && (
                  <div className="text-sm text-red-400 mt-1">{errors.passwordConfirmation}</div>
                )}
              </div>
            </div>
          </div>

          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 gradientGallo"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Register
            </button>
          </div>
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">¿Ya tienes cuenta ?</p>
            <button
              type="button"
              onClick={() => router.push('/login')}
              className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
