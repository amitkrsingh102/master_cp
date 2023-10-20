import Header from "~/components/Header";
import { problemSet } from "../../utils/ProblemSets";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const Problem_List = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();
  return (
    <main>
      <Header />
      <div className="overflow-x-auto p-1">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-md">
              <th>Sl No.</th>
              <th>Problem ID</th>
              {sessionData?.user && <th>Status</th>}
              <th>Title</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problemSet.map((problem, idx) => (
              <tr key={idx} className="hover">
                <th>{idx + 1}</th>
                <td>{problem.id}</td>
                {sessionData?.user && (
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox-success checkbox"
                    />
                  </td>
                )}
                <td
                  onClick={() => {
                    void router.push(`/problem/${problem.id}`);
                  }}
                  className="cursor-pointer hover:text-zinc-200"
                >
                  {problem.title}
                </td>
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
