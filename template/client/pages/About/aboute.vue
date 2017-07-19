<template lang="html">
    <div>
        <p>this is about.</p>
        <p>{{ name }}</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                name: 'About Component'
            }
        }
    }
</script>