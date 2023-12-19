import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import login from '../reduxToolkit/userSlice'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

function SignIn() {
    const loginSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, "Mật khẩu phải từ 6 ký tự")
            .required('Bạn hãy nhập mật khẩu để đăng nhập'),
        email: Yup.string().email("Bạn chưa nhập đúng định dạng email")
            .required('Bạn hãy nhập email để đăng nhập'),

    });
    const dispatch = useDispatch();
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    try {
                        setSubmitting(false);
                        console.log("thử nút submit: ", values)
                        dispatch(login(values)).then((data) => {
                            console.log('data trong form login: ', data)
                        }).catch((error) => {
                            console.log('Lỗi khi lấy dữ liệu:', error);
                        });
                    } catch (err) {
                        console.log('ERR SignIn Dispatch: ', err)
                    }
                }}
            >
                {({ isSubmitting }) => {
                    try {
                        return (
                            <Form>
                                <label>
                                    Email: <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" />
                                </label>
                                <label>
                                    Password:
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" />
                                </label>
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                            </Form>
                        );
                    } catch (err) {
                        console.log('ERR login Form: ', err)
                    }
                }}
            </Formik>
        </>
    );
}

export default SignIn;