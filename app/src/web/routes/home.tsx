import { graphql } from "react-relay";
import type { homeQuery } from "../__relay__/homeQuery.graphql";
import { relayQueryLoader } from "../relay/relayQueryLoader";
import { useRelayQueryLoaderData } from "../relay/useRelayQueryLoaderData";
import type { Route } from "./+types/home";

// const query = graphql`
//   query homeQuery {
//     ping
//   }
// `;

// export const loader = relayQueryLoader<homeQuery>({
//   query,
//   variables: ({params}) => ({}),
// });

export function loader({ params }: Route.LoaderArgs) {
  console.log(params);

  return {};
}

export default function Home() {
  // const data = useRelayQueryLoaderData<typeof loader>(query);

  return <main>Type Time, Hello World!</main>;
}
