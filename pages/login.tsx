import React from "react";
import Head from "next/head";
import Link from "next/link";

const login = () => {
  return (
    <>
      <div className="flex bg-[#fff] my-5 mx-auto  h-[800px] justify-center  items-center">
        <div>
          <h2 className="text-xl  font-bold">Login</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>

            <input
              className="btn mt-5 w-full max-w-xs btn-accent"
              value="Login"
              type="submit"
            />

            <label className="label">
              <span className="label-text">
                New to doctors portal!{" "}
                <Link href="/signUp" className="text-secondary">
                  Create New Account.
                </Link>
              </span>
            </label>
            <div className="divider">OR</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
