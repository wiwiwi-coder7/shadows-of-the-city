import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("owner route authorization", () => {
  it("rejects dashboard access when an owner session cookie is absent", async () => {
    const ctx = {
      user: null,
      req: { protocol: "https", headers: {} },
      res: {},
    } as unknown as TrpcContext;
    const caller = appRouter.createCaller(ctx);
    await expect(caller.admin.dashboard()).rejects.toMatchObject({ code: "UNAUTHORIZED" });
  });
});
