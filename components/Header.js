import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full m-5 justify-center items-center">
        <div className="w-1/2">Debuggers Club</div>
        <div className="w-1/2 ">
          <div className="flex gap-4 justify-evenly items-center">
            <div>Courses</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div className="">
              <Link href={"/login"}>
                <button className="mr-4 bg-green-500 text-white font-semibold rounded-md py-3 px-4">
                  Login
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="bg-blue-500 text-white font-semibold rounded-md py-3 px-4">
                  Register
                </button>
              </Link>
            </div>
            {/* <div>Blogs</div> */}
            {/* <div>Discussion</div>
                <div>Code Editor</div> */}
            {/* <div>
                 <p>pic</p> 
                 <select className=''>
                    <option>Profile</option>
                    <option>Logout</option>
                 </select>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
