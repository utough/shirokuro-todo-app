import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-black text-white">Header</div>
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
