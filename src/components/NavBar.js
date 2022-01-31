import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksAs = links.map((link) => (
    <a key={link} href={"#" + link}>{link}</a>
  ));


  return <nav>{linksAs}</nav>;
}

export default NavBar;
