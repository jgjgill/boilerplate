import { glob } from "glob";
import { Form, Link, Outlet } from "react-router";
import type { Route } from "./+types/sidebar";
import {
  container,
  main,
  navLink,
  searchInput,
  searchSpinner,
  sidebar,
  sidebarDiv,
  sidebarHeading,
  sidebarList,
  sidebarNav,
} from "./sidebar.css";

export async function loader() {
  const quizNames = [];

  try {
    const mdxFiles = await glob("./src/web/quiz/**/*.mdx");
    console.log(222);

    for (const file of mdxFiles) {
      const fileName = file.split("/").pop() ?? "";
      quizNames.push(fileName.replace(".mdx", ""));
    }
  } catch (error) {
    console.log(123123);
    throw new Response("Not found123", { status: 404 });
  }

  return { quizNames };
}

export default function Sidebar({ loaderData }: Route.ComponentProps) {
  const { quizNames } = loaderData;

  return (
    <div className={container}>
      <div className={sidebar}>
        <h1 className={sidebarHeading}>
          <Link to="about">TypeTime</Link>
        </h1>
        <div className={sidebarDiv}>
          <Form id="search-form">
            <input
              type="search"
              aria-label="Search quizzes"
              id="q"
              name="q"
              className={searchInput}
              placeholder="Search"
            />
            <div aria-hidden hidden className={searchSpinner} />
          </Form>
        </div>

        <nav className={sidebarNav}>
          <ul className={sidebarList}>
            {quizNames.length &&
              quizNames.map((quizName) => (
                <li key={quizName}>
                  <Link to={`/quizzes/${quizName}`} className={navLink}>
                    {quizName}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      <main className={main}>
        <Outlet />
      </main>
    </div>
  );
}
