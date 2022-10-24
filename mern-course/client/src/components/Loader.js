import React from "react";

const Loader = () => {
  return (
    <div class="progress" style={{display: 'flex', justifyContent: 'center', paddingTop: '2rem'}}>
      <div class="indeterminate"></div>
    </div>
  );
};

export default Loader;
