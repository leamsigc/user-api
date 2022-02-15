import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import AppShell from "@/components/AppShell.vue";

describe("AppShell", () => {
  it("It should render the shell ", () => {
    const wrapper = shallowMount(AppShell);
    expect(wrapper.exists()).toBe(true);
  });
});
