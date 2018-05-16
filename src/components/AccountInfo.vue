<template>
    <div>
        <h1> Thông tin tài khoản</h1>
        <div class="wrapper">
            <el-form :model='formData' ref="form" label-width="150px" label-position="right">
                <el-form-item label="Tên đăng nhập">
                    <el-input v-model='formData.username' :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input  v-model='formData.email'></el-input>
                </el-form-item>
                <el-form-item label="Ngày sinh">
                    <el-date-picker v-model="formData.birthday" type="date" format="MM/dd/yyyy" placeholder="MM/dd/yyyy" style="width:100%"></el-date-picker>
                </el-form-item>
                <el-form-item label="Giới tính">
                    <el-select placeholder="Select" style="width:100%" v-model="formData.gender">
                    <el-option label="Nam" value="Male"></el-option>
                    <el-option label="Nữ" value="Female"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Di động">
                    <el-input v-model="formData.phone"></el-input>
                </el-form-item>
                <el-form-item label="Địa chỉ">
                    <el-input v-model="formData.address" type="textarea" :rows="2"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-button type="success" class="pull-right" @click='save'>Lưu thông tin</el-button>
        <el-button class="pull-right" @click='dialogChangPasswordVisible=true'>Đổi mật khẩu</el-button>

        <el-dialog title="Thay đổi mật khẩu" :visible.sync="dialogChangPasswordVisible">
            <el-form :model="ruleForm" ref="ruleForm" :rules="rules">
                <el-form-item label="Mật khẩu cũ" prop="oldPass">
                <el-input type="password" v-model="ruleForm.oldPass"></el-input>
                </el-form-item>
                <el-form-item label="Mật khẩu mới" prop="newPass">
                <el-input type="password" v-model="ruleForm.newPass"></el-input>
                </el-form-item>
                <el-form-item label="Nhập lại mật khẩu mới" prop="reNewPass">
                <el-input type="password" v-model="ruleForm.reNewPass"></el-input>
                </el-form-item>
            </el-form><span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm(&quot;ruleForm&quot;)">Đồng ý</el-button>
                <el-button type="danger" @click="resetForm(&quot;ruleForm&quot;)">Hủy</el-button></span>
        </el-dialog>
    </div>
</template>

<script>

export default {
    computed:{
      userData(){
        return this.$store.state.userData;
      }
    },

    data() {
        let validatePass = (rule, value, callback) => {
        let flag=true;
        if (!(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(value) )) {
            flag=false;
            callback(new Error('Mật khẩu phải có đúng 8 ký tự bao gồm chữ và số'));
        }
        if(value!==this.formData.password){
            flag=false;
            callback(new Error('Mật khẩu hiện tại sai'))
        }
        if(flag) callback();
        };
        let validateNewPass = (rule, value, callback) => {
        if (!(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(value) )) {
            callback(new Error('Mật khẩu phải có đúng 8 ký tự bao gồm chữ và số'));
        }
            else callback();
        };
        let validateReNewPass = (rule, value, callback) => {
        if (!(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(value) )) {
            callback(new Error('Mật khẩu phải có đúng 8 ký tự bao gồm chữ và số'));
        }
        else
            if(this.ruleForm.newPass!==value)
            callback(new Error('Mật khẩu phải trùng với mật khẩu mới'));
            else
            callback();
        };
        return {
            ruleForm: {
                oldPass: '',
                newPass: '',
                reNewPass: '',
            },
            rules: {
            oldPass: { validator: validatePass, trigger: 'blur' },
            newPass: { validator: validateNewPass, trigger: 'blur' },
            reNewPass: {validator: validateReNewPass, trigger: 'bur'},
            },
            dialogChangPasswordVisible:false,
            formData: {
                _id : '',
                username: '',
                password: '',
                email: '',
                address: '',
                birthday: '',
                gender:'',
                phone:'',
            },
        };
    },
    methods:{
        save(){
            //console.log(this.formData);
            this.$store.state.userData.username=this.formData.username;
            this.$store.state.userData.password=this.formData.password;
            this.$store.state.userData.email=this.formData.email;
            this.$store.state.userData.address=this.formData.address;
            this.$store.state.userData.birthday=this.formData.birthday;
            this.$store.state.userData.gender=this.formData.gender;
            this.$store.state.userData.phone=this.formData.phone;
            this.$store.state.isLogin=true;
            console.log(this.$store.state.userData);
            this.$notify({
                title: 'Success',
                message: 'Bạn chỉnh sửa thông tin tài khoản thành công',
                type: 'success'
            });
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.state.userData.password = this.ruleForm.newPass;
            this.formData.password = this.ruleForm.password;
            this.dialogChangPasswordVisible=false;
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    created() {
        this.formData.username= this.userData.username;
        this.formData.password= this.userData.password;
        this.formData.email= this.userData.email;
        this.formData.address= this.userData.address;
        this.formData.birthday= this.userData.birthday;
        this.formData.gender=this.userData.gender;
        this.formData.phone=this.userData.phone;

  },
};
</script>
<style lang='css' scoped>
.pull-right{
  float:right;
  margin:10px;
  margin-right:0px;
}
.wrapper{
    background-color:white;
    padding:15px;
    padding-top:40px;
    margin-bottom: 10px;
}
</style>
