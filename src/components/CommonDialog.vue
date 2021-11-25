<script lang="ts" setup>

import { ElDialog } from 'element-plus'
import { PropType, ref } from 'vue'

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  },
  onConfirm: {
    type: Function as PropType<(evt: MouseEvent) => void>,
    default: () => ''
  },
  onClose: {
    type: Function as PropType<(evt: MouseEvent) => void>,
    default: () => ''
  }
})

const dialog = ref<typeof ElDialog | null>(null)
// const open = ref(props.dialogVisible)

interface EmitsType {
  (e: 'update:dialogVisible', value: boolean): void
}
const emits = defineEmits<EmitsType>()
const handleClose = (evt: MouseEvent) => {
  props.onClose?.(evt)
  emits('update:dialogVisible', false)
}

// watch([open], () => {
//   emits('update:dialogVisible', open.value)
// })

// const handleCloseCallFn = (value: boolean) => {
//   console.log('close_callback====>value', value)
//   emits('update:dialogVisible', false)
// }

const handleUpdateOpenValue = (value: boolean) => {
  console.log('value---->', value)
  emits('update:dialogVisible', value)
}

</script>

<template>
  <el-dialog
    :model-value="dialogVisible"
    @update:model-value="handleUpdateOpenValue"
    title="对话框"
    width="50%"
    ref="dialog"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button
          type="primary"
          @click="props.onConfirm"
        >确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
