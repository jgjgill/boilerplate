import type { Route } from "./+types/home";

export function loader({ request, context, params }: Route.LoaderArgs) {}

export default function Home() {
  return <div>Hello World!123</div>;
}
