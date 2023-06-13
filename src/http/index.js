//统一api管理
import instance from "./axios";
const userLogin=(data)=>{
    //返回Promise对象
    return instance.request({
        url:'api/mobile/elogin', //url=baseUrl+url,
        method:'post',
        data,
        headers:{

        }
    })
}

const adminLogin=(data)=>{
    return instance.request({
        url:'',
        method:'',
        data
    })
}
//学校管理
const addSchool=(data)=>{
    return instance.request({
        url:'api/role/add',
        method:'post',
        data
    })
}
const deleteSchool=(params)=>{
    return instance.request({
        url:'api/role/delete',
        params
    })
}
const getSchools=()=>{
    return instance.request({
      url:'api/role/all',
      
      
  })
  }
  const getSchool=()=>{
    return instance.request({
      url:'api/role/one',
      
      
  })
  }
  const editSchool=(data)=>{
    return instance.request({
      url:'api/role/edit',
      method :'post',
     data
  })
  } 
  const checkSchool=(data)=>{
    return instance.request({
      url:'api/role/checkname',
      
     data
  })
  }
  //用户角色
  const addRole=(data)=>{
    return instance.request({
      url:'api/userRole/add',
      method:'post',
     data
  })
  }
  const getRole=(data)=>{
    return instance.request({
      url:'api/userRole/getRoleIdsByUserId',
      
     data
  })
  }
  const saveRole=(data)=>{
    return instance.request({
      url:'api/userRole/saveOrUpdate',
      method:'post',
     data
  })
  }
  //用户信息
  const addroleinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/add',
      method:'post',
     data
  })
  }
  const getroleinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/all',
     data
  })
  }
  const Getroleinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/assitant',
     data
  })
  }
  const changerolepassword=(data)=>{
    return instance.request({
      url:'api/userinfo/changpassword',
      method:'post',
     data
  })
  }
  const editroleinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/edit',
      method:'post',
     data
  })
  }
  const rolelogin=(data)=>{
    return instance.request({
      url:'api/userinfo/login',
      method:'post',
     data
  })
  }
  const getuserinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/page',
      method:'post',
     data
  })
  }
  const deleteuserinfo=(data)=>{
    return instance.request({
      url:'api/userinfo/delete',
     data
  })
  }
  const getbindstudent=(data)=>{
    return instance.request({
      url:'api/userinfo/page/getBindStudentVos',
      method:'post',
     data
  })
  }
  const getbindteacher=(data)=>{
    return instance.request({
      url:'api/userinfo/page/getBindTeacherVos',
      method:'post',
     data
  })
  }
  const userregister=(data)=>{
    return instance.request({
      url:'api/userinfo/register',
      method:'post',
     data
  })
  }
  //部门管理
  const addDepartment=(data)=>{
    return instance.request({
        url:'api/rolePermission/add',
        method:'post',
        data
    })
}
const deleteDepartment=(params)=>{
    return instance.request({
        url:'api/rolePermission/delete',
        params
    })
}
const getDepartments=()=>{
    return instance.request({
      url:'api/rolePermission/all',
      
      
  })
  }
  const getDepartment=()=>{
    return instance.request({
      url:'api/rolePermission/one',
      
      
  })
  }
  const editDepartment=(data)=>{
    return instance.request({
      url:'api/rolePermission/edit',
      method :'post',
     data
  })
  } 
  const checkDepartment=(data)=>{
    return instance.request({
      url:'api/rolePermission/check/{departName}',
      
     data
  })
  }
  //教师管理
  const addTeacher=(data)=>{
    return instance.request({
        url:'api/permission/add',
        method:'post',
        data
    })
}
const deleteTeacher=(params)=>{
    return instance.request({
        url:'api/permisson/delete',
        params
    })
}
const getTeachers=()=>{
    return instance.request({
      url:'/api/permission/all',
  })
  }
  const getTeacher=()=>{
    return instance.request({
      url:'api/permission/one',
      
      
  })
  }
  const editTeacher=(data)=>{
    return instance.request({
      url:'api/permission/edit',
      method :'post',
     data
  })
  } 
  const addPaper=(data)=>{
    return instance.request({
      url:'api/userRole/add',
      method :'post',
     data
  })
  } 
  const getPaper=(data)=>{
    return instance.request({
      url:'api/userRole/getRoleIdsByUserId',
      
      data
  })
  } 
  const editPaper=(data)=>{
    return instance.request({
      url:'api/userRole/saveOrUpdate',
      
     data
  })
  } 
  const deletePaper=(params)=>{
    return instance.request({
        url:'api/userRole/delete',
        params
    })
}
  
  
const adminLogin1=function(data){
    return instance.request({
    url:'', 
    method:'post',
    data
})
}
// const getalldormitory = (data) => {
//     return instance.request({
//         url: 'api/dormitory/all',
//         data
//     })
// }
// //对应delete
// const deleteDormitory = (params) => {
//     return instance.request({
//         url: 'api/dormitory/delete',
//         params
//     })
// }
// //对应add
// const addDormitory = (data) => {
//     return instance.request({
//         url: 'api/dormitory/add',//看api文档
//         method: 'post',
//         data
//     })
// }
// //对应edit
// const editDormitory = (data) => {
//     return instance.request({
//         url: 'api/dormitory/edit',//改 
//         method: 'post',
//         data
//     })
// }
// //可有可无,没用到
// const getonedormitory = (data) => {
//     return instance.request({
//         url: 'api/dormitory/one',//改

//         data
//     })
// }
export {
    userLogin,
    adminLogin,
    getDepartment,getSchool,getTeacher,
    getSchools,getDepartments,getTeachers,
    editDepartment,editSchool,editTeacher,
    deleteDepartment,deleteSchool,deleteTeacher,
    addDepartment,addSchool,addTeacher,
    checkDepartment,checkSchool,
    getPaper,addPaper,
    addRole,getRole,saveRole,
    addroleinfo,getroleinfo,Getroleinfo,changerolepassword,editroleinfo,rolelogin,getuserinfo,deleteuserinfo,getbindstudent,getbindteacher,userregister
} 










