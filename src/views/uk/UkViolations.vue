<template>
  <v-container class="uk-violations-bg pa-0" fluid>
    <div class="uk-violations-header mb-6">
      <div class="uk-violations-title">Нарушения и штрафы</div>
    </div>
    <v-card class="uk-table-card pa-0 mb-8">
      <v-table class="uk-table" density="compact">
        <thead>
          <tr>
            <th class="uk-th">Нарушение</th>
            <th class="uk-th">Дата</th>
            <th class="uk-th">Статус</th>
            <th class="uk-th">Сумма штрафа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="v in violations" :key="v.id">
            <td class="uk-td">{{ v.violation }}</td>
            <td class="uk-td">{{ v.date }}</td>
            <td class="uk-td"><span :class="['uk-status-chip', v.statusClass]">{{ v.status }}</span></td>
            <td class="uk-td">{{ v.fine }} ₽</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const violations = [
  { id: 1, violation: 'Несвоевременное устранение аварии', date: '2024-07-10', status: 'Выполнено', statusClass: 'status-done', fine: 5000 },
  { id: 2, violation: 'Нарушение сроков уборки', date: '2024-07-12', status: 'В процессе', statusClass: 'status-inprogress', fine: 3000 },
  { id: 3, violation: 'Отсутствие отчёта по работам', date: '2024-07-15', status: 'Не оплачено', statusClass: 'status-unpaid', fine: 7000 },
  { id: 4, violation: 'Нарушение регламента', date: '2024-07-18', status: 'Выполнено', statusClass: 'status-done', fine: 2000 },
  { id: 5, violation: 'Просрочка по заявке', date: '2024-07-20', status: 'В процессе', statusClass: 'status-inprogress', fine: 4000 },
]
</script>

<style scoped>
.uk-violations-bg {
  background: #f7f8fa;
}
.uk-violations-header {
  margin-bottom: 18px;
}
.uk-violations-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.uk-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  overflow-x: auto;
}
.uk-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
}
.uk-th, .uk-td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f1f3;
  font-weight: 400;
}
.uk-th {
  color: #23272f;
  font-weight: 600;
  background: #f7f8fa;
  font-size: 1.01rem;
}
.uk-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
}
.uk-status-chip {
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
  .uk-violations-title {
    font-size: 1.3rem;
  }
  .uk-th, .uk-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 