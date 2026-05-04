"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Page = () => {
  const route = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    try {
      const res = await authClient.updateUser({ name, image });

      if (res?.error) {
        toast.error(res.error.message || "Update failed!");
        return;
      }

      toast.success("Profile updated successfully!");
      route.push("/profile");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };
  return (
    <div className="max-w-7xl mx-auto w-full min-h-[80vh]  flex items-center justify-center py-8">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 border-2 w-full mx-2 md:w-1/2 lg:w-1/3 px-3 shadow-xl rounded-xl py-1 md:py-3 lg:py-5 border-gray-200"
      >
        <TextField className="w-full" name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" className="w-full" />
        </TextField>
        <TextField className="w-full" name="image" type="url">
          <Label>Image</Label>
          <Input
            placeholder="Enter your image url"
            type="url"
            className="w-full"
          />
        </TextField>

        <Button
          type="submit"
          className="bg-[#2563EB]  text-[#FFFFFF] w-full"
          slot="close"
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default Page;
