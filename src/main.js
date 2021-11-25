import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// dayjsのインポート
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'

// ロケールのインポート
import 'dayjs/locale/zh-tw'

// ロケール設定
dayjs.locale('zh-tw')

dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)

const app = createApp({
    components: {
        App
    },
})

app.provide('dayjs', dayjs)
createApp(App).use(router).mount('#app')
