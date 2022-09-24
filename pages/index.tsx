import type { NextPage } from "next";

import { totalCalculator, dummyData as averageDummy } from "./fuctions/average";
import { ascendingSort, dummyData as sortDummy } from "./fuctions/sort";

const Home: NextPage = () => {
  const averaged = totalCalculator(averageDummy);
  const sorted = ascendingSort(sortDummy);

  return (
    <>
      <p>emotion</p>
      <pre suppressHydrationWarning={true}>
        {JSON.stringify(averaged, null, "\t")}
      </pre>

      <br />

      <p>sorted</p>
      <pre suppressHydrationWarning={true}>
        {JSON.stringify(sorted, null, "\t")}
      </pre>
    </>
  );
};

export default Home;
