import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-end ">
      <Image src="/main_logo.png" alt="logo" width={50} height={30} />
      <h1 className="text-3xl font-semibold">
        ook <span className="text-[#2563EB] ">swap</span>
      </h1>
    </div>
  );
};

export default Logo;
