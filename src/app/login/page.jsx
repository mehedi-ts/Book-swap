"use client";
import Logo from "@/components/ui/Logo";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto  w-full py-10 min-h-[90vh] flex items-center justify-center   ">
      <Card className="w-2/4 shadow-2xl mx-auto">
        <div className="flex items-center justify-center flex-col space-y-2">
          <p className="text-2xl font-bold text-gray-800">Welcome Back!</p>
          <p className="text-sm text-gray-500">
            Login to continue exploring and sharing your favorite books.
          </p>
        </div>
        <Form onSubmit={onSubmit}>
          <Card.Content>
            <div className="flex flex-col gap-4">
              <TextField name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="email@example.com" variant="secondary" />
              </TextField>
              <TextField name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="••••••••" variant="secondary" />
              </TextField>
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

export default LoginPage;
