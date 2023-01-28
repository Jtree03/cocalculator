import { Container, Navbar, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function MyNavbar() {
  const router = useRouter();

  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="/">
          <Container display="flex">
            <Image width={30} height={30} alt="logo" src={"/calculator.png"} />
            <Spacer x={0.5} />
            <Text b>계산 사이트</Text>
          </Container>
        </Link>
      </Navbar.Brand>
      <Navbar.Content gap={30}>
        <Navbar.Link target="_blank" href="mailto:wowns0903@gmail.com">
          <AiOutlineMail size={28} />
        </Navbar.Link>
        <Navbar.Link
          target="_blank"
          href="https://github.com/jtree03/cocalculator"
        >
          <BsGithub size={25} />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default MyNavbar;
