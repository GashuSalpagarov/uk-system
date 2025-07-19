<template>
  <v-container class="admin-violations-bg pa-0" fluid>
    <div class="admin-violations-header mb-6">
      <div class="admin-violations-title">Нарушения и штрафы</div>
    </div>
    <v-card class="admin-table-card pa-0 mb-8">
      <v-table class="admin-table" density="compact">
        <thead>
          <tr>
            <th class="admin-th">УК</th>
            <th class="admin-th">Нарушение</th>
            <th class="admin-th">Дата</th>
            <th class="admin-th">Статус</th>
            <th class="admin-th">Сумма штрафа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in violations" :key="v.id">
            <td class="admin-td"><span class="admin-link" @click="goToCompany(v)">{{ v.company }}</span></td>
            <td class="admin-td">{{ v.violation }}</td>
            <td class="admin-td">{{ v.date }}</td>
            <td class="admin-td"><span :class="['admin-status-chip', v.statusClass]">{{ v.status }}</span></td>
            <td class="admin-td">{{ v.fine }} ₽</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const violations = [
  { id: 1, company: 'ООО "ДомСервис"', violation: 'Несвоевременное устранение аварии', date: '2024-07-10', status: 'Выполнено', statusClass: 'status-done', fine: 5000 },
  { id: 2, company: 'УК "Комфорт"', violation: 'Нарушение сроков уборки', date: '2024-07-12', status: 'В процессе', statusClass: 'status-inprogress', fine: 3000 },
  { id: 3, company: 'УК "Городская"', violation: 'Отсутствие отчёта по работам', date: '2024-07-15', status: 'Не оплачено', statusClass: 'status-unpaid', fine: 7000 },
  { id: 4, company: 'УК "Жилфонд"', violation: 'Нарушение регламента', date: '2024-07-18', status: 'Выполнено', statusClass: 'status-done', fine: 2000 },
  { id: 5, company: 'УК "СервисПлюс"', violation: 'Просрочка по заявке', date: '2024-07-20', status: 'В процессе', statusClass: 'status-inprogress', fine: 4000 },
]
function goToCompany(v: typeof violations[0]) {
  router.push('/admin/company')
}
</script>

<style scoped>
.admin-violations-bg {
  background: #f7f8fa;
}
.admin-violations-header {
  margin-bottom: 18px;
}
.admin-violations-title {
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
.admin-status-chip {
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
.status-done {
  color: #43a047;
  background: #eafaf1;
  border-color: #b2f2d6;
}
.status-inprogress {
  color: #fbc02d;
  background: #fffbe6;
  border-color: #ffe082;
}
.status-unpaid {
  color: #e53935;
  background: #fdeaea;
  border-color: #ffcdd2;
}
@media (max-width: 900px) {
  .admin-violations-title {
    font-size: 1.3rem;
  }
  .admin-th, .admin-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 