import Link from "next/link";
import React from "react";

const signUp = (props) => {
  return (
    <div className="flex bg-[#fff] mx-auto my-5 h-[800px] justify-center  items-center">
      <div>
        <h2 className="text-xl  font-bold">Sign Up</h2>
        <form>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Type your name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <label className="label">
            <span className="label-text">Forgot Password?</span>
          </label>

          <input
            className="btn mt-5 w-full max-w-xs btn-accent"
            value="Sign Up"
            type="submit"
          />
          <label className="label">
            <span className="label-text">
              Already have an accoutn!{" "}
              <Link href="/login" className="text-secondary">
                Login here.
              </Link>
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default signUp;
