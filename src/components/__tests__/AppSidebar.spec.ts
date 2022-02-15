import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import AppSidebar from "@/components/AppSidebar.vue";

describe("AppSidebar", () => {
  it("It should render the sidebar ", () => {
    const wrapper = shallowMount(AppSidebar);
    expect(wrapper.exists()).toBe(true);
  });
});
