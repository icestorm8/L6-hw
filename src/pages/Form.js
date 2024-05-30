import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/Context";

export default function Form() {
  const { setName } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { isSubmitSuccessful },
    formState: { errors },
    getValues,
  } = useForm();

  const onSub = (data) => {
    setName(data.name);
    console.log(data);
  };
  const resetPage = () => {
    reset({
      name: "",
      email: "",
      email2: "",
      password: "",
    });
    setName("");
  };
  return (
    <div className="container">
      <h1>Form signup</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">
        <label>Name:</label>
        <input
          {...register("name", {
            required: true,
            minLength: 2,
            pattern: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
          })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">
            * Enter valid name (min 2 chars), only characters and spaces (no
            double or unnecessary spaces)
          </div>
        )}
        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && <div className="text-danger">* Enter valid Email</div>}
        <label>Email again:</label>
        <input
          {...register("email2", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            validate: (val) => val == getValues("email"),
          })}
          type="text"
          className="form-control"
        />
        {errors.email2 && (
          <div className="text-danger">* Emails don't match</div>
        )}
        <label>Password:</label>

        <input
          {...register("password", { required: true, minLength: 6 })}
          type={showPassword ? "text" : "password"}
          className="form-control"
        />
        <div>
          {" "}
          <input
            className="checkbox"
            id="check"
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
          />
          <label for="check" className="m-1">
            Show Password
          </label>
        </div>

        {errors.password && (
          <div className="text-danger">
            * Enter valid password (min 6 chars)
          </div>
        )}

        <button className="btn btn-info mt-4  ">Send</button>
        <button
          className="btn btn-danger mt-4"
          type="button"
          onClick={resetPage}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
