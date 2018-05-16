<template>
    <div>
        <h1> TẠO TÀI KHOẢN</h1>
        <div class="wrapper">
            <el-form :model='formData' ref="formData" label-width="150px" label-position="right" :rules="rules">
                <el-form-item label="Tên đăng nhập">
                    <el-input v-model='formData.username'> </el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input type="password" v-model='formData.password'></el-input>
                </el-form-item>
                <el-form-item label="Email">
                    <el-input  v-model='formData.email'> </el-input>
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
        <el-button type="success" class="pull-right" @click='save'>Đăng kí</el-button>
    </div>
</template>

<script>

export default {
    data() {
        let validatePass = (rule, value, callback) => {
            console.log(value);
            if (!(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/.test(value) )) {
                callback(new Error('Mật khẩu phải có đúng 8 ký tự bao gồm chữ và số'));
            }
                else callback();
        };

        return {
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
            rules: {
                password: { validator: validatePass, trigger: 'blur' },
            },

        };
    },
    computed:{
      formdata(){
        return this.$store.state.formData;
      }
    },
    methods:{
        save(){
            this.$refs['formData'].validate((valid) => {
                if (valid) {
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
                        message: 'Bạn đã đăng kí thành công tài khoản',
                        type: 'success'
                    });
                    this.$router.push('/');
                }
                else {
                     this.$notify({
                        title: 'Bạn đã đăng kí thất bại',
                        type: 'warning'
                    });
                }
            })
        }
    }
};
</script>
<style lang='css' scoped>
.pull-right{
  float:right;
}
.wrapper{
    background-color:white;
    padding:15px;
    padding-top:40px;
    margin-bottom: 10px;
}
</style>
