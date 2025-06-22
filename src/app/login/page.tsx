import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center bg-gray-50">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 bg-white">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image
            src="/assets/loginBg.png"
            alt="Login Background"
            fill
            className="object-cover"
          />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col justify-center gap-6 md:w-1/2">
          <h1 className="font-bold text-2xl xl:text-3xl text-gray-800">Welcome</h1>
          <p className="text-gray-600">
            Log into your account or create a new one using social buttons
          </p>

          <button className="flex items-center gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-orange-50 transition">
            <Image
              src="/assets/google.png"
              alt="Google"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
          </button>

          <button className="flex items-center gap-4 p-4 ring-1 ring-blue-100 rounded-md hover:bg-blue-50 transition">
            <Image
              src="/assets/facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-sm font-medium text-gray-700">Sign in with Facebook</span>
          </button>

          <p className="text-sm  text-gray-500">
            Have a problem?
            <Link href="/" className="text-red-600 underline ">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
