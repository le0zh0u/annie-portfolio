<template>
  <div>
    <img src="http://oiuhevdur.bkt.clouddn.com/portfolio/detail/run-1.png" class="image">
    <img src="http://oiuhevdur.bkt.clouddn.com/portfolio/detail/run-2.png" class="image">
    <my-video :sources="video.sources" :options="video.options"></my-video>
  </div>
</template>
<script>
  import myVideo from 'vue-video'
  export default {
    name: 'run-date-page',
    data () {
      return {
        video: {
                sources: [{
                    src: 'http://covteam.u.qiniudn.com/oceans.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                    poster: 'http://covteam.u.qiniudn.com/poster.png'
                }
            }
      }
    },
    components: {
        myVideo
    }
  }
</script>
<style>
  body{
    margin:0
  }
  #app{
    margin-top:0
  }
  .image {
    width: 100%;
    display: block;
  }
</style>
