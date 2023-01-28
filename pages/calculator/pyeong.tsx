import Head from "next/head";
import PyeongCalculator from "@/containers/PyeongCalculator";

function PyeongCalculatorPage() {
  return (
    <>
      <Head>
        <title>평 | 계산 사이트</title>
      </Head>
      <PyeongCalculator />
    </>
  );
}

export default PyeongCalculatorPage;
