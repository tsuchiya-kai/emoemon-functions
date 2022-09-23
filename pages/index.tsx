import type { NextPage } from "next";

import { totalCalculator, dummyData } from "./fuctions/average";

const Home: NextPage = () => {
  const emotion = totalCalculator(dummyData);

  return (
    <>
      <p>emotion</p>
      <pre suppressHydrationWarning={true}>
        {JSON.stringify(emotion, null, "\t")}
      </pre>
    </>
  );
};

export default Home;
