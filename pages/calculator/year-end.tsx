import Head from "next/head";
import YearEndCalculator from "@/containers/YearEndCalculator";
import Anvil from "@/components/Anvil";

function YearEndCalculatorPage() {
  return (
    <>
      <Head>
        <title>연말 정산 | 계산 사이트</title>
      </Head>
      <YearEndCalculator />
      <Anvil />
    </>
  );
}

export default YearEndCalculatorPage;
