import { cppLanguage } from "@codemirror/lang-cpp";
import { javaLanguage } from "@codemirror/lang-java";
import { javascriptLanguage } from "@codemirror/lang-javascript";
import { pythonLanguage } from "@codemirror/lang-python";
import { csharpLanguage } from "@replit/codemirror-lang-csharp";
import { type Extension } from "@uiw/react-codemirror";

export type LanguagesType = "Java" | "Cpp" | "C#" | "Javascript" | "Python3";

export type LanguageCodeType = "java" | "cpp" | "cs" | "js" | "py";
export type LanguageSelectType = {
  languageCode: LanguageCodeType;
  languageName: LanguagesType;
  starterCode: string;
  extension: Extension;
};

export const Languages: LanguageSelectType[] = [
  {
    languageCode: "java",
    languageName: "Java",
    starterCode: `class Solve
    {
        public static void main(String []args)
        {
            System.out.println("Hello World ! from java");
        }
    };`,
    extension: javaLanguage.extension,
  },

  {
    languageCode: "py",
    languageName: "Python3",
    starterCode: `print('Hello, world! from python')`,
    extension: pythonLanguage.extension,
  },
  {
    languageCode: "js",
    languageName: "Javascript",
    starterCode: `console.log("Hello World! from javascript")`,
    extension: javascriptLanguage.extension,
  },
  {
    languageCode: "cpp",
    languageName: "Cpp",
    starterCode: `#include <bits/stdc++.h>
    using namespace std;
    int main() 
    {
        cout << "Hello World! from C++";
        return 0;
    }`,
    extension: cppLanguage.extension,
  },
  {
    languageCode: "cs",
    languageName: "C#",
    starterCode: `using System;
  namespace ProblemSolution {  
      class Solve {
          static void Main(string[] args) {
              Console.WriteLine("Hello World! from C#");
              Console.ReadKey();
          }
      }
  }`,
    extension: csharpLanguage.extension,
  },
];
