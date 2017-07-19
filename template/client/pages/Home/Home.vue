<template lang="html">
    <div>
        <h4 class="home">
            this is home
        </h4>
        <p>{{ name }}</p>
        <div>
            <Input v-model="value" placeholder="请输入。。。" style="width: 300px"></Input>
        </div>
        <div class="img-con">
            <img class="img" :src="picSrc" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import picSrc  from '86.jpg';
    export default {
        data() {
            return {
                name: 'Home Component',
                value: 'hello',
                picSrc: picSrc
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .home {
        font-size: 14px;
        color: #0000fe;
    }
    .img-con {
        margin-top: 10px;
    }
    .img {
        width: 100px;
        height: 100px;
    }
</style>