import { ref, h } from "vue";
import { RouterLink } from "vue-router";
import {NIcon} from "naive-ui";

import {
    HomeOutline as HomeIcon,
    ManOutline as MaleIcon,
    WomanOutline as PersonIcon,
    MaleFemaleOutline as UserIcon,
    WineOutline as WineIcon,
  } from "@vicons/ionicons5";

function renderIcon(icon: unknown) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return () => h(NIcon, null, { default: () => h(icon) });
  }

const menuOptions = ref([
    {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: "/",
            },
          },
          { default: () => "Home" }
        ),
      key: "home",
      icon: renderIcon(HomeIcon),
    },
    {
      label: "Users",
      key: "users",
      icon: renderIcon(UserIcon),
      children: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: "/users",
                  query: {
                    gender: "all",
                  },
                },
              },
              { default: () => "All" }
            ),
          key: "all",
          icon: renderIcon(UserIcon),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: "/users",
                  query: {
                    gender: "male",
                  },
                },
              },
              { default: () => "Male" }
            ),
          key: "male",
          icon: renderIcon(MaleIcon),
        },
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: "/users",
                  query: {
                    gender: "female",
                  },
                },
              },
              { default: () => "Female" }
            ),
          key: "female",
          icon: renderIcon(PersonIcon),
        },
      ],
    },
    {
      label: "Reports",
      key: "reports",
      icon: renderIcon(WineIcon),
      children: [
        {
          label: "Month",
          key: "month",
        },
      ],
    },
    {
      label: "Load more...",
      key: "the-past-increases-the-future-recedes",
    },
  ]);

const useMenuEntrys = ()=>({menu:menuOptions})

export { useMenuEntrys }