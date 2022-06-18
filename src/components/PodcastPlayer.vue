<script setup lang="ts">
import { Howl, Howler } from 'howler';
import { NSpin, NButton, NIcon, NSlider, NDropdown } from "naive-ui"
import {
    EllipsisVerticalOutline,
    PauseOutline,
    PlayOutline,
    PlayBackOutline,
    PlaySkipBackOutline,
    PlaySkipForwardOutline,
} from "@vicons/ionicons5";
import { ref } from 'vue';
import type { OnUpdateValue } from 'naive-ui/lib/select/src/interface';
import type { MaybeArray } from 'naive-ui/lib/_utils';
import { usePodcastStore } from '@/stores/podcast';
// Setup the new Howl.
const sound = new Howl({
    src: ['sound.webm', 'sound.mp3']
});

const options = ref([
    {
        label: '1.5x',
        key: '1.5',
    },
    {
        label: '1.75x',
        key: '1.75',
    },
])
const handleSelect = (e: MaybeArray<OnUpdateValue>) => {
    console.log(e);

}

const podcastStore = usePodcastStore();


</script>

<template>
    <div class="flex flex-auto items-center relative overflow-hidden px-10">
        <!-- <n-spin v-show="true" size="small" class="absolute ml-2" /> -->
        <!-- Progress bar -->

        <div v-show="true" class="flex flex-auto justify-center items-center mx-3 gap-x-2">
            <div class="progress-time">
                <!-- {{ playbackPositionStr }} -->
                0:00
            </div>
            <n-slider :value="30" :max="120 || 1" :tooltip="false" class="flex flex-auto" />
            <!-- :disabled="!isReady() || !songPlaying"
            :on-update:value="onSlideUpdate"-->
            <div class="progress-time">
                <!-- {{ songDurationStr }} -->
                1:00
            </div>
        </div>
        <div class="flex justify-center items-center mx-2">
            <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                <n-button>speed</n-button>
            </n-dropdown>
        </div>
        <div class="flex flex-none h-full gap-x-3">
            <n-button text>
                <!-- v-show="playbackPosition < 5"
        :disabled="!isReady() || !songPlaying || !hasPrevious()"
                @click="skipBack"-->
                <n-icon>
                    <play-skip-back-outline />
                </n-icon>
            </n-button>
            <n-button text>
                <!-- v-show="playbackPosition >= 5"
        :disabled="!isReady() || !songPlaying"
                @click="setPlaybackPosition(0)"-->
                <n-icon>
                    <play-back-outline />
                </n-icon>
            </n-button>
            <n-button text>
                <!-- :disabled="!isReady() || !songPlaying"
                @click="togglePlayback"-->
                <n-icon>
                    <pause-outline />
                    <!-- <play-outline v-show="!isReady() || !isPlaying" /> -->
                </n-icon>
            </n-button>
            <n-button text>
                <!-- :disabled="!isReady() || !songPlaying || !hasNext()"
                @click="playNext"-->
                <n-icon>
                    <play-skip-forward-outline />
                </n-icon>
            </n-button>
            <n-button v-if="false" text>
                <!-- :disabled="!isReady() || !songPlaying" -->
                <n-icon>
                    <ellipsis-vertical-outline />
                </n-icon>
            </n-button>
        </div>
    </div>
</template>

<style scoped>
</style>
