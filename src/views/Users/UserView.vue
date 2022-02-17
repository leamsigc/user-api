<script setup lang="ts">
import { useRandomUserStore } from "@/stores/users";
import { toRefs } from "vue";

interface props {
  id: string;
}

const { getCurrentUser } = useRandomUserStore();
const prop = defineProps<props>();
const { id } = toRefs(prop);

function getValues(item: object): string {
  return Object.values(item).join(", ");
}
</script>

<template>
  <div
    class="overflow-hidden bg-white shadow-xl rounded-2xl"
    v-if="getCurrentUser"
  >
    <img
      class="object-cover w-full h-56"
      :src="`https://source.unsplash.com/random/300×30${id}`"
      alt=""
    />

    <div class="relative pt-20 text-center">
      <div
        class="absolute w-24 h-24 shadow-xl transform -translate-x-1/2 -top-10 left-1/2"
      >
        <img
          class="object-cover w-24 h-24 shadow-xl rounded-xl"
          :src="getCurrentUser.picture.large"
          alt=""
        />
      </div>

      <div class="px-6 sm:px-12">
        <h5 class="text-xl font-bold text-gray-900">
          <span class="uppercase_fist">
            {{ getCurrentUser ? getCurrentUser.name.title : "Mr." }}
          </span>
          <span class="uppercase_fist">
            {{ getCurrentUser ? getCurrentUser.name.first : "Mr." }}
          </span>
          <span class="uppercase_fist">
            {{ getCurrentUser ? getCurrentUser.name.last : "Mr." }}
          </span>
        </h5>

        <p class="mt-2 text-sm text-gray-500">
          {{ getCurrentUser ? getCurrentUser.email : "Example@test.com" }}
        </p>
      </div>

      <div
        class="flex flex-col items-center justify-center px-6 py-4 mt-6 border-t border-gray-100 sm:flex-row sm:items-start sm:px-12"
      >
        <div class="flex items-center">
          <span class="flex-shrink-0 p-2 text-green-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gender-ambiguous"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
              />
            </svg>
          </span>

          <span
            class="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse"
          >
            <span class="order-first mr-2">Gender: </span>
            <strong>{{ getCurrentUser.gender }}</strong>
          </span>
        </div>
      </div>

      <div class="grid grid-2 gap-2">
        <div
          class="bg-white max-w-4xl shadow overflow-hidden sm:rounded-lg mx-auto"
        >
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              User details
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Details and information about user.
            </p>
          </div>
          <div class="border-t border-gray-200">
            <dl>
              <div
                class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                :class="{ 'bg-gray-50': index % 2, 'bg-gray-100': index % 1 }"
                v-for="(item, key, index) in getCurrentUser"
                :key="key"
              >
                <dt class="text-sm font-medium text-gray-500 text-left">
                  {{ key.toUpperCase() }}:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <template v-if="typeof item !== 'object'">
                    {{ item }}
                  </template>
                  <template v-else>
                    <dl>
                      <div
                        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                        :class="{ 'bg-gray-50': j % 2, 'bg-gray-100': j % 1 }"
                        v-for="(value, anotherkey, j) in item"
                        :key="anotherkey"
                      >
                        <dt class="text-sm font-medium text-gray-500 text-left">
                          {{ anotherkey.toUpperCase() }}:
                        </dt>
                        <dd
                          class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                        >
                          {{
                            typeof value === "object" ? getValues(value) : value
                          }}
                        </dd>
                      </div>
                    </dl>
                  </template>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
