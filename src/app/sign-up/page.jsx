"use client";
import { signUp } from "@/lib/auth-client";
import React from 'react';

const Signup = () => {


    const onSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            
        });



        if (error) {
            console.log("SIGNUP ERROR:", error);
            return;
        }

        console.log("SIGNUP SUCCESS:", resData);

        console.log("User created:", resData.user);
    };
    return (



        <form onSubmit={onSubmit}>
            <div className="flex justify-center items-center h-screen">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Try for Sign Up</legend>

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />


                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </div>
        </form>
    );
};

export default Signup;