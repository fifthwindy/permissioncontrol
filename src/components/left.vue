<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" router class="el-menu-vertical-demo"
     text-color="#fff" @open="handleOpen" @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
      
        <el-icon><User /></el-icon>
        角色管理
      </template>
      <el-menu-item index="/admin/rolecontrol" class="item">
        <span>角色管理</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><EditPen /></el-icon>
        用户管理
      </template>
      <el-menu-item index="/admin/userinfo" class="item">
        <span>创建用户</span>
      </el-menu-item>
      <el-menu-item index="/user/roleinfo" class="item">
        <span>用户信息</span>
      </el-menu-item>
    </el-sub-menu>
    <!-- <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group> -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Avatar /></el-icon>
        角色权限管理
      </template>
      <el-menu-item index="/admin/addrolecontroller" class="item">
        <span>创建角色权限</span>
      </el-menu-item>
      <el-menu-item index="/admin/rolecontroller" class="item">
        <span>角色权限</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        权限管理
      </template>
      <el-menu-item index="/admin/addteacher" class="item" v-if="admin">

        <span>录入新教师</span>
      </el-menu-item>
      
      <el-menu-item index="/admin/permission" class="item">

        <span>权限管理</span>
      </el-menu-item>

    </el-sub-menu>
  </el-menu>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  data(){
    return{
      
      
    }
  },
  props:{ admin:{
    type:Boolean,
  }},
  mounted(){
    console.log(this.$props)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
});
</script>

<style lang="scss" scoped>
.item {
  font-size: small;
}

.item1 {
  font-size: smaller;
}
</style>
