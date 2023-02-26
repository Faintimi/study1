<template>
    <div class="login_container" >
       <div class="login_box">
        <!-- 头像区域 -->
        <div class="avatar_box">
            <img src="../assets/logo.png" alt="">
        </div>
        <!-- 登陆表单区域 -->
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
            <!-- 用户名 -->
            <el-form-item label="" prop="username" >
              <el-input v-model="loginForm.username" :prefix-icon="Avatar" />
            </el-form-item>
            <!-- 密码 -->
            <el-form-item label="" prop="password">
                <el-input type="password" v-model="loginForm.password" :prefix-icon="Lock" />
              </el-form-item>

              <!-- 按钮区 -->
              <el-form-item class="btns">
                <el-button type="primary" @click="login">登录</el-button>
                <el-button type="info" @click="resetLoginForm">重置</el-button>
              </el-form-item>


              
        </el-form>
       </div>

    </div>
</template>


<script  setup>
import { Avatar,Lock} from '@element-plus/icons-vue'
import { reactive } from 'vue'

//这是表单的数据绑定对象 //实在受不了，想传输给数据库必须在下面的script中定义。
// const loginForm = reactive({
//     username: '',
//     password: '123'
// })
// 表单的验证规则



const loginFormRules = reactive ({
    username: [
    {required: true, message:"请输入用户名", trigger:"blur"},
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' },

   


    ],


    password: [
    {required: true, message:"请输入密码", trigger:"blur"},
    { min: 6, max: 10, message: 'Length should be 6 to 10', trigger: 'blur' },


    ]




})




</script>

<script>

export default{
    data(){
        return{
            loginForm:{
    username: 'admin',
    password: '123456'
}
        }
    },

        
    
    methods: {
        //重置按钮的重置方法调用
        resetLoginForm(){
        
           this.$refs.loginFormRef.resetFields();
            console.log(this.loginForm);
         
        },
        login(){
            
            this.$refs.loginFormRef.validate(async valid => {
                // console.log(valid);
                if(!valid) return;
                const {data:res} = await this.$http.post('login',this.loginForm);
                //  console.log(res);
                //  console.log(this.loginForm)
                if(res.meta.status !==200)   return this.$message.error('登陆失败')
                this.$message.success('登录成功！')
                // 1.保存token到客户端sessionStorage
                window.sessionStorage.setItem("token", res.data.token);
                // 2.通过编程式导航跳转到后台主页； 路由地址是 /home
                this.$router.push('/home')

            } );
        }
    }
}


</script>

<style lang="less" scoped>

.btns {
    display: flex;
    justify-content: flex-end;
    float: right;
}
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius:3px;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #e7e5e5;
    border-radius: 50%;
    padding:10px;
    box-shadow:  0 0 10px #ddd;
    position: absolute;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:#fff;
    img{
        width:100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }

}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding:0 20px;
    box-sizing: border-box;

}



</style>