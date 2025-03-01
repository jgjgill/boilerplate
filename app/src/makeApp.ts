import path from "node:path";
import FastifyAutoload from "@fastify/autoload";
import fastify from "fastify";

const SECOND = 1000;

export async function makeApp() {
  const app = fastify({
    logger: true,
    pluginTimeout: 60 * SECOND,
    disableRequestLogging: true,
  });

  /**
   * 플러그인을 등록합니다
   */
  await app.register(FastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  app.get("/healthz", async () => {
    return { ok: true };
  });

  /**
   * 모든 Fastify 플러그인이 준비될때까지 대기합니다
   */
  await app.ready();
  app.log.info({}, "[system] completed - app.ready()");

  return app;
}
