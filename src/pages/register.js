import styles from '../styles/Home.module.scss';
import RegisterForm from 'src/components/Form/Register';
import AuthLayout from 'src/components/Layout/Auth';

export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
