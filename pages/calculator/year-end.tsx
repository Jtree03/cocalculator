import Head from "next/head";
import YearEndCalculator from "@/containers/YearEndCalculator";

function YearEndCalculatorPage() {
  return (
    <>
      <Head>
        <title>연말 정산 | 계산 사이트</title>
      </Head>
      <YearEndCalculator />
    </>
  );
}

export default YearEndCalculatorPage;
