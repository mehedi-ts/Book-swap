"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { toast } from "react-toastify";

const BorrowBtn = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  return (
    <div>
      <button
        onClick={() => {
          if (!session?.user) {
            toast.warning("Please login first!");
            setTimeout(() => {
              router.push("/login");
            }, 1000);
          } else {
            toast.success("Book borrowed successfully!");
          }
        }}
        className="btn bg-[#2563EB] hover:bg-[#1c58db] text-white"
      >
        {" "}
        Borrow This Book <FaArrowRightLong size={20} />
      </button>
    </div>
  );
};

export default BorrowBtn;
