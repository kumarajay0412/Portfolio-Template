import React from "react";

function Footer() {
  return (
    <div className="pt-8  max-w-3xl w-full h-fit ">
      <div className="flex flex-col gap-2  justify-center w-full items-center">
        <img
          src="https://i.imgur.com/q56UHbJ.png"
          alt="logo"
          className="w-14 h-14  rounded-full grayscale cursor-pointer"
        />
        <div>© 2024 - Ajay Kumar</div>
      </div>
    </div>
  );
}

export default Footer;
