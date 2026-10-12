
"use client";

import { signIn } from "@/lib/auth-client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Email/password sign in
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        if (error) {
            console.log("SIGNIN ERROR:", error);
            return;
        }

        console.log("SIGNIN SUCCESS:", resData);
        console.log("User signed in:", resData.user);
    };

    // Google sign in
    const handleGoogleSignIn = async () => {
        const { data, error } = await signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            console.log("GOOGLE SIGNIN ERROR:", error);
            return;
        }

        console.log("GOOGLE SIGNIN SUCCESS:", data);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">
                        Please Sign In
                    </legend>

                    {/* Email */}
                    <label className="label">Email</label>

                    <input
                        type="email"
                        name="email"
                        className="input w-full"
                        placeholder="Email"
                        required
                    />

                    {/* Password */}
                    <label className="label">Password</label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="input w-full pr-10"
                            placeholder="Password"
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword((prev) => !prev)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <FiEyeOff size={20} />
                            ) : (
                                <FiEye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Email/Password Sign In */}
                    <button
                        type="submit"
                        className="btn bg-red-500 text-white hover:bg-red-600 mt-4"
                    >
                        Sign In
                    </button>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn bg-blue-500 text-white hover:bg-blue-600 mt-4"
                    >
                        Sign In with Google
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Signin;

