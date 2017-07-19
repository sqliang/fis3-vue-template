<template lang="html">
    <Row class="layout">
        <Row class="layout-header">
            <i-col class="panel-top" span="23" push="1">
                <i-col span="20">
                    <div>
                        <Icon type="ios-paw"></Icon>
                        <span class="logo-text">
                            FEED干预
                        </span>
                    </div>
                </i-col>
                <i-col span="4" class="rightbar">
                    <span>rightbar</span>
                </i-col>
            </i-col>
        </Row>
        <Row class="layout-panel">
            <i-col :span="5">
                <Menu mode="vertical" theme="dark" width="auto" :open-names="['1']" active-name="1-1" accordion>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            干预导航一
                        </template>
                        <Menu-item name="1-1">选项 1</Menu-item>
                        <Menu-item name="1-2">选项 2</Menu-item>
                        <Menu-item name="1-3">选项 3</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            干预导航二
                        </template>
                        <Menu-item name="2-1">选项 1</Menu-item>
                        <Menu-item name="2-2">选项 2</Menu-item>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            干预导航三
                        </template>
                        <Menu-item name="3-1">选项 1</Menu-item>
                        <Menu-item name="3-3">选项 2</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col :span="19" class="layout-content">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item href="#">某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content-main">
                    <h4>内容区域</h4>
                    <router-view></router-view>
                </div>
            </i-col>
        </Row>
    </Row>
</template>

<script>
    export default {
        name: 'layout',
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="stylus" scoped>
.layout {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #f0f3f4;
}
.layout-header {
    height: 60px;
    line-height: 60px;
    background: #1b1b1b;
    color: #9b9b9b;
}
.layout-header .rightbar {
    text-align: right;
    padding-right: 30px;
}

.layout-panel {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background: #495060;
}
.layout-content {
    background: #f1f2f7;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    padding: 20px;
}
.layout-breadcrumb {
    margin-bottom: 20px;
}
.layout-content-main {
    background: #fff;
    border-radius: 4px;
    padding: 10px;
}

</style>