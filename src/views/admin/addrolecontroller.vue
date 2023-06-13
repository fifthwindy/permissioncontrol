<template>
    <el-form label-width="100px" :model="department" style="max-width: 800px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="编号">
                    <el-input v-model="department.id" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="权限编号">
                    <el-input v-model="department.roleId" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="创建时间">
                    <el-input v-model="department.createTime" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="更新时间">
                    <el-input v-model="department.updateTime" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="角色编号">
                    <el-input v-model="department.permissionIds" />
                </el-form-item>
            </el-col>
        </el-row>


    </el-form>
    <el-row justify="center">
        <el-col :span="4">
            <el-button link type="primary" @click="add" v-if="admin">确认添加</el-button>
            <el-button link type="primary" @click="req" v-else>申请创建</el-button>
        </el-col>

    </el-row>
</template>

<script>
import { defineComponent } from "vue"
import { addDepartment } from '@/http/index'
import moment from 'moment'
import { ElMessage, ElMessageBox } from 'element-plus';
export default defineComponent({
    data() {
        return {
            department: {//自己取 里面的内容就是老师提供的表，在那个api文档也可以看 可以直接cv 我的视频有说
                "createTime": "",
                "id": 0,
                "permissionIds": "",
                "roleId": 0,
                "updateTime": ""
            },
            rules: {},
            admin: false
        }
    },
    mounted() {
        if (JSON.parse(localStorage.getItem('admin'))) {
            this.admin = JSON.parse(localStorage.getItem('admin'))
        } else {
            this.admin = false;
        }
    },
    methods: {
        req() {
            ElMessage('等待管理员审核')
        },
        add() {
            const department = this.department;
            this.getdata();
            addDepartment(department).then(res => {
                ElMessage('添加成功')
            }).catch(err => {
                ElMessage('添加失败')
                console.log(err)
            })
        },
        getdata() {
            this.createTime = moment().format('YYYY-MM-DD HH:mm:ss');
            this.updateTime = moment().format('YYYY-MM-DD HH:mm:ss')
        },
    }
});
</script>

<style lang="scss" scoped></style>
