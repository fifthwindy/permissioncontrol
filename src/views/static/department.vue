<template>
    <div class="head">

        <el-input placeholder="搜索部门信息">
            <template #append><el-button icon="Search"></el-button></template>
        </el-input>
        <el-table :data="departments" style="width: 100%">
            <el-table-column fixed prop="id" label="编号" width="150" />
            <el-table-column prop="permissionIds" label="权限编号" width="120" />
            <el-table-column prop="roleId" label="角色编号" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="120" />
            <el-table-column prop="updateTime" label="更新时间" width="120" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="edit(scope.row)" v-if="admin">修改</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)" v-if="admin">删除</el-button>
                    <el-button link type="primary" size="small">申请编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="pageinfo.totalpage" :page-size="pageinfo.pageSize"
            @current-change="pageChange" />

    </div>

    <el-dialog v-model="DialogVisible" title="添加部门" width="50%" center>
        <el-form :model="department">
            <el-form-item label="部门名" :label-width="formLabelWidth">
                <el-input v-model="department.permissionIds" autocomplete="off" />
            </el-form-item>
            <el-form-item label="部门英文名" :label-width="formLabelWidth">
                <el-input v-model="department.roleId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="部门描述" :label-width="formLabelWidth">
                <el-input v-model="department.createTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="部门类别" :label-width="formLabelWidth">
                <el-input v-model="department.updateTime" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="DialogVisible = false">取消</el-button>
                <el-button type="primary" @click="confirmAdd">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
    <el-dialog v-model="EditDialogVisible" title="修改部门信息" width="50%" center>
        <el-form :model="department">
            <el-form-item label="编号" :label-width="formLabelWidth">
                <el-input v-model="department.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="权限编号" :label-width="formLabelWidth">
                <el-input v-model="department.permissionIds" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色编号" :label-width="formLabelWidth">
                <el-input v-model="department.roleId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="department.createTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="department.updateTime" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="EditDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="confirmEdit">
                    确认
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
import { getDepartment, getDepartments, addDepartment, editDepartment, deleteDepartment, checkDepartment } from "@/http/index"//在http的文件夹里index.js 是相对应的
import { cloneDeep } from 'lodash-es'
import { ElMessage, ElMessageBox } from 'element-plus'

export default defineComponent({
    data() {
        return {
            departments: [],
            pageinfo: {
                "currentPage": 1,
                "pageSize": 5,
                "totalpage": 10
            },
            department: {
                "createTime": "",
                "id": 0,
                "permissionIds": "",
                "roleId": 0,
                "updateTime": ""
            },
            DialogVisible: false,
            EditDialogVisible: false,
            admin: false
        };
    },
    mounted() {
        //this.tested()
        //this.adds()
        this.getall();
        if (JSON.parse(localStorage.getItem('admin'))) {
            this.admin = JSON.parse(localStorage.getItem('admin'))
        } else {
            this.admin = false;
        }
    },
    methods: {
        //不用康
        tested() {
            console.log("2#A211".slice(3, 6));
            const a = "2#A211".split("");
            console.log(parseInt("2") + 1);
        },

        //排序 不用看
        dsort(dormitorys) {
            for (var i = 0; i < dormitorys.length; i++) {
                dormitorys[i].id = i + 1;
            }
            return dormitorys;
        },
        pageChange(currentPage) {
            this.pageinfo.currentPage = currentPage;
            this.getall(); //记得改 改成和 176行一样的名字，都以176行的名字改
            //console.log(this.dormitory)
        },
        //获取老师那个api库的内容函数 没有数据得自己加
        getall() {
            let start = this.pageinfo.pageSize * (this.pageinfo.currentPage - 1);
            let end = this.pageinfo.currentPage * this.pageinfo.pageSize;
            getDepartments().then(res => {
                //const sortedDormitorys = res.data.dormitories
                if (res.success) {
                    this.departments = res.data.rolePermissions.slice(start, end); //去浏览器的控制台看名字 我发的视频里也有
                    this.pageinfo.totalpage = res.data.rolePermissions.length;
                }
                else {
                    return false;
                }
                //console.log(this.pageinfo.totalpage);
                //console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },
        //添加记录 在第3行

        edit(department) {
            //console.log(dormitory)
            this.EditDialogVisible = true;
            this.department = cloneDeep(department); //这个cloneDeep括号里的参数要对应edit括号里的参数，在295行
        },
        //在第106行 改名要一起改
        confirmEdit() {
            let department = this.department; //等号左边的变量名随便取，右边的名字和第128行的对象名一样，有改名记得一起改
            //console.log(dormitory)
            editDepartment(department).then(res => {
                if (res.success) {
                    this.EditDialogVisible = false;
                    this.getall(); //这个函数在176行 改名记得一起
                    ElMessage(res.msg);
                }
                else {
                    ElMessage(res.msg);
                    return false;
                }
            }).catch(err => {
                ElMessage("网络错误联系管理员");
            });
        },
        //删除 del在19行被调用了，如果你要改名记得一起改
        del(id) {
            console.log(id);
            const params = {
                id: id
            };
            ElMessageBox.confirm("是否确认删除", "Warning", {
                confirmButtonText: "确认删除",
                cancelButtonText: "在考虑一下",
                type: "warning",
            })
                .then(() => {
                    ElMessage({
                        type: "success",
                        message: "删除成功",
                    }),
                        //下面这个deleteDormitory要改名的话 代码第116行也得改，改成一样的
                        deleteDepartment(params).then(res => {
                            if (res.success) {
                                this.getall(); //这个函数在176行 改名记得一起
                            }
                            else {
                                console.log(res.msg);
                                return false;
                            }
                        }).catch(err => {
                            console.log(err);
                        });
                })
                .catch(() => {
                    ElMessage({
                        type: "info",
                        message: "在考虑一下",
                    });
                });
        },
        //删除所有记录  这个不用管
        delall() {
            //console.log(this.dormitorys.length)
            for (let i = 1; i <= this.pageinfo.totalpage; i++) {
                let params = {
                    id: i
                };
                deleteDormitory(params).then(res => {
                    if (res.success) {
                        this.getdormitorys();
                    }
                    else {
                        console.log(res.msg);
                        return false;
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    },

});
</script>

<style lang="scss" scoped></style>
