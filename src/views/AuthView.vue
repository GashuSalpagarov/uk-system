<template>
  <v-container class="d-flex flex-column justify-center align-center pa-0 full-center-container" fluid>
    <div class="d-flex flex-row align-center justify-center mb-1" style="gap: 16px;">
      <v-icon size="48" color="primary">mdi-home</v-icon>
      <h1 class="text-h4 font-weight-bold mb-0">Система контроля ЖКХ</h1>
    </div>
    <v-card elevation="2" class="pa-6 mt-6" rounded="lg">
      <v-tabs v-model="tab" grow class="mb-4 small-tabs" background-color="transparent" slider-color="primary">
        <v-tab v-for="(role, i) in roles" :key="role.label" :value="i" class="small-tab">
          <v-icon size="18" class="mr-1">{{ role.icon }}</v-icon>
          {{ role.label }}
        </v-tab>
      </v-tabs>
      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="form.login"
          :label="'Логин'"
          :placeholder="roles[tab].loginPlaceholder"
          variant="outlined"
          density="comfortable"
          hide-details
          class="mb-3"
          rounded="lg"
          autocomplete="off"
          required
        />
        <v-text-field
          v-model="form.password"
          :label="'Пароль'"
          placeholder="Введите пароль"
          type="password"
          variant="outlined"
          density="comfortable"
          hide-details
          class="mb-1"
          rounded="lg"
          autocomplete="off"
          required
        />
        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          class="mt-2"
          rounded="lg"
          style="font-weight:600; text-transform:none;"
        >
          Войти
        </v-btn>
      </v-form>
    </v-card>
    <div class="mt-8 text-caption text-center" style="color: #aaa;">
      © 2024 Система контроля ЖКХ. Все права защищены.
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tab = ref(0)

const roles = [
  {
    value: 'resident',
    label: 'Жильцы',
    icon: 'mdi-account',
    loginPlaceholder: 'Логин',
    route: '/resident/home',
  },
  {
    value: 'uk',
    label: 'УК',
    icon: 'mdi-office-building',
    loginPlaceholder: 'Название компании',
    route: '/uk/home',
  },
  {
    value: 'admin',
    label: 'Мэрия',
    icon: 'mdi-city-variant-outline',
    loginPlaceholder: 'Логин администратора',
    route: '/admin/home',
  },
]

const form = reactive({
  login: '',
  password: '',
})

function handleLogin() {
  // Demo: just route to dashboard
  localStorage.setItem('role', roles[tab.value].value)
  router.push(roles[tab.value].route)
}
</script>

<style scoped>
.small-tabs {
  min-height: 26px;
}
.small-tab {
  font-size: 0.82rem;
  min-height: 26px !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 5px !important;
  padding-right: 5px !important;
}
.full-center-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (max-width: 600px) {
  .full-center-container {
    padding: 0 4vw;
  }
  .mb-1 {
    margin-bottom: 0.5rem !important;
  }
  .pa-6 {
    padding: 1.2rem !important;
  }
  .small-tabs {
    min-height: 22px;
  }
  .small-tab {
    font-size: 0.75rem;
    min-height: 22px !important;
    padding-left: 2px !important;
    padding-right: 2px !important;
  }
  .d-flex.flex-row.align-center.justify-center.mb-1 {
    gap: 8px !important;
  }
  .d-flex.flex-row.align-center.justify-center.mb-1 .v-icon {
    font-size: 32px !important;
    min-width: 32px !important;
    min-height: 32px !important;
  }
  .d-flex.flex-row.align-center.justify-center.mb-1 h1 {
    font-size: 1.1rem !important;
  }
  .v-card.pa-6 {
    max-width: 98vw !important;
    min-width: 0 !important;
  }
  .text-subtitle-1 {
    font-size: 0.98rem !important;
  }
}
</style> 