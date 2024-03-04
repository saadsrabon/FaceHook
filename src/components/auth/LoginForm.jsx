import { useNavigate } from "react-router-dom"
import Field from "../common/Field"

import { useForm } from "react-hook-form"
const LoginForm = () => {
    const navgate = useNavigate()
const {register,handleSubmit,formState:{errors}} = useForm()
const formSubmit = (data) => {
    console.log(data)
   navgate('/')
}
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
    {/* <!-- email --> */}
    <Field label="Email"  error={errors?.email} >
        <input
            {...register("email", { required: "Email is required" }) }
            className={`auth-input ${errors.email ? "border-red-500":"border-gray-200"}`}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
        />
        </Field>
    {/* <!-- password --> */}
    <Field label="Email"  error={errors?.password} >
        <input
            {...register("password", { required: "Password" ,minLength:{
                value:8,
                message:"Password must be at least 8 characters"
            }}
             ) }
            className={`auth-input ${errors.email ? "border-red-500":"border-gray-200"}`}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
        />
        </Field>
    {/* <!-- Submit --> */}
    <Field>
    <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
    >
        Login
    </button>
    </Field>
</form>
  )
}

export default LoginForm