import React from "react";

export default function Alert({ alertText }) {
  return (
    <div class="alert alert-success" role="alert">
      {alertText}
    </div>
  );
}
