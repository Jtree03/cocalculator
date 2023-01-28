import { ReactNode } from "react";
import { Container, Spacer } from "@nextui-org/react";
import Badges from "./Badges";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Spacer y={1} />
      <Badges />
      <Spacer y={1} />
      <Container display="flex" alignItems="center" justify="center">
        {children}
      </Container>
    </>
  );
}

export default Layout;
