<template>
  <v-container class="requests-bg pa-0" fluid>
    <div class="d-flex justify-space-between align-center mb-8">
      <div>
        <h2 class="text-h4 font-weight-bold mb-1">Обращения</h2>
        <div class="text-subtitle-1 mb-6" style="color: #7a8599">
          Просматривайте и управляйте своими обращениями.
        </div>
      </div>
      <v-btn color="primary" size="default" style="min-width: 120px; padding: 0 18px; font-weight:500;" @click="goToNewRequest">
        <v-icon start>mdi-plus</v-icon>
        Новое обращение
      </v-btn>
    </div>
    <v-card class="requests-card pa-4">
      <v-tabs v-model="tab" color="primary" class="mb-4 requests-tabs">
        <v-tab value="all">Все</v-tab>
        <v-tab value="open">Открытые</v-tab>
        <v-tab value="closed">Закрытые</v-tab>
      </v-tabs>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        placeholder="Поиск по номеру, адресу или категории..."
        variant="outlined"
        class="mb-4"
        hide-details
      />
      <v-table class="requests-table" density="compact">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Адрес</th>
            <th class="text-left">Категория</th>
            <th class="text-left">Статус</th>
            <th class="text-left">Дата создания</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="req in filteredRequests" :key="req.id">
            <td>
              <span class="request-link" @click="goToDetail(req.id)">{{ req.id }}</span>
            </td>
            <td>{{ req.address }}</td>
            <td>{{ req.category }}</td>
            <td>
              <v-chip
                v-if="req.status === 'open'"
                color="rgb(0 116 249)"
                size="small"
                class="font-weight-bold"
              >Открыто</v-chip>
              <v-chip
                v-else
                color="#e53935"
                size="small"
                class="font-weight-bold"
              >Закрыто</v-chip>
            </td>
            <td>{{ req.date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tab = ref('all')
const search = ref('')
const requests = ref([
  { id: '#12345', address: 'ул. Ленина, 25, кв. 4Б', category: 'Сантехника', status: 'open', date: '2024-07-26' },
  { id: '#12346', address: 'ул. Мира, 2А, кв. 5', category: 'Электрика', status: 'closed', date: '2024-07-25' },
  { id: '#12347', address: 'ул. Пушкина, 10, кв. 1', category: 'Отопление', status: 'open', date: '2024-07-24' },
  { id: '#12348', address: 'ул. Гагарина, 3Д, кв. 7', category: 'Общие работы', status: 'closed', date: '2024-07-23' },
  { id: '#12349', address: 'ул. Кирова, 5Е, кв. 2', category: 'Благоустройство', status: 'open', date: '2024-07-22' },
])
const filteredRequests = computed(() => {
  let arr = requests.value
  if (tab.value === 'open') arr = arr.filter(r => r.status === 'open')
  if (tab.value === 'closed') arr = arr.filter(r => r.status === 'closed')
  if (search.value) {
    const s = search.value.toLowerCase()
    arr = arr.filter(r =>
      r.id.toLowerCase().includes(s) ||
      r.address.toLowerCase().includes(s) ||
      r.category.toLowerCase().includes(s)
    )
  }
  return arr
})
function goToNewRequest() {
  router.push('/resident/submit-appeal')
}
function goToDetail(id: string) {
  router.push({ path: '/resident/request', query: { id } })
}
</script>

<style scoped>
.requests-bg {
}
.requests-card {
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(60, 60, 60, 0.04);
  background: #fff;
}
.requests-tabs {
  min-height: 36px;
}
.requests-table {
  background: transparent;
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
@media (max-width: 600px) {
  .requests-card {
    padding: 1.2rem !important;
    max-width: 98vw !important;
  }
}
</style> 