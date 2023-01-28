import Head from "next/head";
import AgeCalculator from "@/containers/AgeCalculator";

function AgeCalculatorPage() {
  return (
    <>
      <Head>
        <title>나이 | 계산 사이트</title>
      </Head>
      <AgeCalculator />
    </>
  );
}

export default AgeCalculatorPage;
