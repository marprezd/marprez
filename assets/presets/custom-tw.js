import { usePassThrough } from 'primevue/passthrough'
import Tailwind from 'primevue/passthrough/tailwind'

const CustomTailwind = usePassThrough(Tailwind, {}, { mergeProps: true })

export default CustomTailwind
