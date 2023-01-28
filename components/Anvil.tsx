import { Container, Text } from "@nextui-org/react";

function Anvil() {
  return (
    <Container
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffffaa",
      }}
    >
      <Text h1>준비중...</Text>
    </Container>
  );
}

export default Anvil;
