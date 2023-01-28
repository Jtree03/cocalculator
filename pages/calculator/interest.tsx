import Head from "next/head";
import InterestCalculator from "@/containers/InterestCalculator";
import Anvil from "@/components/Anvil";

function InterestCalculatorPage() {
  return (
    <>
      <Head>
        <title>이자 | 계산 사이트</title>
      </Head>
      <InterestCalculator />
      <Anvil />
    </>
  );
}

export default InterestCalculatorPage;
