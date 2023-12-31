import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-[100vh] bg-center bg-cover">
      <Header />
      <div className="flex items-center justify-center h-[60%] max-w-[500px] m-auto px-4 py-4">

    
      <form className="flex flex-col gap-2 bg-black bg-opacity-75 w-full px-10 py-4 pb-20">
        <div className="p-3">
            <h2>Sign in</h2>
        </div>
        <input type="text" placeholder="Email Address" className="p-3 m-2" />
        <input type="password" placeholder="Enter Password" className="p-3 m-2" />
        <button className="p-3 m-2 bg-red-700">Signin</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
