import { useMemo, useState } from "react";
import { Container, Divider, Grid, Input, Text } from "@nextui-org/react";
import { calcuateAge, calcuateZodiac } from "@/services/date";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const fullAge = useMemo(
    () => (birthdate ? calcuateAge(new Date(), birthdate, true) : 0),
    [birthdate]
  );
  const completeAge = useMemo(
    () => (birthdate ? calcuateAge(new Date(), birthdate) : 0),
    [birthdate]
  );
  const zodiac = useMemo(
    () => (birthdate ? calcuateZodiac(birthdate.getFullYear()) : ""),
    [birthdate]
  );

  return (
    <Container xs>
      <Text h2>나이 계산기</Text>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12}>
          <Input
            label="생년월일"
            type="date"
            onChange={(e) => setBirthdate(new Date(e.target.value))}
          />
        </Grid>
        <Divider y={2} />
        <Grid xs={6}>
          <Input
            readOnly
            label="만나이"
            status="primary"
            value={fullAge || 0}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            readOnly
            label="세는나이"
            status="secondary"
            value={completeAge || 0}
          />
        </Grid>
        <Grid xs={6}>
          <Input readOnly label="띠" status="success" value={`${zodiac}띠`} />
        </Grid>
        <Grid xs={6}></Grid>
      </Grid.Container>
      <Divider y={2} />
    </Container>
  );
}

export default AgeCalculator;
