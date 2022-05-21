<template>
    <div
        :style='{
            left: left,
            backgroundColor: "#4f4",
            top: 30,
        }'
        @click="setName('World')"
    >
        <div
            :style='{
                left: left,
                top: 30,
                color: "#ff0000"
            }'
        >
            count={{ count }}
        </div>
        <span>Hello {{ name }}</span>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    const name = ref('pixi-vue');
    const left = ref(0);
    const pos = ref([20, 120, 200, 100]);
    const count = ref(1);
    const setName = (n: any) => {
        console.log('onclick');
        name.value = n;
        pos.value[1] += 20;
        count.value += 1;
        left.value += 2;
    };
</script>
<!--
<script lang="ts">
    // import {defineComponent, ref} from 'vue';
    // export default defineComponent({
    import {ref} from 'vue';
    export default {
        setup () {
            const name = ref('pixi-vue');
            const left = ref(0);
            const pos = ref([20, 120, 200, 100]);
            const count = ref(1);
            const setName = (n: any) => {
                name.value = n;
                pos.value[1] += 20;
                count.value += 1;
                left.value += 2;
            };

            return {
                name,
                setName,
                pos,
                count,
                left,
            };
        }
    };
</script> -->