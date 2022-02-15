<script lang="ts" setup>
import { toRefs } from "vue";

/**
 *
 * Component Description:Single user details for the sidebar
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface PropsInterface {
  imageUrl: string;
  fistName: string;
  lastName: string;
  email: string;
}
const props = defineProps<PropsInterface>();
const { imageUrl, fistName, lastName, email } = toRefs(props);
const HandleShowUserDetails = ({
  email,
  fistName,
  lastName,
}: {
  email: string;
  fistName: string;
  lastName: string;
}) => {
  console.log({ email, fistName, lastName });
};
</script>

<template>
  <div
    class="item"
    @click="HandleShowUserDetails({ email, fistName, lastName })"
  >
    <section class="item__img">
      <img :src="imageUrl" alt="user.name.first" />
    </section>
    <section class="item__details">
      <p class="text-bold">
        <span class="uppercase_fist">
          {{ fistName }}
        </span>
        <span class="uppercase_fist">
          {{ lastName }}
        </span>
      </p>
      <p>
        {{ email }}
      </p>
    </section>
  </div>
</template>
<style scoped lang="scss">
.item {
  cursor: pointer;
  margin-top: calc(var(--base-pd) * 2px);
  padding: calc(var(--base-pd) * 2px) calc(var(--base-pd) * 3px);
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: calc(var(--base-pd) * 2px);

  background: var(--base-bg);
  &__img {
    img {
      border-radius: 50%;
    }
  }
}
</style>
