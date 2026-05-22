"use client"
import { Card, Separator } from '@heroui/react';
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { date } from 'better-auth';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,

        })
        console.log({ data, error });
        if (data) {
            redirect("/");
        }
        if (error) {
            alert("Error creating account: " + error.message);
        }
    }

    //Google Signin Function
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    }

    return (
        <div className='max-w-3xl mx-auto mt-10 mb-10 flex flex-col gap-5 justify-center items-center'>
            <div className='text-center my-3'>
                <h1 className=' text-4xl font-bold'>Login</h1>
                <p className='text-lg text-gray-600'>Start your adventure with Wanderlust</p>
            </div>
            <Card className='border rounded-none'>
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className={"w-full bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-3 rounded-full font-semibold"}>
                            Login
                        </Button>
                    </div>
                    <div className=' flex justify-center items-center gap-3'>
                        <Separator />
                        <div className=' whitespace-nowrap'>Or Sign Up With</div>
                        <Separator />
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={handleGoogleSignIn} variant='outline' className={"rounded-full w-full border-[#ff6b6b] hover:bg-[#e78c8c] "}><FcGoogle />
                            Sign Up With Google
                        </Button>
                    </div>
                    <div className='flex items-center justify-center'>
                        
                        <Link href={"/signup"}><p>Already have an account?<span className=' text-cyan-500 hover:text-red-500 transition-colors duration-300 '>Sign up</span></p></Link>
                    
                    </div>

                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;