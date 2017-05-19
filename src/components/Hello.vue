<template>
  <div class="hello">
    <el-row :gutter="20" class="mt-20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/s-house">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/1sHouse-new.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/sprd">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/2spdr.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/car-anti-theft">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/3car-anti-theft-new.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/project-manage">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/4project-manage-new.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/run-date">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/5run-date-new.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/last-page">
            <div class="img-box">
              <img src="http://oiuhevdur.bkt.clouddn.com/last-page-zjj.jpg" class="image">
            </div>
          </router-link>
        </el-card>
      </el-col>

    </el-row>

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
  .img-box {
    height: 180px
  }

  .image {
    width: 100%;
    display: block;
  }

  .mt-20{
    margin-top: 20px
  }

</style>
