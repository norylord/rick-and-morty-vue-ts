<template>
  <div class="side-section">
    <div class="side-section-wrapper">
      <div class="side-section__nav">
        <p class="side-section__nav-link" @click="router.push('/')">Главная</p>
      </div>
      <div class="side-section__nav" @click="router.push('/characters')">
        <p class="side-section__nav-link">Персонажи</p>
      </div>
      <div class="side-section__nav">
        <p class="side-section__nav-link">Эпизоды</p>
      </div>
      <div class="side-section__nav">
        <p class="side-section__nav-link">Контакты</p>
      </div>    
    </div>
    <div class="side-section__actions">
      <a href="https://t.me/Norylord" class="side-section__actions-link">
        <img class="side-section__actions-icon" src="@/assets/icons/telegram.svg" alt="">
      </a>
      <a href="https://github.com/norylord" class="side-section__actions-link">
        <img class="side-section__actions-icon" src="@/assets/icons/github.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';


</script>

<style lang='sass'>
.side-section
  height: 100vh
  width: 20vw
  position: relative
  background: linear-gradient(180deg, #404952 0%, #2A203F 100%)

  &-wrapper
    width: 100%
    height:100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    
  &__nav
    width: 100%
    cursor: pointer
    &-link
      font-size: 32px
      font-weight: 300
      width: 100%
      padding: 16px
      transition: all .2s ease-in-out
      
      &:hover
        background: #656565
        

  &__link
    margin-top: 30px

  &__actions
    width: 100%
    padding: 0 8px
    justify-content: space-between
    position: absolute
    right: 0
    bottom: 24px
    display: flex
    &-icon
      margin: 0 16px
      width: 32px
      height: 32px
    &-link
      
.icon
  &-home
    align-self: start
</style>