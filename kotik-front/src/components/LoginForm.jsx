import React, {useEffect, useState} from 'react';

import { useDispatch, useSelector} from "react-redux";
import {login} from "../slices/auth";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';


const formStyle = {
    width: '300px',
    marginLeft: '42%',
    marginTop: '8%',
    marginBottom: '8%'
};

const LoginForm = (props) => {
    const [loading, setLoading] = useState(false);

    const {isLoggedIn} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    let navigate = useNavigate();


    useEffect(() => {
        if (isLoggedIn){
            return navigate("/");
        }
    },[isLoggedIn]);

    // useEffect(() => {
    //     dispatch(clearMessage());
    // }, [dispatch]);

    const initialValues = {
        username: "",
        password: "",
    };

    // const validationSchema = Yup.object().shape({
    //     username: Yup.string().required("This field is required!"),
    //     password: Yup.string().required("This field is required!"),
    // });

    const handleLogin = (formValue) => {
        const {username, password} = formValue;
        setLoading(true);
        console.log(formValue)
        dispatch(login({username, password}))
            .unwrap()
            .then(() => {
                props.history.push("/");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="form-sign" style={formStyle}>
            <Formik initialValues={initialValues} onSubmit={handleLogin}>
                <Form className="form-sign">
                    <img className="mb-4"
                           src="https://img.icons8.com/metro/452/cat.png"
                           width="72"
                           height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" className="form-control" />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="alert alert-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="alert alert-danger"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm