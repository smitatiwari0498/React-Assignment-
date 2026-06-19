import { useEffect, useState } from "react";

const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="scroll-mt-20">
      <h1 className="text-3xl font-semibold text-center bg-black text-white py-3">
        {title}
      </h1>
      <div className="p-4 space-y-4">{children}</div>
    </div>
  );
};

export default Section