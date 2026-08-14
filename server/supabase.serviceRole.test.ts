import { describe, expect, it } from "vitest";

describe("Supabase service-role credential", () => {
  it("can read the Storage bucket catalog without exposing the key", async () => {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    expect(url).toBeTruthy();
    expect(key).toBeTruthy();

    const response = await fetch(`${url}/storage/v1/bucket`, {
      headers: { apikey: key!, Authorization: `Bearer ${key}` },
    });
    expect(response.status).toBeLessThan(400);
  });
});
