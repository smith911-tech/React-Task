import Header from "./Header";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {HiOutlineKey} from 'react-icons/hi2'
import axios from "axios";
import {ImSpinner2} from 'react-icons/im'
import {ImCheckmark} from 'react-icons/im'
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);
  // ! posted popup
  const handleSuccess = () => {
    message.success("Login Successfully");
  };
    const handleError = () => {
      message.error("Login Failed");
    };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate()
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const requestBody = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      setLoading(true);
      setSuccess(false);
      const response = await axios.post(
        "https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setError("")
      if (response.status === 200) {
        setSuccess(true);
        handleSuccess()
        setTimeout(() => {
            navigate("/Dashboard");
        }, 1000)
      } else {
        handleError()
      }
    } catch (error) {
      handleError()
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className=" mb-9">
      <Header />
      <section className="w-full justify-center flex mt-4 font-Inter">
        <form
          onSubmit={handleSubmit}
          className=" border border-[#E6E7EC] border-solid lg1187:w-[40%] pt-8 px-8 rounded-l pb-8 w-[90%] mg558:w-[85%] mg700:w-[70%] mg832:w-[60%]"
        >
          <h2 className="text-[#101828] text-center text-2xl font-medium select-none">
            Welcome back!
          </h2>
          <p className="text-center text-sm text-[#828282] select-none">
            Sign in to access your account
          </p>
          <label className="text-[#101828] font-normal text-xs mb-2 select-none">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="w-full rounded-lg border h-9 outline-[#32D583] mb-3 pl-2 pr-7"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-[#101828] font-normal text-xs mb-2 select-none">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              className="w-full rounded-lg border h-9 outline-[#32D583] mb-2 pl-2 pr-7"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <span
                onClick={handleShowPassword}
                className="absolute cursor-pointer right-2 mt-2 text-[#667085] text-lg"
              >
                <AiOutlineEyeInvisible />
              </span>
            ) : (
              <span
                onClick={handleShowPassword}
                className="absolute cursor-pointer right-2 mt-2 text-[#667085] text-lg"
              >
                <AiOutlineEye />
              </span>
            )}
          </div>
          <p className="text-[#32D583] cursor-pointer font-medium text-xs mb-8 select-none">
            Forgot Password?
          </p>
          <p className="text-center text-[red] mb-2 text-xs">{error}</p>
          {success ? (
            <button
              disabled={loading || success}
              className="text-center py-3 text-white bg-[#32D583] w-full rounded-lg select-none flex justify-center cursor-not-allowed"
            >
              <ImCheckmark className="text-white" />
            </button>
          ) : loading ? (
            <button
              disabled={loading}
              className="text-center py-3 text-white bg-[#32D583] w-full rounded-lg select-none flex justify-center"
            >
              <ImSpinner2 className="animate-spin" />
            </button>
          ) : (
            <button
              disabled={loading}
              className="text-center py-2 text-white bg-[#32D583] w-full rounded-lg select-none"
            >
              Sign In
            </button>
          )}
          <p className="text-center my-5 text-[#828282] select-none">OR</p>
          <div className="flex gap-4 justify-center">
            <span className="flex gap-1 border border-[#E6E7EC] border-solid py-2 px-2 rounded-lg text-[#101828] cursor-pointer">
              <p className=" mt-1 mg527:text-base text-sm select-none">
                Sign in with Github
              </p>{" "}
              <BsGithub className=" text-3xl text-black" />
            </span>
            <span className="flex gap-1 border border-[#E6E7EC] border-solid py-2 px-2 rounded-lg text-[#101828] cursor-pointer">
              <p className=" mt-1 mg527:text-base text-sm select-none">
                Sign in with Google
              </p>{" "}
              <FcGoogle className=" text-3xl" />
            </span>
          </div>
          <section className="flex justify-center mt-6">
            <span className="flex gap-1 border border-[#E6E7EC] border-solid py-2 px-2 rounded-lg text-[#101828] justify-center w-[50%] cursor-pointer">
              <p className=" mt-1 mg527:text-base text-sm select-none">
                Sign in with SSO
              </p>{" "}
              <HiOutlineKey className=" text-3xl text-[#32D583]" />
            </span>
          </section>
        </form>
      </section>
      <p className="text-center mt-3 text-xs font-normal text-[#101828]">
        Don’t have an account?{" "}
        <span className="cursor-pointer text-[#12B76A]">Sign Up</span>
      </p>
    </main>
  );
}
