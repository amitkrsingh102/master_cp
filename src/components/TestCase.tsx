import React, { useEffect, useState } from "react";
import { useEditorStore } from "~/pages/_app";
import { api } from "~/utils/api";

type TestCaseProps = {
  coeff: number;
  input: string;
  output: string;
};

const TestCase = ({ input, output, coeff }: TestCaseProps) => {
  const [editorLanguage] = useEditorStore();
  const [resultOutput, resultOutputSet] = useState("");
  const [error, errorSet] = useState("");

  const runCode = api.compile.getOutput.useQuery(
    {
      code: editorLanguage.code,
      language: editorLanguage.langCode,
      input: input,
    },
    { enabled: false },
  );

  const handleCodeRun = async () => {
    await runCode.refetch().then((res) => {
      try {
        if (!res.data?.error && !res.data?.output) {
          resultOutputSet("");
          errorSet("Invalid Inputs");
        } else if (res.data?.error) {
          resultOutputSet("");
          errorSet(res.data.error);
        } else if (res.data?.output) {
          errorSet("");
          resultOutputSet(res.data.output);
        }
      } catch (err) {
        errorSet('compilation terminated : "syntax error"');
      }
    });
  };

  useEffect(() => {
    void handleCodeRun();
    return () => void handleCodeRun();
  }, [coeff]);

  return (
    <div className="rounded-md">
      {runCode.isRefetching || runCode.isFetching ? (
        <div className="flex flex-col items-center justify-center p-2">
          <span>Loading</span>
          <span className="loading loading-spinner loading-md" />
        </div>
      ) : (
        <div
          className={`flex flex-col ${
            error || output !== resultOutput ? "bg-red-700" : "bg-green-700"
          } rounded-md p-2`}
        >
          <span>
            {error ? error : output === resultOutput ? "Passed" : "Failed"}
          </span>
          <span>Expected: {output}</span>
          <span>Result: {resultOutput}</span>
        </div>
      )}
    </div>
  );
};

export default TestCase;
