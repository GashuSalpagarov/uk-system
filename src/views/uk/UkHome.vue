<template>
  <v-container class="uk-home-bg pa-0" fluid>
    <div class="uk-home-header mb-6">
      <div class="dashboard-main-title">Дашборд</div>
    </div>
    <v-row class="mb-2" justify="start" align="stretch" no-gutters>
      <v-col cols="12" sm="4" md="2" class="pr-2 pb-2">
        <div class="metric-card">
          <div class="metric-value">12</div>
          <div class="metric-label">Новые обращения</div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="2" class="pr-2 pb-2">
        <div class="metric-card">
          <div class="metric-value">35</div>
          <div class="metric-label">В работе</div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="2" class="pr-2 pb-2">
        <div class="metric-card">
          <div class="metric-value">5</div>
          <div class="metric-label">Просрочено</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="pr-2 pb-2">
        <div class="metric-card">
          <div class="metric-value">20</div>
          <div class="metric-label">Домов в управлении</div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="pb-2">
        <div class="metric-card">
          <div class="metric-value">8</div>
          <div class="metric-label">Работ на сегодня</div>
        </div>
      </v-col>
    </v-row>
    <div class="dashboard-section-title mt-6 mb-2">Последние обращения</div>
    <v-card class="activity-table-card pa-0">
      <v-table class="activity-table" density="compact">
        <thead>
          <tr>
            <th class="activity-th">ID</th>
            <th class="activity-th">Дом</th>
            <th class="activity-th">Квартира</th>
            <th class="activity-th">Статус</th>
            <th class="activity-th">Дата создания</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="req in requests" :key="req.id">
            <td class="activity-td">
              <span class="request-link" @click="goToRequest(req.id)">{{ req.id }}</span>
            </td>
            <td class="activity-td">
              <span class="activity-link" @click="goToProperty(req.house)">{{ req.house }}</span>
            </td>
            <td class="activity-td">{{ req.unit }}</td>
            <td class="activity-td">
              <span :class="['status-chip', req.statusClass]">{{ req.status }}</span>
            </td>
            <td class="activity-td">{{ req.date }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const requests = [
  { id: 'REQ1234', house: 'ул. Ленина, 25', unit: 'Кв. 201', status: 'Новое', statusClass: 'status-open', date: '2023-08-15' },
  { id: 'REQ1235', house: 'ул. Пушкина, 10', unit: 'Кв. 105', status: 'В работе', statusClass: 'status-inprogress', date: '2023-08-14' },
  { id: 'REQ1236', house: 'ул. Гагарина, 5', unit: 'Кв. 302', status: 'Закрыто', statusClass: 'status-closed', date: '2023-08-13' },
  { id: 'REQ1237', house: 'ул. Ленина, 25', unit: 'Кв. 101', status: 'Новое', statusClass: 'status-open', date: '2023-08-12' },
  { id: 'REQ1238', house: 'ул. Пушкина, 10', unit: 'Кв. 205', status: 'В работе', statusClass: 'status-inprogress', date: '2023-08-11' },
]

function goToProperty(address: string) {
  router.push({ path: '/uk/property', query: { address } })
}

function goToRequest(id: string) {
  router.push({ path: '/uk/request', query: { id } })
}
</script>

<style scoped>
.uk-home-bg {
  background: #f7f8fa;
}
.uk-home-header {
  padding-left: 8px;
  padding-right: 8px;
}
.dashboard-main-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.5em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.metric-card {
  background: #fff;
  border: 1.5px solid #e3e6ea;
  border-radius: 10px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 18px 18px 12px 18px;
  box-shadow: none;
}
.metric-card:nth-child(1) {
  background: #eaf2fb;
}
.metric-card:nth-child(2) {
  background: #fffbe6;
}
.metric-card:nth-child(3) {
  background: #fdeaea;
}
.metric-card:nth-child(4) {
  background: #eafaf1;
}
.metric-card:nth-child(5) {
  background: #f3eafd;
}
.metric-value {
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 2.1rem;
  font-weight: 600;
  margin-bottom: 2px;
}
.metric-card:nth-child(1) .metric-value {
  color: #1976d2;
}
.metric-card:nth-child(2) .metric-value {
  color: #fbc02d;
}
.metric-card:nth-child(3) .metric-value {
  color: #e53935;
}
.metric-card:nth-child(4) .metric-value {
  color: #43a047;
}
.metric-card:nth-child(5) .metric-value {
  color: #7c4dff;
}
.metric-label {
  font-size: 1.01rem;
  color: #7a8599;
  font-weight: 400;
}
.dashboard-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.7em;
  margin-top: 1.2em;
  color: #3a3d44;
}
.activity-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  overflow-x: auto;
}
.activity-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
}
.activity-th, .activity-td {
  padding: 12px 14px;
  text-align: left;
  border-bottom: 1px solid #f0f1f3;
  font-weight: 400;
}
.activity-th {
  color: #23272f;
  font-weight: 600;
  background: #f7f8fa;
  font-size: 1.01rem;
}
.activity-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
  transition: background 0.15s;
}
.activity-link {
  color: #5b7bb2;
  cursor: pointer;
  text-decoration: underline;
}
.status-chip {
  display: inline-block;
  min-width: 80px;
  text-align: center;
  border-radius: 16px;
  padding: 2px 14px;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-weight: 500;
  border: 1px solid #e3e6ea;
}
.status-open {
  color: #1976d2;
  background: #eaf2fb;
  border-color: #b6d4fa;
}
.status-inprogress {
  color: #fbc02d;
  background: #fffbe6;
  border-color: #ffe082;
}
.status-closed {
  color: #7a8599;
  background: #f4f5f7;
  border-color: #e3e6ea;
}
.status-overdue {
  color: #e53935;
  background: #fdeaea;
  border-color: #ffcdd2;
}
.activity-table tbody tr:hover .activity-td {
  background: #eaf2fb;
}
.activity-table tbody tr.status-inprogress:hover .activity-td {
  background: #fffbe6;
}
.activity-table tbody tr.status-closed:hover .activity-td {
  background: #f4f5f7;
}
.activity-table tbody tr.status-overdue:hover .activity-td {
  background: #fdeaea;
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
  .metric-card {
    min-height: 70px;
    padding: 12px 8px 8px 12px;
  }
  .metric-value {
    font-size: 1.4rem;
  }
  .dashboard-main-title {
    font-size: 1.3rem;
  }
  .dashboard-section-title {
    font-size: 1.05rem;
  }
  .activity-th, .activity-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 