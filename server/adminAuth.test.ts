import { describe, expect, it } from "vitest";
import { createPasswordMaterial, verifyPassword } from "./adminAuth";

describe("owner password protection", () => {
  it("accepts only the original secret against a generated password hash", () => {
    const material = createPasswordMaterial("A_long_random_owner_secret_2026");
    expect(verifyPassword("A_long_random_owner_secret_2026", material.salt, material.hash)).toBe(true);
    expect(verifyPassword("incorrect-secret", material.salt, material.hash)).toBe(false);
  });
});
