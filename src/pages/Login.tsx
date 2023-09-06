import { useEffect, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";
import {
  login,
  getIsAuthenticated,
  setErrorNumber,
  // getIsLogin,
  // setIsLogin,
} from "../features/auth/authSlice";
import Logo from "../ui/Logo";
import LoginInput from "../ui/LoginInput";

function Login() {
  const [email, setEmail] = useState("123456@gmail.com");
  const [password, setPassword] = useState("123456");
  const [repeatPassword, setRepeatPassword] = useState("123456");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);
  // const isLogin = useSelector(getIsLogin);

  useEffect(
    function () {
      if (isAuth) navigate("/", { replace: true });
    },
    [isAuth, navigate]
  );

  const loginInfo = {
    email,
    password,
    repeatPassword,
  };
  //min-h-[365px]
  return (
    <main className="bg-dark-blue grid place-items-center h-screen">
      <div className="flex flex-col gap-12 items-center">
        <Logo />

        <Form method="POST">
          <div className="min-w-[327px] min-h-[365px] bg-semi-dark-blue px-5 py-5 rounded-xl">
            <div className="flex flex-col gap-6">
              <h1 className="text-pure-white text-[32px] tracking-[-0.5px]">
                {isLogin ? "Login" : "Sign Up"}
              </h1>
              <LoginInput
                htmlFor="email"
                type="email"
                id="email"
                value={email}
                setOnChange={setEmail}
                placeholderText={"    Email address"}
              />
              <LoginInput
                htmlFor="password"
                type="password"
                id="password"
                value={password}
                setOnChange={setPassword}
                placeholderText={"    Password"}
              />
              {!isLogin && (
                <LoginInput
                  htmlFor="repeat-password"
                  type="password"
                  id="repeat-password"
                  value={repeatPassword}
                  setOnChange={setRepeatPassword}
                  placeholderText={"    Repeat Password"}
                />
              )}

              <button className="bg-mred py-2 text-pure-white rounded-md mt-5 hover:bg-pure-white hover:text-semi-dark-blue">
                {isLogin ? "Login to your account" : "Create an account"}
              </button>
              <p className="text-pure-white font-light text-center text-[15px]">
                {isLogin ? "Don't have an account?" : "Alread have an account?"}
                <span
                  className="text-red-700"
                  onClick={() => setIsLogin((isLogin) => !isLogin)}
                >
                  {isLogin ? "    Sign Up" : "    Login"}
                </span>
              </p>
            </div>

            <input
              type="hidden"
              name="loginInfo"
              value={JSON.stringify(loginInfo)}
            />
          </div>
        </Form>
      </div>
    </main>
  );
}

interface Props {
  request: Request;
}

export async function action(param: Props) {
  const request = param.request;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const loginInfo = {
    info: JSON.parse(data.loginInfo as string),
  };

  let errorNumber = 0;

  if (!loginInfo.info.email) {
    errorNumber = 1;
  }

  if (!loginInfo.info.password) {
    errorNumber += 2;
  }

  // if (!loginInfo.info.repeatPassword) {
  //   errorNumber += 4;
  // }

  console.log(errorNumber, loginInfo.info);

  if (errorNumber > 0) {
    store.dispatch(setErrorNumber(errorNumber));
    return null;
  }
  if (loginInfo.info.email && loginInfo.info.password) {
    // console.log("23131321");

    store.dispatch(login(loginInfo.info));

    return redirect(`/`);
  }

  return null;
}

export default Login;
