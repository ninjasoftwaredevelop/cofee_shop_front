<template>
    <div id="footer">
        <h4>Inspiração e um pouco de café! E isso me basta!</h4>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer {
        height: 100px;
        background-color:#030303;
       
        border-bottom: 4px solid #fcba03;
        border-top: 4px solid #fcba03;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        position:fixed;
        clear: both;
    }
    #footer h4 {
        color: #fcba03;
        font-size: 22px;
    }
</style>
