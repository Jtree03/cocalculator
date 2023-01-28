import Head from "next/head";
import InterestCalculator from "@/containers/InterestCalculator";

function InterestCalculatorPage() {
  return (
    <>
      <Head>
        <title>이자 | 계산 사이트</title>
      </Head>
      <InterestCalculator />
    </>
  );
}

export default InterestCalculatorPage;
