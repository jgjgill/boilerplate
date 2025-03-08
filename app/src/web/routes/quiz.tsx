import { readFileSync } from "node:fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import QuizMultipleChoice from "../components/quiz-multiple-choice";
import type { Route } from "./+types/quiz";

const components = { QuizMultipleChoice };

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const mark = readFileSync(`./src/web/quiz/${params.quizId}.mdx`, "utf-8");
    const mdx = matter(mark);
    const quiz = await serialize(mdx.content);

    return { quiz };
  } catch (error) {
    throw new Response("Not found", { status: 404 });
  }
}

export default function Quiz({ loaderData }: Route.ComponentProps) {
  const { quiz } = loaderData;

  return <MDXRemote {...quiz} components={components} />;
}
