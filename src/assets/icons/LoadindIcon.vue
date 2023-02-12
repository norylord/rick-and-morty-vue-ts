<template>
  <div class="ui-loading">
    <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.3" cx="34.2759" cy="33.7871" r="27.399" transform="rotate(0.437512 34.2759 33.7871)" stroke="#959595" stroke-width="12.5579"/>
      <path opacity="0.75" d="M60.6865 41.0804C59.4386 45.5993 57.0521 49.7223 53.7554 53.0552C50.4586 56.3882 46.3618 58.8195 41.8569 60.1165C37.3519 61.4136 32.5895 61.5331 28.0252 60.4636C23.4608 59.3941 19.2472 57.1714 15.7875 54.008C12.3277 50.8446 9.73742 46.8465 8.26447 42.3959C6.79151 37.9454 6.48512 33.1913 7.37461 28.5885C8.2641 23.9857 10.3197 19.6881 13.3448 16.1068C16.3699 12.5255 20.2633 9.78025 24.6526 8.13371" stroke="#959595" stroke-width="12.5579" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<style lang="sass">
.ui-loading
  width: 100%
  display: flex
  justify-content: center
  height: 68px
  animation: inf-rotate infinite 2s ease-in-out

@keyframes inf-rotate
  0%
    transform: rotate(0)
  100%
    transform: rotate(720deg)
</style>