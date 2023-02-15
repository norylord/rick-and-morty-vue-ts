<template>
  <div class="observer" ref="obs">
  </div>
</template>

<script lang="ts" setup>
import {defineProps, onMounted, reactive, Ref, ref} from "vue";

interface IProps {
  callback?: any
}

const obs = ref('null')

const props = defineProps<IProps>()
const initObs = () => {
  const options = {
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observerCallback = (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) {
        return
      }
      props.callback()
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);
  observer.observe(obs.value);
};

onMounted(initObs)
onMounted(() => console.log(obs));

</script>

<style lang='sass'>
.observer
  width: 100%
  height: 20px
  background: red
  margin-bottom: 20px
</style>
