<template>
  <v-container class="admin-companies-bg pa-0" fluid>
    <div class="admin-companies-header mb-6">
      <div class="admin-companies-title">Управляющие компании</div>
    </div>
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
            <td class="admin-td"><span class="admin-link" @click="goToCompany(uk)">{{ uk.name }}</span></td>
            <td class="admin-td">{{ uk.phone }}</td>
            <td class="admin-td">{{ uk.email }}</td>
            <td class="admin-td">{{ uk.houses }}</td>
            <td class="admin-td">{{ uk.activeRequests }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const companies = [
  { name: 'ООО "ДомСервис"', phone: '+7 900 123-45-67', email: 'info@domserv.ru', houses: 34, activeRequests: 5 },
  { name: 'УК "Комфорт"', phone: '+7 900 234-56-78', email: 'contact@komfort.ru', houses: 21, activeRequests: 2 },
  { name: 'УК "Городская"', phone: '+7 900 345-67-89', email: 'city@ukgorod.ru', houses: 18, activeRequests: 0 },
  { name: 'УК "Жилфонд"', phone: '+7 900 456-78-90', email: 'office@zhilfond.ru', houses: 27, activeRequests: 3 },
  { name: 'УК "СервисПлюс"', phone: '+7 900 567-89-01', email: 'plus@serviceplus.ru', houses: 11, activeRequests: 1 },
]
function goToCompany(uk: typeof companies[0]) {
  router.push('/admin/company')
}
</script>

<style scoped>
.admin-companies-bg {
  background: #f7f8fa;
}
.admin-companies-header {
  margin-bottom: 18px;
}
.admin-companies-title {
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
@media (max-width: 900px) {
  .admin-companies-title {
    font-size: 1.3rem;
  }
  .admin-th, .admin-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 