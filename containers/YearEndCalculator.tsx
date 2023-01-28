import {
  Container,
  Divider,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import Anvil from "@/components/Anvil";

function YearEndCalculator() {
  return (
    <Container xs style={{ position: "relative" }}>
      <Text h2>연말정산 세액 계산</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Input label="총 급여" type="number" />
        </Grid>
        <Grid xs={6}></Grid>
        <Divider y={2} />
        <Grid xs={6}></Grid>
        <Grid xs={6}></Grid>
        <Grid xs={6}></Grid>
        <Grid xs={6}></Grid>
      </Grid.Container>
      <Spacer y={1} />
      <Anvil />
    </Container>
  );
}

export default YearEndCalculator;
