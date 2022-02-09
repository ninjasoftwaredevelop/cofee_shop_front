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
        background-color:#673400;
        background-image: linear-gradient(to bottom, transparent, rgba(#B5651D));
        border-bottom: 4px solid #111;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        position:absolute;
        clear: both;
    }
    #footer h4 {
        color: #fcba03;
    }
</style>
