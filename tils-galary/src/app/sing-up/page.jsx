"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Singuppage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelfunction = async (data) => {

        console.log(data)

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        console.log(res, error)
    }

    const handlegoogle =async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    }
    console.log(errors)
    return (
        <div className='flex justify-center items-center mt-10'>
            <form onSubmit={handleSubmit(handelfunction)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend"></legend>
                    <h1 className='text-2xl text-center'>Login</h1>

                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: "email field is requird" })} className="input" placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: "password field is requird" })} className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Login</button>
                    <Link href={"/Register"} >if your not logd in then/<span className='text-blue-500 '>register</span></Link>
                    <div className='flex justify-center items-center bg-slate-100 mt-7'>
                        <img src='https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj' className='w-[30px] h-[30px]' />
                        <button onClick={handlegoogle} className='text-center text-2xl'>sing in with google</button>
                    </div>
                </fieldset>

            </form>

        </div>
    );
};

export default Singuppage;