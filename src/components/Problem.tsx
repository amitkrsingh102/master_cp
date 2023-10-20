import Link from "next/link";
import { type ProblemType } from "../hooks/ProblemContext";
import { BiArrowBack } from "react-icons/bi";

const Problem = ({ problem }: { problem: ProblemType }) => {
  const difficulty =
    problem.difficulty === "easy"
      ? "border-green-600 p-2 text-center text-green-600"
      : problem.difficulty === "medium"
      ? "border-yellow-500 p-2 text-center text-yellow-500"
      : "border-red-600 p-2 text-center text-red-600";

  return (
    <div className="flex min-h-[calc(91vh)] w-1/3 flex-col gap-2 p-5">
      {/* Name of Problem */}
      <div className="flex items-center p-2">
        <span className="text-5xl">{problem.title}</span>
        <Link
          href={"/problem-list"}
          className="btn btn-ghost ml-auto flex items-center justify-center rounded-full"
        >
          <BiArrowBack fontSize={"1.5rem"} />
        </Link>
      </div>
      <div
        className={`rounded-lg border  border-green-600 p-2 text-center text-green-600 ${difficulty} mr-auto`}
      >
        {problem.difficulty.toLocaleUpperCase()}
      </div>
      {/* Problem description */}
      <div className="flex flex-col gap-1">
        <div className="underline">Problem statement :-</div>
        <p className="whitespace-break-spaces">{problem.description}</p>
      </div>
      {/* examples */}
      <div className="mt-10 flex flex-col gap-2">
        <div className="underline">Examples :- </div>
        {problem.examples.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 rounded-md bg-gray-950 p-2"
          >
            <div>{`Example ${item.id} `}</div>
            <div>Input : {item.input}</div>
            <div>Output : {item.output}</div>
          </div>
        ))}
      </div>
      {/* Input format */}
      <div className="flex flex-col gap-1 rounded-md bg-gray-700 p-2">
        <div>Input Format :-</div>
        <div>{problem.inputFormat}</div>
      </div>
      {/* constraints */}
      <div className="mt-10 flex flex-col gap-1">
        <div className="underline">Constraints :- </div>
        <ul className="flex flex-col gap-2 rounded-md bg-gray-900 p-2 text-gray-400">
          {problem.constraints.map((item, idx) => (
            <li key={idx}># {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Problem;
