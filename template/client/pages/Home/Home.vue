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
        <div>
            <p>
                登录命令:
                ssh --matrix work@721.liangshiquan-otp-qmbaike.ksarch.cp01
                check_circle 状态:
                可用
                stars 环境类型:
                线上沙盒
                access_time 创建时间:
                2017-07-17 15:49
                access_time 到期时间:
                2017-07-27 15:49
                access_time 更新时间:
                2017-07-17 15:49
                account_circle 使用人:
                liangshiquan
                stars IP:
                10.94.239.135
                stars 端口信息:
                查看
                domain 域名:
                http://sqliang.baike.otp.baidu.com
                memory CPU:
                1 核
                memory 内存:
                4 GB
                memory 硬盘:
                40 GB
                supervisor_account 环境管理员:
                查看
                info 配置信息警告:
                查看
                info 备注:
            </p>
            <p>
                登录命令:
                ssh --matrix work@721.liangshiquan-otp-qmbaike.ksarch.cp01
                check_circle 状态:
                可用
                stars 环境类型:
                线上沙盒
                access_time 创建时间:
                2017-07-17 15:49
                access_time 到期时间:
                2017-07-27 15:49
                access_time 更新时间:
                2017-07-17 15:49
                account_circle 使用人:
                liangshiquan
                stars IP:
                10.94.239.135
                stars 端口信息:
                查看
                domain 域名:
                http://sqliang.baike.otp.baidu.com
                memory CPU:
                1 核
                memory 内存:
                4 GB
                memory 硬盘:
                40 GB
                supervisor_account 环境管理员:
                查看
                info 配置信息警告:
                查看
                info 备注:
            </p>
            <p>
                登录命令:
                ssh --matrix work@721.liangshiquan-otp-qmbaike.ksarch.cp01
                check_circle 状态:
                可用
                stars 环境类型:
                线上沙盒
                access_time 创建时间:
                2017-07-17 15:49
                access_time 到期时间:
                2017-07-27 15:49
                access_time 更新时间:
                2017-07-17 15:49
                account_circle 使用人:
                liangshiquan
                stars IP:
                10.94.239.135
                stars 端口信息:
                查看
                domain 域名:
                http://sqliang.baike.otp.baidu.com
                memory CPU:
                1 核
                memory 内存:
                4 GB
                memory 硬盘:
                40 GB
                supervisor_account 环境管理员:
                查看
                info 配置信息警告:
                查看
                info 备注:
            </p>
            <p>
                登录命令:
                ssh --matrix work@721.liangshiquan-otp-qmbaike.ksarch.cp01
                check_circle 状态:
                可用
                stars 环境类型:
                线上沙盒
                access_time 创建时间:
                2017-07-17 15:49
                access_time 到期时间:
                2017-07-27 15:49
                access_time 更新时间:
                2017-07-17 15:49
                account_circle 使用人:
                liangshiquan
                stars IP:
                10.94.239.135
                stars 端口信息:
                查看
                domain 域名:
                http://sqliang.baike.otp.baidu.com
                memory CPU:
                1 核
                memory 内存:
                4 GB
                memory 硬盘:
                40 GB
                supervisor_account 环境管理员:
                查看
                info 配置信息警告:
                查看
                info 备注:
            </p>
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