import { createContext, useContext, useState } from "react";
import { problemSet } from "../utils/ProblemSets";

type ExampleType = {
  id: number;
  input: string;
  output: string;
};

type RunResultType = {
  output: string;
};
export type TestCaseType = {
  input: string;
  output: string;
};
export type ProblemType = {
  id: number;
  difficulty: string;
  title: string;
  description: string;
  examples: ExampleType[];
  constraints: string[];
  expectedRunOutputs: RunResultType;
  testCases: TestCaseType[];
  inputFormat: string;
};

export const createProblemContext = (InitialProblem: ProblemType) => {
  const ProblemContext = createContext<ProblemType | null>(null);

  const ProblemContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <ProblemContext.Provider value={InitialProblem}>
        {children}
      </ProblemContext.Provider>
    );
  };

  const useProblemData = (): [ProblemType, (id: number) => void] => {
    const store = useContext(ProblemContext);
    if (!store) throw new Error("No Problem found");

    const [state, stateSet] = useState(store);

    const setState = (id: number) => {
      const prob = problemSet.filter((f) => f.id === id)[0];
      if (prob) {
        stateSet(prob);
      }
    };
    return [state, setState];
  };

  return { ProblemContextProvider, useProblemData };
};
