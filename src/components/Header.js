import React from "react";
import { HeaderWrapper } from "./Header.styles";
import Link from "next/link";
import Button from "../components/common/Button";

function Header() {
  return (
    <HeaderWrapper>
      <Link href="/">
        <Button padding={5} margin={"5px"}>
          Home
        </Button>
      </Link>
      <Link href="/movies">
        <Button padding={5} margin={"10px"}>
          Movies
        </Button>
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
