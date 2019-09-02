import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, handleCloseModal) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handleCloseModal();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

const OutsideAlerter = ({ children, handleCloseModal }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleCloseModal);
  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
