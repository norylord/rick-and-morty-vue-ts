<template>
  <div class="side-section" >
    <div class="side-section-wrapper">
      <slot/>
    </div>
    <div class="side-section__actions">
      <UIButton>GitHub</UIButton>
      <UIButton>VK</UIButton>
      <UIButton>Telegram</UIButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIButton from "@/components/ui/button/UIButton.vue";
import LoadindIcon from "@/assets/icons/LoadindIcon.vue";

</script>

<style lang='sass'>
.side-section
  height: 100vh
  width: 40vw
  position: relative
  background: linear-gradient(180deg, #404952 0%, #2A203F 100%)
  padding: 100px 100px
  &-wrapper
    width: 100%
    display: flex
    flex-direction: column
  &__link
    margin-top: 30px
  &__actions
    width: 100%
    justify-content: space-around
    position: absolute
    left: 0
    bottom: 24px
    display: flex
</style>