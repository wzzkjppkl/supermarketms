<template>
    <div class="login">
        <div class="wrapper">
            <div class="title"><i class="el-icon-menu"></i> 欢迎登陆华联管理系统</div>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="text" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkpwd">
                    <el-input type="text" v-model.number="loginForm.checkpwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() { 

        
    var password = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 12){
            callback(new Error('请输入6-12位密码'));
        }else {
          if (this.loginForm.password !== '') {
            this.$refs.loginForm.validateField('checkpwd');
          }
          callback();
        }
    };
    var checkpwd =(rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        }else if(value !==this.loginForm.password){
            callback(new Error('两次输入密码不一致'))
        }else{
           callback() 
        }
    };
      
      
      return {
        loginForm: {
          username: '',
          password: '',
          checkpwd: ''
        },
        rules: {
          username: [
            { required:true,message:"请输入账号", trigger: 'blur' },
            { min:6,max:12,message:"请输入6-12位正确账号", trigger: 'blur' },
            
          ],
          password: [
            { required:true,validator: password, trigger: 'blur' }
          ],
          checkpwd: [
            { required:true,validator: checkpwd, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("登陆成功");
            //发送数据给后台
            let params={
                username : this.loginForm.username,
                password : this.loginForm.password
            }
            console.log(params);
            
          } else {
            alert('请确认账号密码是否正确');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="less">
    .login{
        height: 100%;
        background: #2d3a4b;
        .wrapper{
            height: 300px;
            width: 500px;
            position: fixed;
            left: 0px;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            background: rgba(0,0,0,0.2);
            padding: 20px 50px 0px 10px;
            .title{
                font-size: 24px;
                color: #fff;
                padding-bottom: 10px;
                margin-left: 60px;
            }
        }
    }
</style>
