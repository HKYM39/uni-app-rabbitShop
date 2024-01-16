import type { CommoGuessInstance } from '@/types/component'
import { ref } from 'vue'

/**
 * 猜你喜欢，组合式函数
 */
export const useGuessList = () => {
    const guessRef = ref<CommoGuessInstance>()

    // 触底加载更多事件
    const onScrolleLower = () => {
        guessRef.value?.getMore()
    }

    // 返回Ref以及事件处理函数
    return { guessRef, onScrolleLower }
}
