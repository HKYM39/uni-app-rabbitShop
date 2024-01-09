import type CommoGuess from '@/components/CommoGuess.vue'
import CommoSwiper from '@/components/CommoSwiper.vue'
/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
    export interface GlobalComponents {
        CommoSwiper: typeof CommoSwiper
        CommoGuess: typeof CommoGuessVue
    }
}

export type CommoGuessInstance = InstanceType<typeof CommoGuess>
export type CommoSwiperInstance = InstanceType<typeof CommoSwiper>
