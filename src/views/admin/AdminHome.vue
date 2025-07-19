<template>
  <v-container class="admin-dashboard-bg pa-0" fluid>
    <div class="admin-dashboard-header mb-6">
      <div class="admin-dashboard-title">Дашборд</div>
    </div>
    <v-row class="admin-metrics-row" justify="start" align="stretch" no-gutters>
      <v-col cols="12" sm="6" md="2" class="pr-2 pb-2">
        <div class="admin-metric-card">
          <div class="admin-metric-label">Всего объектов</div>
          <div class="admin-metric-value">150</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="pr-2 pb-2">
        <div class="admin-metric-card">
          <div class="admin-metric-label">Активных УК</div>
          <div class="admin-metric-value">10</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="pr-2 pb-2">
        <div class="admin-metric-card">
          <div class="admin-metric-label">Новых обращений</div>
          <div class="admin-metric-value">25</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="pr-2 pb-2">
        <div class="admin-metric-card">
          <div class="admin-metric-label">Просрочено задач</div>
          <div class="admin-metric-value">8</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="2" class="pb-2">
        <div class="admin-metric-card">
          <div class="admin-metric-label">Нарушений за месяц</div>
          <div class="admin-metric-value">3</div>
        </div>
      </v-col>
    </v-row>
    <div class="admin-section-title mt-10 mb-2">Управляющие компании</div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">УК</th>
            <th class="admin-th">Телефон</th>
            <th class="admin-th">E-mail</th>
            <th class="admin-th">Кол-во домов</th>
            <th class="admin-th">Активных обращений</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="uk in companies" :key="uk.name">
            <td class="admin-td">
              <span class="admin-link" @click="goToCompany(uk)">{{ uk.name }}</span>
            </td>
            <td class="admin-td">{{ uk.phone }}</td>
            <td class="admin-td">{{ uk.email }}</td>
            <td class="admin-td">{{ uk.houses }}</td>
            <td class="admin-td">{{ uk.activeRequests }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <div class="admin-section-title mt-10 mb-2">Запланированные работы</div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">Задача</th>
            <th class="admin-th">Объект</th>
            <th class="admin-th">Дата</th>
            <th class="admin-th">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td class="admin-td"><span class="admin-link" @click="goToRequest(task.id)">{{ task.title }}</span></td>
            <td class="admin-td"><span class="admin-link" @click="goToProperty(task)">{{ task.property }}</span></td>
            <td class="admin-td">{{ task.date }}</td>
            <td class="admin-td"><span class="admin-status-chip">Запланировано</span></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <div class="admin-section-title mt-10 mb-2">Дома в управлении</div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">Адрес</th>
            <th class="admin-th">Жильцов</th>
            <th class="admin-th">Обращений</th>
            <th class="admin-th">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.address">
            <td class="admin-td">
              <span class="admin-link" @click="goToProperty(house)">{{ house.address }}</span>
            </td>
            <td class="admin-td">{{ house.residents }}</td>
            <td class="admin-td">{{ house.requests }}</td>
            <td class="admin-td"><span class="admin-status-chip-green">Активен</span></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
// Мок-метрики, всё статично
const companies = [
  { name: 'ООО "ДомСервис"', phone: '+7 900 123-45-67', email: 'info@domserv.ru', houses: 34, activeRequests: 5 },
  { name: 'УК "Комфорт"', phone: '+7 900 234-56-78', email: 'contact@komfort.ru', houses: 21, activeRequests: 2 },
  { name: 'УК "Городская"', phone: '+7 900 345-67-89', email: 'city@ukgorod.ru', houses: 18, activeRequests: 0 },
  { name: 'УК "Жилфонд"', phone: '+7 900 456-78-90', email: 'office@zhilfond.ru', houses: 27, activeRequests: 3 },
  { name: 'УК "СервисПлюс"', phone: '+7 900 567-89-01', email: 'plus@serviceplus.ru', houses: 11, activeRequests: 1 },
]
const tasks = [
  { id: 1, title: 'Сантехнический ремонт', property: 'ул. Кленовая, 123', date: '2024-07-20' },
  { id: 2, title: 'Электротехническое обслуживание', property: 'ул. Дубовая, 456', date: '2024-07-22' },
  { id: 3, title: 'Проверка вентиляции', property: 'ул. Сосновая, 789', date: '2024-07-25' },
  { id: 4, title: 'Благоустройство территории', property: 'ул. Ленина, 101', date: '2024-07-28' },
  { id: 5, title: 'Дератизация', property: 'ул. Березовая, 222', date: '2024-07-30' },
]
const houses = [
  { address: 'ул. Кленовая, 123', residents: 250, requests: 15 },
  { address: 'ул. Дубовая, 456', residents: 180, requests: 8 },
  { address: 'ул. Сосновая, 789', residents: 320, requests: 22 },
  { address: 'ул. Ленина, 101', residents: 150, requests: 5 },
  { address: 'ул. Березовая, 222', residents: 200, requests: 10 },
]
const router = useRouter()
function goToCompany(uk: { name: string, phone: string, email: string, houses: number, activeRequests: number }) {
  router.push('/admin/company')
}
function goToProperty(item: any) {
  router.push('/admin/property')
}
function goToRequest(id: number) {
  router.push({ path: '/admin/request', query: { id } })
}
</script>

<style scoped>
.admin-dashboard-bg {
  background: #f7f8fa;
}
.admin-dashboard-header {
  margin-bottom: 18px;
}
.admin-dashboard-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.admin-metrics-row {
  gap: 0;
}
.admin-metric-card {
  background: #fff;
  border: 1.5px solid #e3e6ea;
  border-radius: 14px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 28px 24px 18px 24px;
  box-shadow: none;
  transition: box-shadow 0.15s;
}
.admin-metric-label {
  font-size: 1.08rem;
  color: #7a8599;
  font-weight: 400;
  margin-bottom: 0.5em;
}
.admin-metric-value {
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 2.1rem;
  font-weight: 700;
  color: #23272f;
}
.admin-map-info-card {
  background: #fcfbf7;
  border-radius: 12px;
  border: 1.5px solid #ecebe3;
  box-shadow: none;
  margin-top: 32px;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.04rem;
}
.admin-map-title {
  display: flex;
  align-items: center;
  font-size: 1.13rem;
  font-weight: 600;
  color: #3a5ca8;
}
.admin-map-title-text {
  text-decoration: underline;
}
.admin-map-subtitle {
  font-size: 1.13rem;
  font-weight: 700;
  color: #23272f;
}
.admin-map-legend {
  margin-bottom: 0.7em;
}
.admin-map-info-list {
  font-size: 1.01rem;
  color: #23272f;
}
.admin-map-info-list ul {
  margin: 0.3em 0 0 1.2em;
  padding: 0;
  list-style: disc;
}
.admin-map-info-list li {
  margin-bottom: 0.2em;
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
.admin-property-card {
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  margin-bottom: 32px;
}
.admin-property-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.7em;
  color: #23272f;
}
.admin-property-map-wrap {
  width: 100%;
  margin-bottom: 1.2em;
}
.admin-property-map {
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  background: #e9eef5;
}
.admin-property-search {
  position: absolute;
  top: 18px;
  left: 18px;
  width: 60%;
  max-width: 420px;
  z-index: 2;
  background: #fff;
  border-radius: 18px;
  border: 1.5px solid #e3e6ea;
  padding: 8px 18px;
  font-size: 1.08rem;
  color: #23272f;
  outline: none;
  box-shadow: 0 2px 8px 0 rgba(60,60,60,0.04);
}
.admin-property-map-img {
  width: 100%;
  height: 180px;
  background: url('https://static-maps.yandex.ru/1.x/?ll=37.617635,55.755814&z=12&l=map&size=650,300') center center/cover no-repeat;
  filter: grayscale(0.1);
}
.admin-property-map-controls {
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}
.admin-property-addr {
  font-size: 1.13rem;
  margin-bottom: 0.2em;
}
.admin-property-brief {
  font-size: 1.01rem;
  color: #7a8599;
  margin-bottom: 0.2em;
}
.admin-property-img {
  border-radius: 10px;
  object-fit: cover;
}
.admin-property-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 1.2em;
}
.admin-property-th {
  color: #7a8599;
  font-weight: 500;
  background: #f7f8fa;
  padding: 12px 18px;
  width: 220px;
}
.admin-property-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
  padding: 12px 18px;
}
.admin-link {
  color: #5b7bb2;
  cursor: pointer;
  text-decoration: underline;
}
.admin-status-chip {
  display: inline-block;
  min-width: 80px;
  text-align: center;
  border-radius: 16px;
  padding: 2px 14px;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-weight: 500;
  background: #eaf2fb;
  color: #1976d2;
  border: 1px solid #b6d4fa;
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
@media (max-width: 900px) {
  .admin-dashboard-title {
    font-size: 1.3rem;
  }
  .admin-metric-card {
    min-height: 80px;
    padding: 14px 8px 10px 12px;
  }
  .admin-metric-label {
    font-size: 0.98rem;
  }
  .admin-metric-value {
    font-size: 1.3rem;
  }
  .admin-section-title {
    font-size: 1.05rem;
  }
  .admin-th, .admin-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
  .admin-property-title {
    font-size: 1.08rem;
  }
  .admin-property-map {
    height: 120px;
  }
  .admin-property-map-img {
    height: 120px;
  }
  .admin-property-th, .admin-property-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 