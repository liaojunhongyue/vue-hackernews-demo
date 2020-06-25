<template>
  <div class="index">
    <el-container>
      <el-header>Vue知识点总结</el-header>
      <el-main>
        <el-row :gutter="20" type="flex" justify="center">
          <el-col
            v-for="item in questionDataGetter"
            :key="item.id"
            :span="6"
          >
            <div>{{ item.title }}</div>
          </el-col>
        </el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>

      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  asyncData({ store }) {
    return store.dispatch('QUERY_QUESTIONS_DATA')
  },
  computed: {
    ...mapGetters(['questionDataGetter'])
  }
}
</script>
