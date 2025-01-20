<template>
  <div class="main-layout">
    <header>
      <div class="header-content">HEADER</div>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="footer-content">FOOTER</div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
}

header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.header-content {
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-weight: bold;
}

footer {
  position: sticky;
  bottom: 0;
  z-index: 100;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  width: 100%;
}

.footer-content {
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #6c757d;
}
</style>
