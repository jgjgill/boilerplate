import type { Route } from "./+types/home";

export function loader({ request, params, context }: Route.LoaderArgs) {
  context.app.env.COOKIE_SECRET;
}

export default function Home() {
  return <div>Hello World</div>;
}
