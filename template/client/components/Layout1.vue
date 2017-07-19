<template lang="html">
    <Row class="layout">
        <Row class="layout-panel">
            <i-col :span="5">
                <div class="layout-logo-left">
                    <Icon type="ios-paw" class="logo-icon"></Icon>
                    <span class="logo-text">FEED干预</span>
                </div>
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
                <Row class="layout-header">
                    <i-col class="panel-top" span="24">
                        <i-col span="20">
                            <i-button type="text">
                                <Icon type="navicon" size="32"></Icon>
                            </i-button>
                        </i-col>
                        <i-col span="4" class="rightbar">
                            <span>rightbar</span>
                        </i-col>
                    </i-col>
                </Row>
                <div class="main-container">
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
.layout-panel {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    background: #464c5b;
}
.layout-logo-left {
    color: #c1c3c9;
    width: 100%;
    padding: 14px 0;
    height: 60px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.logo-icon {
    font-size: 32px;
    vertical-align: bottom;
}
.logo-text {
    font-size: 22px;
    line-height: 30px;
}
.layout-content {
    background: #f1f2f7;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: hidden;
}
.layout-header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-header .rightbar {
    text-align: right;
    padding-right: 30px;
}
.main-container {
    position: absolute;
    right: 0;
    top: 60px;
    bottom: 0;
    width: 100%;
    overflow-y: scroll;
}
.layout-breadcrumb {
    margin: 20px;
}
.layout-content-main {
    background: #fff;
    margin: 20px;
    border-radius: 4px;
    padding: 10px;
}
</style>