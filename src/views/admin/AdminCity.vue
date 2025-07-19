<template>
  <v-container class="admin-city-bg pa-0" fluid>
    <div class="admin-city-header mb-6">
      <div class="admin-city-title">Город</div>
    </div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">Адрес</th>
            <th class="admin-th">УК</th>
            <th class="admin-th">Квартир</th>
            <th class="admin-th">Жильцов</th>
            <th class="admin-th">Активных обращений</th>
            <th class="admin-th">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.address">
            <td class="admin-td"><span class="admin-link" @click="goToProperty(house)">{{ house.address }}</span></td>
            <td class="admin-td"><span class="admin-link" @click="goToCompany(house)">{{ house.company }}</span></td>
            <td class="admin-td">{{ house.apartments }}</td>
            <td class="admin-td">{{ house.residents }}</td>
            <td class="admin-td">{{ house.activeRequests }}</td>
            <td class="admin-td"><span class="admin-status-chip-green">Активен</span></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const houses = [
  { address: 'ул. Кленовая, 123', company: 'ООО "ДомСервис"', apartments: 80, residents: 250, activeRequests: 3 },
  { address: 'ул. Дубовая, 456', company: 'УК "Комфорт"', apartments: 60, residents: 180, activeRequests: 1 },
  { address: 'ул. Сосновая, 789', company: 'УК "Городская"', apartments: 120, residents: 320, activeRequests: 0 },
  { address: 'ул. Ленина, 101', company: 'УК "Жилфонд"', apartments: 50, residents: 150, activeRequests: 2 },
  { address: 'ул. Березовая, 222', company: 'УК "СервисПлюс"', apartments: 70, residents: 200, activeRequests: 0 },
  { address: 'ул. Полевая, 15', company: 'ООО "ДомСервис"', apartments: 90, residents: 210, activeRequests: 1 },
  { address: 'ул. Парковая, 8', company: 'УК "Комфорт"', apartments: 110, residents: 270, activeRequests: 4 },
  { address: 'ул. Центральная, 3', company: 'УК "Городская"', apartments: 130, residents: 350, activeRequests: 0 },
  { address: 'ул. Молодёжная, 17', company: 'УК "Жилфонд"', apartments: 60, residents: 160, activeRequests: 2 },
  { address: 'ул. Садовая, 29', company: 'УК "СервисПлюс"', apartments: 75, residents: 190, activeRequests: 0 },
]
function goToProperty(house: typeof houses[0]) {
  router.push('/admin/property')
}
function goToCompany(house: typeof houses[0]) {
  router.push('/admin/company')
}
</script>

<style scoped>
.admin-city-bg {
  background: #f7f8fa;
}
.admin-city-header {
  margin-bottom: 18px;
}
.admin-city-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
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
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}
.admin-link:hover {
  color: #0056b3;
  text-decoration: underline;
}
@media (max-width: 900px) {
  .admin-city-title {
    font-size: 1.3rem;
  }
  .admin-th, .admin-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 