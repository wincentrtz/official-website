import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (ref, handleCloseModal) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

const OutsideAlerter = ({ children, handleCloseModal }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleCloseModal);
  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
