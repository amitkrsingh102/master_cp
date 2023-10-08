import Header from "~/components/Header";
import Playground from "~/components/Playground";
import Problem from "~/components/Problem";
import { useProblemData } from "../_app";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProblemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentProblem, currentProblemSet] = useProblemData();

  useEffect(() => {
    currentProblemSet(parseInt(id as string));
  }, [id, currentProblemSet]);
  return (
    <main>
      <Header />
      <div className="flex">
        <Problem problem={currentProblem} />
        <div className="divider lg:divider-horizontal"></div>
        <Playground currentProblem={currentProblem} />
      </div>
    </main>
  );
};

export default ProblemPage;
