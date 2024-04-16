<template>
  <div
    style="
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
    "
  >
<div style="width: 60%;height: 50%; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 15px; display: flex; flex-direction: column; justify-content: center; align-items: center">
  <div style="text-align: center;font-size: 20px;font-weight: bold;margin-top: 30px">注册</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="padding-top: 40px;"
      >
        <el-form-item label="用户名" prop="username" style="width: 450px">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" style="width: 450px">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" style="width: 450px">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button type="primary" @click="goto">去登陆</el-button>
        </el-form-item>
      </el-form>
  </div></div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username: "",

        },
        message: "",
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
  methods: {
    register() {
      request.post("/user/register", {
                name: this.ruleForm.username,
                password: this.ruleForm.pass,
              },
              console.log(this.ruleForm.username),
              console.log(this.ruleForm.pass)
          )
          .then((res) => {
            console.log(res);
          });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    goto(){
      this.$router.push('/login');
    }
  },
};
</script>

<style></style>
