<template>
  <v-container class="resident-home-bg pa-0" fluid>
      <div class="d-flex justify-space-between align-center mb-6">
        <div>
          <h2 class="text-h4 font-weight-bold mb-1">Мой дом</h2>
          <div class="text-subtitle-1 mb-6" style="color: #7a8599">
            Просматривайте сведения о вашем доме и управляйте обращениями.
          </div>
        </div>

        <v-btn
          color="primary"
          size="default"
          style="min-width: 120px; padding: 0 18px; font-weight: 500"
          @click="goToSubmitAppeal"
        >
          <v-icon start>mdi-plus</v-icon>
          Новое обращение
        </v-btn>
      </div>

      <div class="d-flex flex-column flex-md-row gap-4">
        <v-card class="resident-info-card flex-1-1-0 mb-4 mb-md-0">
          <v-card-title class="font-weight-bold">Информация о доме</v-card-title>
          <v-divider />
          <v-list density="compact">
            <v-list-item>
              <v-list-item-title>Адрес</v-list-item-title>
              <v-list-item-subtitle>ул. Ленина, 25, г. Карачаевск</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Управляющая компания</v-list-item-title>
              <v-list-item-subtitle>
                <span class="uk-link" @click="goToUkCompany">ООО "Городская УК"</span>
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Количество квартир</v-list-item-title>
              <v-list-item-subtitle>120</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
        <v-card class="resident-requests-card flex-2-1-0">
          <v-card-title class="font-weight-bold">Активные обращения</v-card-title>
          <v-divider />
          <v-table class="resident-requests-table" density="compact">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Категория</th>
                <th class="text-left">Статус</th>
                <th class="text-left">Дата подачи</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="req in requests" :key="req.id">
                <td>
                  <span class="request-link" @click="goToRequest(req.id)">{{ req.id }}</span>
                </td>
                <td>{{ req.category }}</td>
                <td>
                  <v-chip
                    :color="req.statusColor"
                    size="small"
                    class="font-weight-bold"
                  >{{ req.status }}</v-chip>
                </td>
                <td>{{ req.date }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </div>
  </v-container>
</template>

<script setup lang="ts">
// Шаблон страницы resident/home на русском
import { useRouter } from 'vue-router'
const router = useRouter()
function goToSubmitAppeal() {
  router.push('/resident/submit-appeal')
}
function goToUkCompany() {
  router.push({ path: '/uk/company', query: { name: 'Городская УК' } })
}
const requests = [
  { id: 'REQ-2023-001', category: 'Сантехника', status: 'В работе', statusColor: '#00ba09', date: '2023-08-15' },
  { id: 'REQ-2023-002', category: 'Электрика', status: 'Открыто', statusColor: 'rgb(0 116 249)', date: '2023-08-20' },
  { id: 'REQ-2023-003', category: 'Отопление', status: 'Завершено', statusColor: '#e53935', date: '2023-08-25' },
]
function goToRequest(id: string) {
  router.push({ path: '/resident/request', query: { id } })
}
</script>

<style scoped>
.resident-info-card,
.resident-requests-card {
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(60, 60, 60, 0.04);
  min-width: 260px;
  margin-right: 0;
}
.resident-requests-table {
  background: transparent;
}
.gap-4 {
  gap: 1.5rem;
}
.flex-1-1-0 {
  flex: 1 1 0;
}
.flex-2-1-0 {
  flex: 2 1 0;
}
.uk-link {
  color: #1976d2;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
}
.uk-link:hover {
  color: #0d47a1;
}
.request-link {
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
}
.request-link:hover {
  color: #0d47a1;
}
@media (max-width: 900px) {
  .gap-4 {
    gap: 0.7rem;
  }
  .resident-info-card,
  .resident-requests-card {
    min-width: 0;
  }
}
@media (max-width: 600px) {
  .gap-4 {
    gap: 0.3rem;
  }
  .resident-info-card,
  .resident-requests-card {
    margin-bottom: 10px;
  }
  .flex-1-1-0,
  .flex-2-1-0 {
    min-width: 0;
  }
}
</style>
