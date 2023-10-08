import Header from "~/components/Header";
import Playground from "~/components/Playground";
import Problem from "~/components/Problem";

const ProblemPage = () => {
  return (
    <main>
      <Header />
      <div className="flex">
        <Problem />
        <div className="divider lg:divider-horizontal"></div>
        <Playground />
      </div>
    </main>
  );
};

export default ProblemPage;
