import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} width="100px" height="80px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
