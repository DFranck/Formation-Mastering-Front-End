import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/*Les images importée depuis la balise IMG sont accessibles dans "public" ATTENTION AU CHEMIN */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
