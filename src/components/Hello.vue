<template>
<div class="hello">
  <div class="header">
    <img src="http://img.leozhou.me/zjj-logo.png" class="logo">
    <div><span>越努力，越幸运</span></div>
  </div>
  <div class="content">
    <el-row :gutter="40" v-for="(cards, i) in resetCardList(cardList)" :key="i" class="mt-30">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(card, index) in cards" :key="index">
        <el-card :body-style="{ padding: '0px' }" class="card-box">
          <router-link :to="card.linkTo">
            <div>
              <img :src="card.img" class="image">
            </div>
          </router-link>
          <div class="card-content">
            <router-link :to="card.linkTo">
              <span class="card-name">{{card.name}}</span>
            </router-link>
            <div class="secondary">
              <span class="card-category">{{card.category}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div class="footer">
    <div>
      <img src="http://img.leozhou.me/zjj-photo.png" class="photo">
      <router-link to="/last-page">
        <img src="http://img.leozhou.me/portfolio-icon.png" class="portfolio">
      </router-link>
    </div>
    <div>
      <span>我是朱菁菁，我来自浙江大学</span>
    </div>
    <div class="contact">
      <span>annie@leozhou.me / Tel 15757115641 / QQ 531120183</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      currentDate: new Date(),
      screenWidth: document.body.clientWidth,
      cardList: [{
        id: 1,
        img: 'http://img.leozhou.me//home1.png',
        name: '运动社交类——约跑',
        linkTo: '/run-date',
        category: 'APP设计'
      }, {
        id: 2,
        img: 'http://img.leozhou.me//home2.png',
        name: '保镖云防盗V2.0.0',
        linkTo: '/car-anti-theft',
        category: 'UI设计'
      }, {
        id: 3,
        img: 'http://img.leozhou.me//home3.png',
        name: 'Design项目管理平台',
        linkTo: '/project-manage',
        category: 'APP设计'
      }, {
        id: 4,
        img: 'http://img.leozhou.me//home4.png',
        name: '每刻官网V1.0',
        linkTo: '/maycur-website',
        category: 'WEB设计'
      }, {
        id: 5,
        img: 'http://img.leozhou.me//home5.png',
        name: '线上BANNER规范',
        linkTo: '/banner-guide',
        category: 'banner规范设计'
      }, {
        id: 6,
        img: 'http://img.leozhou.me//home6.png',
        name: '视觉绘制',
        linkTo: '/hand-drawing',
        category: '插画'
      }, {
        id: 7,
        img: 'http://img.leozhou.me//home7.png',
        name: 'Ring Clean',
        linkTo: '/ring-clean',
        category: '概念设计'
      }]
    }
  },
  methods: {
    resetCardList() {
      let result = []
      let list = this.cardList;
      let cards  = [];
      for (var i = 0; i < list.length; i++) {
        if (this.screenWidth >= 1200  ) {
          if (cards.length == 4) {
            result.push(cards);
            cards = [];
          }
          cards.push(list[i]);
        }else if (this.screenWidth >= 976) {
          if (cards.length == 3) {
            result.push(cards);
            cards = [];
          }
          cards.push(list[i]);
        }else if (this.screenWidth >= 753) {
          if (cards.length == 2) {
            result.push(cards);
            cards = [];
          }
          cards.push(list[i]);
        }else{
          if (cards.length == 1) {
            result.push(cards);
            cards = [];
          }
          cards.push(list[i]);
        }
      }
      if (cards.length !=0) {
        result.push(cards);
      }
      return result;
    }
  },
  mounted() {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function() {
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0px;
}

.header {
  padding: 40px 0px 50px 0px;
}

.header span {
  font-size: 14px;
}

.logo {
  padding: 10px 0px;
  width: 90px;
}

.content {
  padding: 30px 200px 60px 200px;
  background: #F1F1F1;
}

.card-box.el-card {
  border: 0px;
}

.card-box.el-card:hover {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .48);
}

.card-content {
  padding: 20px;
  text-align: left;
}

a {
  text-align: center;
  color: #2c3e50;
  text-decoration: none;
}

.card-name {
  font-family: PingFangSC-Regular;
  font-size: 16px;
}

.secondary {
  margin-top: 15px;
}

.card-category {
  font-family: PingFangSC-Light;
  font-size: 12px;
}

.image {
  width: 100%;
  display: block;
  border: none;
}

.mt-30 {
  margin-top: 30px
}

.clear {
  clear: both;
}

.footer {
  padding: 30px;
}

.photo {
  margin: 20px 0px 30px 0px;
  width: 100px;
}

.portfolio {
  width: 50px;
  margin: 20px 0px 30px 40px;
}

.contact {
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
