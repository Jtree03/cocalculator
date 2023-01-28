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

function PyeongCalculator() {
  const [input, setInput] = useState(0);
  const [supply, setSupply] = useState(0);

  const meter = toMeter(input);
  const pyeong = toPyeong(input);

  return (
    <Container xs>
      <Text h2>평 계산기</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Input
            label="숫자 입력"
            type="number"
            onChange={(e) => setInput(+e.target.value)}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            label="공급 면적(옵션)"
            type="number"
            onChange={(e) => setSupply(+e.target.value)}
          />
        </Grid>
        <Divider y={2} />
        <Grid xs={6}>
          <Input
            readOnly
            label="평 -> m²"
            status="primary"
            value={`${meter.toLocaleString()}m²`}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            readOnly
            label="m² -> 평"
            status="secondary"
            value={`${pyeong.toLocaleString()}평`}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            readOnly
            label="전용률"
            status="success"
            value={`${calculatePercent(input, supply).toFixed(0)}%`}
          />
        </Grid>
        <Grid xs={6}></Grid>
      </Grid.Container>
      <Spacer y={1} />
    </Container>
  );
}

export default PyeongCalculator;
