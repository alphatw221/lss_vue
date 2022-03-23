<template>
    <v-card
        height="100"
        max-width="350"
        :style="item.style"
    >
        <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
                class="ma-3"
                size="50"
                left
            >
                <v-img :src="item.img"></v-img>
            </v-avatar>
            <div style="margin: 1rem 0.2rem 0.2rem 0; color: white;">
                <v-card-title class="text-h5">{{ item.title }}</v-card-title>
                <div class="subtitle">{{ item.subtitle }}</div>
            </div>
        </div>
    </v-card>
</template>
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
/* .text-h5 {
    float: right;
} */
.subtitle {
    margin-right: 0.5rem;
}
</style>