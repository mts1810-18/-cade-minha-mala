import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function fetchRoute(worker, path) {
  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const worker = await loadWorker();
  const response = await fetchRoute(worker, "/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /5547989072766/);
  assert.doesNotMatch(html, /989072765|98907-2765/);
  assert.match(html, /67\.837\.209\/0001-85/);
  assert.match(html, /67\.837\.209 JULIA CHINIKOSKI DE SOUZA/);
});

test("renders all institutional routes with status 200 and updated WhatsApp", async () => {
  const worker = await loadWorker();
  const routes = [
    "/sobre",
    "/servicos",
    "/depoimentos",
    "/blog",
    "/blog/como-planejar-uma-viagem-sem-dor-de-cabeca",
    "/contato",
    "/privacidade",
  ];

  for (const route of routes) {
    const response = await fetchRoute(worker, route);
    assert.equal(response.status, 200, `Expected 200 for ${route}`);
    const html = await response.text();
    assert.match(html, /5547989072766/, `Expected updated WhatsApp on ${route}`);
    assert.doesNotMatch(
      html,
      /989072765|98907-2765/,
      `Old WhatsApp found on ${route}`,
    );
  }
});
