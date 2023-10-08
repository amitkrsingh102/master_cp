import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { Languages } from "~/utils/StarterCode";
import { useEditorStore } from "~/pages/_app";
import { useState } from "react";
import { api } from "~/utils/api";

const Playground = () => {
  const [editorLanguage, editorLanguageSet] = useEditorStore();
  const [input, inputSet] = useState("");
  const [output, outputSet] = useState("");
  const [error, errorSet] = useState("");

  const getOutput = api.compile.getOutput.useQuery(
    {
      code: editorLanguage.code,
      language: editorLanguage.langCode,
      input: input,
    },
    { enabled: false },
  );

  const handleCodeRun = async () => {
    await getOutput.refetch().then((res) => {
      try {
        if (res.data?.error) {
          outputSet("");
          errorSet(res.data.error);
        } else {
          errorSet("");
          outputSet(res.data!.output);
        }
      } catch (err) {
        errorSet('compilation terminated : "syntax error"');
      }
    });
  };

  return (
    <div className="md:w-2/3">
      <nav className="flex p-1">
        <div className="flex items-center justify-center p-2">
          <h1>{"Two Sum"}</h1>
        </div>
        <div className="dropdown dropdown-end ml-auto">
          <label tabIndex={0} className="btn m-1">
            {editorLanguage.lang}
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
          >
            {Languages.map((language, idx) => (
              <li key={idx}>
                <a
                  onClick={() => {
                    editorLanguageSet({
                      code: language.starterCode,
                      lang: language.languageName,
                      extension: language.extension,
                      langCode: language.languageCode,
                    });
                  }}
                >
                  {language.languageName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <section>
        {/* Editor Section */}
        <CodeMirror
          minHeight="calc(60vh * 4/5)"
          maxHeight="calc(100vh * 3.7/5)"
          basicSetup={{
            lineNumbers: true,
            allowMultipleSelections: true,
            autocompletion: true,
            foldGutter: true,
            indentOnInput: true,
          }}
          theme={vscodeDark}
          extensions={[editorLanguage.extension]}
          value={editorLanguage.code}
          onChange={(e) => editorLanguageSet({ ...editorLanguage, code: e })}
        />
        {/* Run and Submit button */}
        <div className="flex gap-2 rounded-md p-2">
          <button
            className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-md"
            onClick={() => {
              void handleCodeRun();
            }}
          >
            {getOutput.isRefetching || getOutput.isFetching ? (
              <span className="loading loading-spinner loading-xs" />
            ) : (
              "Run"
            )}
          </button>
          <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">
            Submit
          </button>
        </div>
        {/* Output Section */}
        {getOutput.isRefetching || getOutput.isFetching ? (
          <div className="flex items-center justify-center p-10">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <div className="bg-[rgb(43,43,43)]">
            {/* Input */}
            <div className="flex flex-col gap-2 p-3">
              <span>Input: </span>
              <input
                className="h-[44px] w-2/5 rounded-md border p-2"
                onChange={(e) => inputSet(e.target.value)}
                value={input}
                placeholder="Input (separated by spaces)"
              />
            </div>
            {/* Output */}
            <div className="flex flex-col gap-2 p-3">
              {/* output */}
              {(output || error) && (
                <div className="flex flex-col gap-1">
                  <span>Output: </span>
                  <div
                    className={`min-h-[44px] w-2/5 rounded-md border p-3 ${
                      error ? "border-red-700" : "border-green-700"
                    } bg-zinc-900`}
                  >
                    {error ? error : output}
                  </div>
                </div>
              )}
              {/* expected output */}
              <div className="flex flex-col gap-1">
                <span>Expected Output: </span>
                <div className="min-h-[44px] w-2/5 rounded-md border p-2">
                  1 2 3 4
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Playground;
