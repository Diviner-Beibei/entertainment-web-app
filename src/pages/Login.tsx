import { useEffect, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../store";
import { login, getIsAuthenticated } from "../features/auth/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(
    function () {
      if (isAuth) navigate("/", { replace: true });
    },
    [isAuth, navigate]
  );

  const loginInfo = {
    email,
    password,
  };
  //min-h-[365px]
  return (
    <div className="bg-dark-blue grid place-items-center h-screen">
      <Form method="POST">
        <div className="min-w-[327px] h-[365px] bg-semi-dark-blue px-5 py-5 rounded-xl">
          <div className="flex flex-col gap-7">
            <h1 className="text-pure-white text-[32px] tracking-[-0.5px]">
              Login
            </h1>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="    Email address"
                className="bg-semi-dark-blue caret-red-600 w-full border-b text-[15px] font-light border-greyish-blue placeholder:text-greyish-blue py-2 focus:outline-none focus:ring-0 focus:caret-red text-pure-white"
              />
            </div>

            <div className="">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="    Password"
                className="bg-semi-dark-blue caret-red-600 border-b w-full text-[15px] font-light border-greyish-blue placeholder:text-greyish-blue py-2 focus:outline-none focus:ring-0 focus:caret-red text-pure-white"
              />
            </div>

            <button className="bg-mred py-2 text-pure-white rounded-md mt-5">
              Login to your account
            </button>
            <p className="text-pure-white font-light text-center text-[15px]">
              Don't have an account?
              <span className="text-red-700"> Sign Up</span>
            </p>
          </div>

          <input
            type="hidden"
            name="loginInfo"
            value={JSON.stringify(loginInfo)}
          />
        </div>
      </Form>
      ;
    </div>
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

  // console.log("aaaaaaaaaaaa", (loginInfo.info as LoginInfo).email);
  if (loginInfo.info.email && loginInfo.info.password) {
    console.log("23131321");

    store.dispatch(login(loginInfo.info));

    return redirect(`/`);
  }

  return null;
}

export default Login;
