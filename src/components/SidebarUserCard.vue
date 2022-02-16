<script lang="ts" setup>
import { NAvatar, NBadge, NCard } from "naive-ui";
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
  <n-card
    @click="HandleShowUserDetails({ email, fistName, lastName })"
    style="padding: 0"
    :hoverable="true"
  >
    <div class="item">
      <section>
        <n-badge dot type="info" processing>
          <n-avatar size="large" :src="imageUrl" />
        </n-badge>
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
        <p class="item__details--email">
          {{ email }}
        </p>
      </section>
    </div>
  </n-card>
</template>
<style scoped lang="scss">
@import "../assets/mixins";
.item {
  cursor: pointer;
  display: grid;
  grid-template-areas:
    "avatar avatar avatar"
    "details details details";
  grid-template-columns: 50px 2fr 2fr;
  grid-gap: calc(var(--base-pd) * 2px);
  @include for-size(break-point-md) {
    grid-template-areas:
      "avatar details details"
      "avatar details details";
  }
  &__img {
    grid-area: avatar;
    img {
      border-radius: 50%;
    }
  }
  &__details {
    grid-area: details;
    &--email {
      font-size: 0.8rem;
    }
  }
}
</style>
