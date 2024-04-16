<template>
    <div style="height: 100vh; display: flex;align-items: center; justify-content: center; ">
        <div style="display: flex; background-color:darkgrey; height: 60%;width: 1200px; wijustify-content: center; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)" >
            <div style="flex: 1;align-items: center;">
                <img src="@/assets/login.png" style=" width: 80%;">
            </div>
            <div style="flex: 1;align-items: center; ">
                <div style="font-size: 20px;font-weight: bold;text-align: center; margin-top: 15%;margin-bottom: 15%;">登录</div>

                <el-form :model="userInfo" style="width: 80%;">
                    <el-form-item prop="username">
                        <el-input placeholder="请输入账号" v-model='userInfo.username' prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input show-password placeholder="请输入密码" v-model='userInfo.password' prefix-icon="el-icon-lock"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-button type="primary" style="width: 80%;margin-top: 5%;" @click="login">登录</el-button>
                    </el-form-item>
                    <div style="display: flex;">
                        <div style="flex:1">还没有账号？请<span style="color:#0f9876;" @click='gotore'>注册</span></div>
                        <div style="flex:1;text-align:right"><span style="color: #0f9876;">忘记密码</span></div>
                    </div>
                    
                    
                    
                </el-form>
            </div>

        </div>
        
    </div>
</template>

<script>
import request from '@/utils/request.js'
export default{
    name: "Login",
    data(){
        return{
            userInfo:{
                username:'',
                password:''
            },
            message:''
        }
    },
    created(){

    },
    methods:{
        login(){
            let that = this;
            request.post(
            '/user/login',
            {
                "name": this.userInfo.username,
                "password": this.userInfo.password
            }).then(res=>{
                // console.log(res)
                // console.log(Object.values(res.data.data))
                that.message=res.data.data
                if(res.data.code===1){
                    this.$message({
                    message: that.message,
                    type: 'success'
        });
                    that.$router.push('/')
                }
            })
            console.log(typeof(this.userInfo.username) );
        },
        gotore(){
            let that = this
            that.$router.push('/register')
        }
    }
}
</script>

<style>
</style>