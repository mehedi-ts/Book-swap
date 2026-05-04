"use client";
import Logo from "@/components/ui/Logo";
import { authClient } from "@/lib/auth-client";
import { Check, FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Checkbox,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FiUserPlus } from "react-icons/fi";

const signUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const image = e.target.image.value;
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image,
    });
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="max-w-7xl mx-auto  w-full py-3 md:py-4 lg:py-7 min-h-[75vh] flex items-center justify-center   ">
      <div className=" p-4 border-2 border-gray-200 rounded-2xl shadow-md w-[90%] md:w-2/3 lg:w-1/2">
        <Form className="w-full max-w-full flex" onSubmit={onSubmit}>
          <Fieldset className="">
            <div className="flex flex-col items-center">
              <div className="mb-5">
                <Logo></Logo>
              </div>
              <h1 className="text-2xl md:text-3xl text-center md:text-left font-bold text-gray-800">
                Register Your Account
              </h1>
              <p className="text-sm text-gray-600 text-center max-w-[280px] mt-2">
                Join Book swap and start your reading journey. with thousands of
                books.
              </p>
            </div>
            <FieldGroup className="flex flex-col items-center">
              <TextField
                className="w-full"
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label>Full Name</Label>
                <Input placeholder="Enter your full name" className="w-full" />
                <FieldError />
              </TextField>
              <TextField className="w-full" isRequired name="image">
                <Label>Image Url</Label>
                <Input placeholder="Image url" className="w-full" />
                <FieldError />
              </TextField>
              <TextField
                className="w-full"
                isRequired
                name="email"
                type="email"
              >
                <Label>Email Address</Label>
                <Input
                  placeholder="Enter your email address"
                  className="w-full"
                />
                <FieldError />
              </TextField>
              <TextField
                className="w-full"
                isRequired
                minLength={6}
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
                <Input placeholder="Create a password" className="w-full" />
                <Description>
                  Must be at least 6 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
              </TextField>
            </FieldGroup>
            <div className="flex w-full ">
              <Button
                className="btn w-full bg-[#2563EB] text-[#FFFFFF]"
                type="submit"
              >
                <FiUserPlus />
                Register
              </Button>
            </div>
          </Fieldset>
        </Form>
        <div className="divider my-6">or continue with</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn flex items-center gap-1 bg-white text-black border-[#e5e5e5] w-full"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default signUpPage;
