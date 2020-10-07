import React from "react";
import { ButtonUi } from "./Button.styles";

const Button = React.forwardRef(({ onClick, href, children, ...rest }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <ButtonUi {...rest}>{children}</ButtonUi>
    </a>
  );
});
export default Button;
