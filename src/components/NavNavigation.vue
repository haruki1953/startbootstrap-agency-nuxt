<script setup lang="ts">
// 控制滚动后导航栏的样式
const { y } = useWindowScroll()
const isWindowScrollY = computed(() => y.value > 0)

// 控制导航栏展开
const isCollapseShow = ref(false)
const toggleCollapseShow = async () => {
  isCollapseShow.value = !isCollapseShow.value
}

// 路由切换时导航栏收起
const route = useRoute()
watch(
  () => route.path,
  () => {
    isCollapseShow.value = false
  }
)
</script>

<template>
  <!-- Navigation-->
  <nav
    id="mainNav"
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    :class="{
      'navbar-shrink': isWindowScrollY
    }"
  >
    <div class="container">
      <a class="navbar-brand" href="#page-top"
        ><img src="assets/img/navbar-logo.svg" alt="..."
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        :class="{
          collapsed: !isCollapseShow
        }"
        @click="toggleCollapseShow"
      >
        Menu
        <i class="fas fa-bars ms-1"></i>
      </button>
      <div
        id="navbarResponsive"
        class="collapse navbar-collapse"
        :class="{
          show: isCollapseShow
        }"
      >
        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
