import { useState } from "react";
import {
  Container,
  Divider,
  Grid,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import { calculatePercent, toMeter, toPyeong } from "@/services/pyeong";

function InterestCalculator() {
  return (
    <Container xs>
      <Text h2>이자 계산기</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Input
            label="대출 금액"
            labelRight={<span style={{ whiteSpace: "nowrap" }}>만원</span>}
            type="number"
          />
        </Grid>
        <Grid xs={6}>
          <Input label="연 금리" labelRight="%" type="number" />
        </Grid>
        <Grid xs={6}>
          <Input
            label="대출 기간"
            labelRight={<span style={{ whiteSpace: "nowrap" }}>개월</span>}
            type="number"
          />
        </Grid>
        <Grid xs={6}></Grid>
        <Divider y={2} />
      </Grid.Container>
      <Text h3>대출이자</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Input readOnly label="원리금균등" status="primary" />
        </Grid>
        <Grid xs={4}>
          <Input readOnly label="원금균등" status="secondary" />
        </Grid>
        <Grid xs={4}>
          <Input readOnly label="만기일시" status="success" />
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs={6}></Grid>
      </Grid.Container>
      <Spacer y={1} />
    </Container>
  );
}

export default InterestCalculator;
