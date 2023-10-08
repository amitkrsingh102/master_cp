import { problems } from "./ProblemSets";
const Problem = () => {
  const difficulty =
    problems.difficulty === "easy"
      ? "border-green-600 p-2 text-center text-green-600"
      : problems.difficulty === "medium"
      ? "border-yellow-500 p-2 text-center text-yellow-500"
      : "border-red-600 p-2 text-center text-red-600";
  //   const problems = problemSet[5];
  return (
    <div className="flex min-h-[calc(91vh)] w-1/3 flex-col gap-2 p-5">
      {/* Name of Problem */}
      <div className="p-2 text-5xl">{problems.title}</div>
      <span
        className={`w-1/6 rounded-lg border  border-green-600 p-2 text-center text-green-600 ${difficulty}`}
      >
        {problems.difficulty.toLocaleUpperCase()}
      </span>
      {/* Problem description */}
      <div className="flex flex-col gap-1">
        <div className="underline">Problem statement :-</div>
        <p className="whitespace-break-spaces">{problems.description}</p>
      </div>
      {/* examples */}
      <div className="mt-10 flex flex-col gap-2">
        <div className="underline">Examples :- </div>
        {problems.examples.map((item) => (
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
      {/* constraints */}
      <div className="mt-10 flex flex-col gap-1">
        <div className="underline">Constraints :- </div>
        <ul className="flex flex-col gap-2 rounded-md bg-gray-900 p-2 text-gray-400">
          {problems.constraints.map((item, idx) => (
            <li key={idx}># {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Problem;
