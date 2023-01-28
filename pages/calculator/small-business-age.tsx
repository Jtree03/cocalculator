import Head from "next/head";
import SmallBusinessAgeCalculator from "@/containers/SmallBusinessAgeCalculator";

function SmallBusinessAgeCalculatorPage() {
  return (
    <>
      <Head>
        <title>중소기업 소득세 감면 연령 | 계산 사이트</title>
      </Head>
      <SmallBusinessAgeCalculator />
    </>
  );
}

export default SmallBusinessAgeCalculatorPage;
