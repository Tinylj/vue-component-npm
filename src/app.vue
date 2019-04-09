<template>
    <aside class="lh-aside" :style="{ width }">
        <div v-if="showText">
            测试显示功能
        </div>
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name: 'LhAside',
        componentName: 'LhAside',
        props: {
            width: {
                type: String,
                default: '300px'
            },
            showText:{
                type: Boolean,
                default:false
            },
        }
    };
</script>
<style scoped>
    .lh-aside {
        background-color: #3A3F51;
        height: 1000px;
    }
</style>