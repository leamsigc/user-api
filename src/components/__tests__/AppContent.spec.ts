import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import AppContent from "@/components/AppContent.vue";

describe("AppContent", () => {
  it("It should render the sidebar ", () => {
    const wrapper = shallowMount(AppContent);
    expect(wrapper.exists()).toBe(true);
  });
});
