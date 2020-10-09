import React from "react";
import { HeaderWrapper } from "./Header.styles";
import Link from "next/link";
import Button from "../common/Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/" passHref>
        <Button padding={5} margin={"5px"}>
          Home
        </Button>
      </Link>
      <Link href="/movies" passHref>
        <Button padding={5} margin={"10px"}>
          Movies
        </Button>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
