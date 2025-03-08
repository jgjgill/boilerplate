import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("quizzes/:quizId", "routes/quiz.tsx"),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
