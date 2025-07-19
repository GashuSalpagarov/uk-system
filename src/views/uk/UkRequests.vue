<template>
  <v-container class="uk-requests-bg pa-0" fluid>
    <div class="uk-requests-header mb-2">
      <div class="requests-main-title">Входящие обращения</div>
      <div class="requests-subtitle">Управляйте и отслеживайте все обращения жильцов.</div>
    </div>
    <v-card class="requests-table-card pa-0">
      <v-table class="requests-table" density="compact">
        <thead>
          <tr>
            <th class="requests-th">Объект</th>
            <th class="requests-th">Обращение</th>
            <th class="requests-th">Статус</th>
            <th class="requests-th">Срочность</th>
            <th class="requests-th">Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="req in requests" :key="req.id">
            <td class="requests-td">{{ req.property }}</td>
            <td class="requests-td"><span class="requests-link" @click="goToRequest(req.id)">{{ req.title }}</span></td>
            <td class="requests-td"><span :class="['status-chip', req.statusClass]">{{ req.status }}</span></td>
            <td class="requests-td"><span :class="['urgency-chip', req.urgencyClass]">{{ req.urgency }}</span></td>
            <td class="requests-td">{{ req.date }}</td>
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
  {
    id: 1,
    property: 'ул. Ленина, д. 25, кв. 101',
    title: 'Течет кран на кухне',
    status: 'Новое',
    statusClass: 'status-open',
    urgency: 'Высокая',
    urgencyClass: 'urgency-high',
    date: '2023-08-15',
  },
  {
    id: 2,
    property: 'ул. Пушкина, д. 10, кв. 205',
    title: 'Не работает лифт',
    status: 'В работе',
    statusClass: 'status-inprogress',
    urgency: 'Критичная',
    urgencyClass: 'urgency-critical',
    date: '2023-08-14',
  },
  {
    id: 3,
    property: 'ул. Гагарина, д. 5, кв. 302',
    title: 'Не греет батарея',
    status: 'Закрыто',
    statusClass: 'status-closed',
    urgency: 'Средняя',
    urgencyClass: 'urgency-medium',
    date: '2023-08-12',
  },
  {
    id: 4,
    property: 'ул. Ленина, д. 25, кв. 102',
    title: 'Засор в раковине',
    status: 'Новое',
    statusClass: 'status-open',
    urgency: 'Низкая',
    urgencyClass: 'urgency-low',
    date: '2023-08-10',
  },
  {
    id: 5,
    property: 'ул. Пушкина, д. 10, кв. 206',
    title: 'Проблемы с электрикой',
    status: 'В работе',
    statusClass: 'status-inprogress',
    urgency: 'Высокая',
    urgencyClass: 'urgency-high',
    date: '2023-08-08',
  },
]
function goToRequest(id: number) {
  router.push({ path: '/uk/request', query: { id } })
}
</script>

<style scoped>
.uk-requests-bg {
  background: #f7f8fa;
}
.uk-requests-header {
  margin-bottom: 18px;
}
.requests-main-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.requests-subtitle {
  font-size: 1.08rem;
  color: #7a8599;
  margin-bottom: 1.2em;
}
.requests-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  overflow-x: auto;
}
.requests-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
}
.requests-th, .requests-td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f1f3;
  font-weight: 400;
}
.requests-th {
  color: #23272f;
  font-weight: 600;
  background: #f7f8fa;
  font-size: 1.01rem;
}
.requests-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
}
.requests-link {
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
  color: #43a047;
  background: #eafaf1;
  border-color: #b2f2d6;
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
.urgency-chip {
  display: inline-block;
  min-width: 70px;
  text-align: center;
  border-radius: 16px;
  padding: 2px 14px;
  font-size: 0.98rem;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-weight: 500;
  border: 1px solid #e3e6ea;
}
.urgency-high {
  color: #fbc02d;
  background: #fffbe6;
  border-color: #ffe082;
}
.urgency-critical {
  color: #e53935;
  background: #fdeaea;
  border-color: #ffcdd2;
}
.urgency-medium {
  color: #1976d2;
  background: #eaf2fb;
  border-color: #b6d4fa;
}
.urgency-low {
  color: #43a047;
  background: #eafaf1;
  border-color: #b2f2d6;
}
@media (max-width: 900px) {
  .requests-main-title {
    font-size: 1.3rem;
  }
  .requests-subtitle {
    font-size: 0.98rem;
  }
  .requests-th, .requests-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 