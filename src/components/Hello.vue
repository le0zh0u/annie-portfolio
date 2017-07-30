<template>
  <div class="hello">
    <div class="logo-box">
      <img src="http://oiuhevdur.bkt.clouddn.com/logo2-zjj.png" class="logo">
    </div>
    <el-row :gutter="20" class="mt-20">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/s-house">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/house-thum.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/spdr">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/spdr-thum.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/project-manage">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/project-manage-thum1.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-20">
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/run-date">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/run-date-thum.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/maycur-website">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/maycur-thum.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link to="/last-page">
            <div>
              <img src="http://oiuhevdur.bkt.clouddn.com/last-page-zjj.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>

    </el-row>
    <div class="footer">
      <img src="http://oiuhevdur.bkt.clouddn.com/contact-zjj.png" class="image">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        currentDate: new Date()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
    margin: 20px 5em;
  }

  .logo {
    margin-top: 20px;
    margin-bottom: 20px;

    padding: 20px 0px;
  }

  .card-box.el-card {
    border: 0px;
  }

  .card-box.el-card:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .48);
  }

  .image {
    width: 100%;
    display: block;
  }

  .mt-20 {
    margin-top: 20px
  }

  .footer {
    border-top: 1px dashed #ddd;
    margin-top: 80px;
    padding-top: 30px;
  }
</style>
