"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";

const signUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.imageUrl.value;
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      imageUrl,
    });
  };
  return (
    <div className="max-w-7xl mx-auto  w-full py-10 min-h-[75vh] flex items-center justify-center   ">
      <Card className="w-2/4 shadow-2xl mx-auto">
        <div className="flex items-center justify-center flex-col space-y-2">
          <p className="text-2xl font-bold text-gray-800">
            Create Your Account
          </p>
          <p className="text-sm text-gray-500">
            Join BookSwap and start your reading journey today
          </p>
        </div>
        <Form onSubmit={onSubmit}>
          <Card.Content>
            <div className="flex flex-col gap-4">
              <TextField name="name" type="text" className="w-full">
                <Label>Name</Label>
                <Input
                  placeholder="Jone dho"
                  variant="secondary"
                  className="w-full"
                  name="name"
                />
              </TextField>
              <TextField name="imageUrl" type="text">
                <Label>Image Url</Label>
                <Input
                  placeholder="Your image url"
                  variant="secondary"
                  className="w-full"
                  name="imageUrl"
                />
              </TextField>
              <TextField name="email" type="email">
                <Label>Email</Label>
                <Input
                  placeholder="email@example.com"
                  variant="secondary"
                  className="w-full"
                  name="email"
                />
              </TextField>
              <TextField name="password" type="password">
                <Label>Password</Label>
                <Input
                  placeholder="••••••••"
                  variant="secondary"
                  className="w-full"
                  name="password"
                />
              </TextField>
              <Checkbox id="basic-terms">
                <Checkbox.Control className="border border-gray-300">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label htmlFor="basic-terms">
                    Accept terms and conditions
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </div>
          </Card.Content>
          <Card.Footer className="mt-4 flex flex-col gap-2">
            <Button
              className="bg-[#2563EB] hover:bg-[#1c58db] w-full rounded-lg font-semibold text-white mt-5"
              type="submit"
            >
              Sign In
            </Button>
            <Link className="text-center text-sm" href="#">
              Forgot password?
            </Link>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default signUpPage;
