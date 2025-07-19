<template>
  <v-container class="admin-company-bg pa-0" fluid>
    <div class="admin-company-header mb-6">
      <div class="admin-company-title">ООО "ДомСервис"</div>
      <div class="admin-company-contacts mb-2">
        <span class="mr-6"><v-icon size="18" class="mr-1">mdi-phone</v-icon>+7 900 123-45-67</span>
        <span><v-icon size="18" class="mr-1">mdi-email-outline</v-icon>info@domserv.ru</span>
      </div>
    </div>
    <div class="admin-section-title mb-2">Дома в управлении</div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">Адрес</th>
            <th class="admin-th">Квартир</th>
            <th class="admin-th">Жильцов</th>
            <th class="admin-th">Активных обращений</th>
            <th class="admin-th">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.address">
            <td class="admin-td">
              <span class="admin-link" @click="goToProperty(house)">{{ house.address }}</span>
            </td>
            <td class="admin-td">{{ house.apartments }}</td>
            <td class="admin-td">{{ house.residents }}</td>
            <td class="admin-td">{{ house.activeRequests }}</td>
            <td class="admin-td"><span class="admin-status-chip-green">Активен</span></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <div class="admin-section-title mb-2">Обращения</div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">ID</th>
            <th class="admin-th">Адрес</th>
            <th class="admin-th">Категория</th>
            <th class="admin-th">Статус</th>
            <th class="admin-th">Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="req in requests" :key="req.id">
            <td class="admin-td"><span class="admin-link" @click="goToRequest(req.id)">{{ req.id }}</span></td>
            <td class="admin-td">{{ req.address }}</td>
            <td class="admin-td">{{ req.category }}</td>
            <td class="admin-td">{{ req.status }}</td>
            <td class="admin-td">{{ req.date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const houses = [
  { address: 'ул. Кленовая, 123', apartments: 80, residents: 250, activeRequests: 3 },
  { address: 'ул. Дубовая, 456', apartments: 60, residents: 180, activeRequests: 1 },
  { address: 'ул. Сосновая, 789', apartments: 120, residents: 320, activeRequests: 0 },
  { address: 'ул. Ленина, 101', apartments: 50, residents: 150, activeRequests: 2 },
  { address: 'ул. Березовая, 222', apartments: 70, residents: 200, activeRequests: 0 },
]
const requests = [
  { id: 'REQ-2024-001', address: 'ул. Кленовая, 123', category: 'Сантехника', status: 'Новое', date: '2024-07-20' },
  { id: 'REQ-2024-002', address: 'ул. Дубовая, 456', category: 'Электрика', status: 'В работе', date: '2024-07-22' },
  { id: 'REQ-2024-003', address: 'ул. Сосновая, 789', category: 'Отопление', status: 'Закрыто', date: '2024-07-25' },
  { id: 'REQ-2024-004', address: 'ул. Ленина, 101', category: 'Благоустройство', status: 'Новое', date: '2024-07-28' },
  { id: 'REQ-2024-005', address: 'ул. Березовая, 222', category: 'Общие работы', status: 'В работе', date: '2024-07-30' },
]
const router = useRouter()
function goToProperty(house: { address: string, apartments: number, residents: number, activeRequests: number }) {
  router.push('/admin/property')
}
function goToRequest(id: string) {
  router.push({ path: '/admin/request', query: { id } })
}
</script>

<style scoped>
.admin-company-bg {
  background: #f7f8fa;
}
.admin-company-header {
  margin-bottom: 18px;
}
.admin-company-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.admin-company-contacts {
  font-size: 1.08rem;
  color: #7a8599;
  margin-bottom: 1.2em;
  display: flex;
  align-items: center;
}
.admin-section-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.7em;
  margin-top: 1.2em;
  color: #3a3d44;
}
.admin-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  overflow-x: auto;
}
.admin-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
}
.admin-th, .admin-td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f1f3;
  font-weight: 400;
}
.admin-th {
  color: #23272f;
  font-weight: 600;
  background: #f7f8fa;
  font-size: 1.01rem;
}
.admin-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
}
.admin-status-chip-green {
  display: inline-block;
  min-width: 80px;
  text-align: center;
  border-radius: 16px;
  padding: 2px 14px;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-weight: 500;
  background: #eafaf1;
  color: #43a047;
  border: 1px solid #b2f2d6;
}
.admin-link {
  color: #007bff; /* Bootstrap primary color */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.admin-link:hover {
  color: #0056b3; /* Darker shade on hover */
  text-decoration: underline;
}
@media (max-width: 900px) {
  .admin-company-title {
    font-size: 1.3rem;
  }
  .admin-section-title {
    font-size: 1.05rem;
  }
  .admin-th, .admin-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 