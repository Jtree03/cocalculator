import { Container, Navbar, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <Navbar.Content>
        <Link href="/calculator/age" passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname === "/calculator/age"}>
            나이 계산기
          </Navbar.Link>
        </Link>
        <Link href="/calculator/pyeong" passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname === "/calculator/pyeong"}>
            평 계산기
          </Navbar.Link>
        </Link>
        <Link href="/calculator/interest" passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname === "/calculator/interest"}>
            이자 계산기
          </Navbar.Link>
        </Link>
        <Link href="/calculator/small-business-age" passHref legacyBehavior>
          <Navbar.Link
            isActive={router.pathname === "/calculator/small-business-age"}
          >
            중소기업 취업자 연령
          </Navbar.Link>
        </Link>
        <Link href="/calculator/year-end" passHref legacyBehavior>
          <Navbar.Link isActive={router.pathname === "/calculator/year-end"}>
            연말 정산 예상 세액
          </Navbar.Link>
        </Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default MyNavbar;
