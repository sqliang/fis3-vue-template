<template lang="html">
    <header class="header">
        <Row class="left">
            <i-col span="6">
                {{ name }}
            </i-col>
            <i-col span="18">
                <p>header content</p>
            </i-col>
        </Row>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                name: 'header'
            }
        }
    }
</script>

<style lang="stylus">
    .header {
        height: 60px;
        background: #cccccc;
    }

</style>