import { Button } from "@/components/ui/button";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup); // extend yup

import InputField from "../components/ui/InputField.jsx";

import { useFormik } from "formik";
import * as Yup from "yup";
import { SubmitBtn } from "../components/ui/submitBtn.jsx";
import http from "../http";
// import { BackendvalidationError } from "../library/index.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string()
        .password()
        .minUppercase(1)
        .minSymbols(1)
        .required(),
    }),

    onSubmit: (data, { setSubmitting }) => {
      // console.log("Hello");

      console.log(data);

      async function PostData() {
        console.log("I am insidce post data call");

        try {
          const response = await http.post("/api/users/register", data);

          console.log("I am after the respoinse");

          console.log(response);

          if (response) {
            navigate("/login");
          }
        } catch ({ response }) {
          formik.setFieldError("username", response?.data?.message);
        } finally {
          setSubmitting(false);
        }
      }

      PostData();

      //   setTimeout(() => setSubmitting(false), 2000);
      // console.log(setSubmitting);
      //api request
      // https://mern-130.nru.com.np/ is common route in all so make it in other file and call it
      // console.log(response);

      // http
      //   .post("/api/users/register", data)
      //   .then(({ data }) => navigate("/login"))
      //   .catch(({ response }) => {
      //     // console.log(response);

      //     formik.setFieldError("username", response?.data?.message)

      //     // BackendvalidationError(formik, response);
      //   })
      //   .finally(() => setSubmitting(false));
    },
  });

  return (
    <div>
      <main className="flex justify-center">
        <Card class="w-full max-w-sm">
          <h1>Register</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-2">
              <InputField
                formik={formik}
                label="Username"
                icon="fas fa-user"
                name="username"
              />
              {/* <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-red-500"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 6v12"></path>
                    <path d="M17.196 9 6.804 15"></path>
                    <path d="m6.804 9 10.392 6"></path>
                  </svg> */}

              <div className="grid gap-2">
                <InputField
                  formik={formik}
                  label="Email"
                  icon="fa-solid fa-envelope"
                  name="email"
                />
                {/* <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-red-500"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 6v12"></path>
                      <path d="M17.196 9 6.804 15"></path>
                      <path d="m6.804 9 10.392 6"></path>
                    </svg> */}
              </div>
              <div className="grid gap-2">
                <InputField
                  formik={formik}
                  label="Password"
                  icon="fas fa-key"
                  name="password"
                />

                {/* <input
                    type="password"
                    className="border-2 focus:outline-none focus rounded-sm px-2 h-10 focus:border-blue-400 focus:invalid:border-red-400 required:border-pink-400"
                    placeholder="Enter Your password"
                  /> */}
              </div>
            </div>
            <div className="mt-2 mb-2">
              <SubmitBtn formik={formik} label="Register" />
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Register;
