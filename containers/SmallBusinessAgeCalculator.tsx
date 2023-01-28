import { Container, Divider, Grid, Input, Text } from "@nextui-org/react";
import Anvil from "@/components/Anvil";

function SmallBusinessAgeCalculator() {
  return (
    <Container xs style={{ position: "relative" }}>
      <Text h2>중소기업 취업자 연령 계산 - 소득세 감면</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}>
          <Input label="생년월일" type="date" />
        </Grid>
        <Grid xs={6}>
          <Input label="취업일" type="date" />
        </Grid>
        <Grid xs={6}>
          <Input label="입대일" type="date" />
        </Grid>
        <Grid xs={6}>
          <Input label="전역일" type="date" />
        </Grid>
        <Divider y={2} />
        <Grid xs={6}>
          <Input readOnly label="중소기업에 취업한 날 연령" status="primary" />
        </Grid>
        <Grid xs={6}>
          <Input readOnly label="병역 근무 기간 (청년)" status="secondary" />
        </Grid>
        <Grid xs={6}>
          <Input
            readOnly
            label="병역근무기간 차감 후 연령 (청년)"
            status="success"
          />
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs={6}>
          <Input readOnly label="감면기간 시작일" status="warning" />
        </Grid>
        <Grid xs={6}>
          <Input readOnly label="감면기간 종료일" status="error" />
        </Grid>
      </Grid.Container>
      <Divider y={2} />
      <Anvil />
    </Container>
  );
}

export default SmallBusinessAgeCalculator;
