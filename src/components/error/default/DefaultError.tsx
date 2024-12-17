import React from "react";

const DefaultError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="text-xs text-error pt-1.5">
      <p>{message}</p>
    </div>
  );
};

export default DefaultError;
