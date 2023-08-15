import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import Marquee from "react-fast-marquee";
import register from '../../assets/register.jpg'

function Register() {
    const initialValues = {
        username: "",
        password: "",
        email: ""
    };
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Username is required."),
        password: Yup.string().min(8).max(20).required(),
        email: Yup.string().email().required("Email is required.")
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data)
            .then((response) => {
                if (response.data.message) {
                    toast.warning(response.data.message);
                } else {
                    navigate("/login");
                }
            })
            .catch((error) => {
                console.error("Error during registration:", error);
            });
    };

    return (
        <div className="bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
         h-screen grid justify-items-center">
            <Marquee className="text-9xl absolute overflow-hidden h-screen font-extrabold">
                WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE. WIRE
            </Marquee>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="flex z-10 rounded-lg drop-shadow-xl mt-36 bg-white h-[400px]">
                    <div className="h-[385px] w-[300px] grid justify-items-center">
                        <h3 className="text-2xl">Register</h3>
                        <Field
                            autoComplete="off"
                            name="username"
                            placeholder="Username"
                            className="shadow-sm h-10 shadow-slate-400 px-8 border-b-2 focus:outline-none border-blue-500"
                        />
                        <p className="h-2">
                            <ErrorMessage name="username" component="span" className="text-rose-500" />
                        </p>

                        <Field
                            autoComplete="off"
                            name="email"
                            placeholder="Email"
                            className="shadow-sm h-10 shadow-slate-400 px-8 border-b-2 focus:outline-none border-blue-500"
                        />
                        <p className="h-2">
                            <ErrorMessage name="email" component="span" className="text-rose-500" />
                        </p>

                        <Field
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="shadow-sm h-10 shadow-slate-400 px-8 border-b-2 focus:outline-none border-blue-500"
                        />
                        <p>
                            <ErrorMessage name="password" component="span" className="text-rose-500" />
                        </p>

                        <button type="submit"
                            className="border border-blue-500 rounded-md grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white">
                            Register
                        </button>
                        <p>
                            Already have an account?
                        </p>
                        <Link to={'/login'} className="text-blue-500 underline">
                            Login
                        </Link>
                    </div>

                    <div className="h-[400px] w-[300px] z-10 grid items-center">
                        <div className="m-2 rounded-lg">
                            <img src={register} alt="login boy" className="h-[380px] rounded-xl" />
                        </div>
                    </div>
                    <ToastContainer />
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
