<script setup lang="ts">
import FaqView from '@/components/Home/FaqView.vue';
import FeaturesView from '@/components/Home/FeaturesView.vue';
import HeroView from '@/components/Home/HeroView.vue';
import JoinCommunityView from '@/components/Home/JoinCommunityView.vue';
import ServerDescriptionView from '@/components/Home/ServerDescriptionView.vue';
import TimelineView from '@/components/Home/TimelineView.vue';
import TwitchEmbedView from '@/components/Home/Twitch/TwitchEmbedView.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
    <section class="bg-[#0E0E0E]" id="home">
        <HeroView />
        <div class="separator"></div>
        <TwitchEmbedView />
        <ServerDescriptionView />
        <FeaturesView />
        <TimelineView />
        <JoinCommunityView />
        <FaqView />
        <img class="bg-[#070A15] mt-[-2rem] w-full" src="/webp/footer-corner.png" alt="Dark shadow devider imager" />
        <div class="pt-[3rem] pb-[5rem] w-full flex justify-center items-center bg-black">
            <p class="w-full max-w-[1140px] italic px-[20px]" v-html="t('copyrightExtraWarning')"></p>
        </div>
    </section>
</template>