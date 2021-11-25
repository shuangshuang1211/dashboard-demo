
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { getUsers, updateUserStatus } from '../../api/user'
import { User, ListParams } from '../../api/types'
import PageContainer from '@/components/PageContainer.vue'
import CardContainer from '../../components/CardContainer.vue'
import AddUserDialog from '@/components/AddUserDialog.vue'
import { ElMessage } from 'element-plus'

const tableData = ref<User[]>([])
const listCount = ref(0)
const listLoading = ref(true)
const listParams = reactive({ // 列表数据查询参数
  page: 1, // 当前页码
  limit: 10, // 每页大小
  name: '',
  roles: '',
  status: '' as ListParams['status']
})

const openDialog = ref(false)
const loadData = async () => {
  listLoading.value = true
  const data = await getUsers(listParams).finally(() => {
    listLoading.value = false
  })
  tableData.value = data.list.map((item) => ({ ...item, statusLoading: false }))
  listCount.value = data.count
}
onMounted(() => {
  loadData()
})
const form = ref(null)
const handleQuery = () => {
  // console.log('查询', listParams, form.value)
  listParams.page = 1 // 查询默认从第1页开始
  loadData()
}
const handleStatusChange = async (item: User) => {
  item.statusLoading = true
  await updateUserStatus(item.id, item.status).finally(() => {
    item.statusLoading = false
  })
  ElMessage.success(`${item.status === 1 ? '启用' : '禁用'}成功`)
}

const handleOpenAddUserDialog = () => {
  openDialog.value = true
}

</script>

<template>
  <PageContainer>
    <CardContainer>
      <template #header>
        数据筛选
      </template>
      <el-form
        :inline="true"
        ref="form"
        :model="listParams"
        :disabled="listLoading"
        @submit.prevent="handleQuery"
      >
        <el-form-item label="状态">
          <el-select
            v-model="listParams.status"
            placeholder="请选择"
            clearable
          >
            <el-option
              label="全部"
              value=""
            />
            <el-option
              label="开启"
              :value="1"
            />
            <el-option
              label="禁用"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input
            v-model="listParams.name"
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </CardContainer>
    <CardContainer>
      <template #header>
        <el-button
          type="primary"
          @click="handleOpenAddUserDialog"
        >
          添加管理员
        </el-button>
      </template>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
      >
        <el-table-column type="expand">
          <template #default="props">
            <el-space>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;角色： {{ props.row.roles }}</p>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
        />
        <el-table-column
          prop="real_name"
          label="姓名"
          width="120"
        />
        <el-table-column
          prop="account"
          label="账号"
          width="120"
        />
        <el-table-column
          prop="roles"
          label="身份"
          width="120"
        >
          <template #default="props">
            <el-space>
              <el-tag
                v-for="(item) in props.row.roles.split(',')"
                :key="item"
              >
                {{ item }}
              </el-tag>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="120"
        >
          <template #default="props">
            <el-switch
              v-model="props.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="props.row.statusLoading"
              @change="handleStatusChange(props.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="last_time"
          label="上次登录"
        />
        <el-table-column
          label="上次登录IP"
          prop="last_ip"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="120"
        >
          <template #default>
            <el-button
              type="text"
              size="small"
            >
              Edit
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :total="listCount"
        v-model:current-page="listParams.page"
        v-model:page-size="listParams.limit"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
      />
    </CardContainer>
    <AddUserDialog
      v-model:dialog-visible="openDialog"
    />
  </PageContainer>
</template>
