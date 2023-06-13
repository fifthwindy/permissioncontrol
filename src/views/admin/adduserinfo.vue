<template>
    <el-form label-width="100px" :model="department" style="max-width: 800px" :rules="rules">
        <el-row>
            <el-col :span="12">
                <el-form-item label="编号">
                    <el-input v-model="department.id" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="用户姓名">
                    <el-input v-model="department.userName" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="状态">
                    <el-input v-model="department.state" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="密码">
                    <el-input v-model="department.password" />
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
                <el-form-item label="是否弃用">
                    <el-input v-model="department.deleted" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="灵活">
                    <el-input v-model="department.mobile" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="邮箱">
                    <el-input v-model="department.email" />
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="token">
                    <el-input v-model="department.token" />
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-form-item label="用户类型">
                    <el-input v-model="department.userType" />
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
import { addroleinfo } from '@/http/index'
import moment from 'moment'
import { ElMessage, ElMessageBox } from 'element-plus';
export default defineComponent({
    data() {
        return {
            department: {//自己取 里面的内容就是老师提供的表，在那个api文档也可以看 可以直接cv 我的视频有说
                "binding": 0,
                "createTime": "",
                "deleted": 0,
                "email": "",
                "id": 0,
                "mobile": "",
                "password": "",
                "state": 0,
                "token": "",
                "updateTime": "",
                "userName": "",
                "userType": ""
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
            addroleinfo(department).then(res => {
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
