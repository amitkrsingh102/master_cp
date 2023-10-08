import Header from "~/components/Header";
import { problemSet } from "../../components/ProblemSets";
const Problem_List = () => {
  return (
    <main>
      <Header />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-md">
              <th>Sl No.</th>
              <th>Problem ID</th>
              <th>Status</th>
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problemSet.map((problem, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{problem.id}</td>
                <td>DONE</td>
                <td>{problem.title}</td>
                <td
                  className={`${
                    problem.difficulty === "easy"
                      ? "text-green-600"
                      : problem.difficulty === "medium"
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                >
                  {problem.difficulty.toLocaleUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Problem_List;
