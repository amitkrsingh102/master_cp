import { TRPCClientError } from "@trpc/client";
import { z } from "zod";
import {
  createTRPCRouter,
  //   protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const compileRouter = createTRPCRouter({
  //   hello: publicProcedure
  //     .input(z.object({ text: z.string() }))
  //     .query(({ input }) => {
  //       return {
  //         greeting: `Hello ${input.text}`,
  //       };
  //     }),
  getAllAvailableLanguages: publicProcedure.query(async () => {
    const result = await fetch("https://api.codex.jaagrav.in/list");
    const validate = getAllReturnDataValidator.parse(await result.json());
    return validate;
  }),

  getOutput: publicProcedure
    .input(
      z.object({ code: z.string(), language: z.string(), input: z.string() }),
    )
    .query(async ({ input }) => {
      try {
        const result = await fetch("https://api.codex.jaagrav.in", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            code: input.code,
            language: input.language,
            input: input.input,
          }),
        });

        const validate = outputDataValidator.parse(await result.json());
        return validate;
      } catch (err) {
        if (err instanceof TRPCClientError) {
          return {
            timeStamp: 0,
            status: 400,
            output: "",
            error: "compilation terminated : invalid syntax",
            language: "",
            info: "",
          };
        }
      }
    }),

  //   getSecretMessage: protectedProcedure.query(() => {
  //     return "you can now see this secret message!";
  //   }),
});

const supportedLanguages = z.object({
  language: z.string(),
  info: z.string(),
});

const getAllReturnDataValidator = z.object({
  timeStamp: z.number(),
  status: z.number(),
  supportedLanguages: z.array(supportedLanguages),
});

const outputDataValidator = z.object({
  timeStamp: z.number(),
  status: z.number(),
  output: z.string(),
  error: z.string(),
  language: z.string(),
  info: z.string(),
});
export type getAllReturnDataType = z.infer<typeof getAllReturnDataValidator>;
