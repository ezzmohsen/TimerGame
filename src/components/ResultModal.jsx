import React, { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
const resultModal = forwardRef(function ResultModal(
  { targetTime, result },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}!</h2>
      <p>
        the target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default resultModal;
