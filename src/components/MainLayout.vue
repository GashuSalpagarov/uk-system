<template>
  <v-app>
    <v-app-bar color="#fff" flat class="main-header" elevation="0">
      <div class="d-flex align-center flex-grow-1">
        <v-icon color="primary" class="mr-2">mdi-home</v-icon>
        <span class="font-weight-bold text-h6 mr-8">Система контроля ЖКХ</span>
        <div class="d-flex align-center flex-grow-1 justify-center main-nav">
          <template v-if="role === 'resident'">
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/resident/home') }"
              @click="goTo('/resident/home')"
            >Мой дом</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/resident/requests') }"
              @click="goTo('/resident/requests')"
            >Обращения</v-btn>
            <v-btn variant="text" class="main-nav-link" disabled>Платежи</v-btn>
            <v-btn variant="text" class="main-nav-link" disabled>Контакты</v-btn>
          </template>
          <template v-else-if="role === 'uk'">
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/uk/home') }"
              @click="goTo('/uk/home')"
            >Дашборд</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/uk/houses') }"
              @click="goTo('/uk/houses')"
            >Дома</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/uk/requests') }"
              @click="goTo('/uk/requests')"
            >Обращения</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/uk/calendar') }"
              @click="goTo('/uk/calendar')"
            >Календарь</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/uk/violations') }"
              @click="goTo('/uk/violations')"
            >Нарушения</v-btn>
          </template>
          <template v-else-if="role === 'admin'">
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/admin/home') }"
              @click="goTo('/admin/home')"
            >Дашборд</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/admin/city') }"
              @click="goTo('/admin/city')"
            >Город</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/admin/companies') }"
              @click="goTo('/admin/companies')"
            >УК</v-btn>
            <v-btn
              variant="text"
              class="main-nav-link"
              :class="{ 'main-nav-link--active': isActive('/admin/violations') }"
              @click="goTo('/admin/violations')"
            >Нарушения</v-btn>
            <!-- Аналитика убрана -->
          </template>
        </div>
        <div class="main-account-label mr-4">
          <template v-if="role === 'resident'">ул. Ленина, 25</template>
          <template v-else-if="role === 'uk'">ООО "ДомСервис"</template>
          <template v-else-if="role === 'admin'">г. Черкесск</template>
        </div>
        <v-btn icon class="mr-2"><v-icon color="#8a99b3">mdi-bell-outline</v-icon></v-btn>
        <v-btn icon @click="logout" class="mr-2"><v-icon color="#8a99b3">mdi-logout</v-icon></v-btn>
      </div>
    </v-app-bar>
    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const router = useRouter()
const route = useRoute()
const role = ref('resident')
onMounted(() => {
  role.value = localStorage.getItem('role') || 'resident'
})
function logout() {
  localStorage.removeItem('role')
  router.push('/')
}
function goTo(path: string) {
  if (route.path !== path) router.push(path)
}
function isActive(path: string) {
  return route.path === path
}
// Шапка для всех страниц, кроме авторизации
</script>

<style scoped>
.main-header {
  border-radius: 0;
  background: #fff !important;
  box-shadow: 0 1px 0 0 #e5eaf2;
  min-height: 64px;
  padding-left: 24px;
  padding-right: 24px;
}
.main-nav {
  gap: 24px;
}
.main-nav-link {
  color: #7a8599;
  font-weight: 500;
  text-transform: none;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
  min-width: 0;
}
.main-nav-link--active {
  color: #1976d2;
  font-weight: 700;
}
.main-content {
  background: #f5f7fa;
  padding: 88px 32px 32px;
}
.main-account-label {
  font-size: 1.08rem;
  color: #23272f;
  font-weight: 600;
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 900px) {
  .main-header {
    padding-left: 8px;
    padding-right: 8px;
  }
  .main-nav {
    gap: 10px;
  }
}
@media (max-width: 600px) {
  .main-header {
    padding-left: 2px;
    padding-right: 2px;
    min-height: 48px;
  }
  .main-content {
    padding: 64px 24px 24px;
  }
  .main-nav {
    gap: 4px;
  }
  .main-nav-link {
    font-size: 0.98rem;
  }
}
</style> 