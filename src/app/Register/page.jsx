"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const Registrpage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelregisterfunction = async (data) => {
        const { email, name, password, photo } = data
        console.log(data)


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error)
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("successfully sing-in")
        }
    }

    const handleregestergoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data)
    }
    console.log(errors)
    return (
        <div className='flex justify-center items-center mt-10'>
            <form onSubmit={handleSubmit(handelregisterfunction)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend"></legend>
                    <h1 className='text-2xl text-center'>Sing-in</h1>

                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: "name field is requird" })} className="input" placeholder="Email" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <label className="label">photo url</label>
                    <input type="text" {...register("photo", { required: "email field is requird" })} className="input" placeholder="Email" />
                    {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: "email field is requird" })} className="input" placeholder="Email" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: "password field is requird" })} className="input" placeholder="Password" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">sing-in</button>
                    <Link href={"/sing-up"} >if your not logd in then/<span className='text-blue-500 '>login</span></Link>
                    <div className='flex justify-center items-center bg-slate-100 mt-3'>
                        <img src='https://yt3.googleusercontent.com/bAseQlKvNmjdLQrvYWm_q3QDp8C8YKyYI-nYJewgOkPi0JU1_3X9oFgjrEdzkOlXzLGFxFbnsw=s900-c-k-c0x00ffffff-no-rj' className='w-[30px] h-[30px]' />
                        <button onClick={handleregestergoogle} className='text-center text-2xl'>sing up with google</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};


export default Registrpage;