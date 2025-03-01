import { Environment, Network, RecordSource, Store } from "relay-runtime";

export function createRelayLoaderEnvironment() {
  // Loader에서 동작
  const network = Network.create(async (operation, variables, cacheConfig) => {
    const response = await fetch("http://127.0.0.1:5173/graphql", {
      method: "post",
      body: JSON.stringify({ query: operation?.text, variables }),
      headers: { "Content-Type": "application/json" },
      signal: cacheConfig.metadata?.signal as AbortSignal,
    });

    const json = await response.json();

    return json;
  });
  const source = new RecordSource();
  const store = new Store(source);

  return new Environment({ store, network });
}
