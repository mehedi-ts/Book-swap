import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-end ">
        <Image src="/main_logo.png" alt="logo" width={50} height={30} />
        <h1 className="text-3xl font-semibold">
          ook <span className="text-[#2563EB] ">swap</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
