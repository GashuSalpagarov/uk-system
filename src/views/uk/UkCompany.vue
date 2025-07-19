<template>
  <v-container class="uk-company-bg pa-0" fluid>
    <div class="uk-company-header mb-6">
      <div class="uk-company-title">ООО "Городская УК"</div>
      <div class="uk-company-contacts mb-2">
        <span class="mr-6"><v-icon size="18" class="mr-1">mdi-phone</v-icon>+7 900 555-12-34</span>
        <span><v-icon size="18" class="mr-1">mdi-email-outline</v-icon>info@goroduk.ru</span>
      </div>
    </div>
    <div class="uk-section-title mb-2">Дома в управлении</div>
    <v-card class="uk-table-card pa-0 mb-8">
      <v-table class="uk-table" density="compact">
        <thead>
          <tr>
            <th class="uk-th">Адрес</th>
            <th class="uk-th">Квартир</th>
            <th class="uk-th">Жильцов</th>
            <th class="uk-th">Активных обращений</th>
            <th class="uk-th">Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.address">
            <td class="uk-td">{{ house.address }}</td>
            <td class="uk-td">{{ house.apartments }}</td>
            <td class="uk-td">{{ house.residents }}</td>
            <td class="uk-td">{{ house.activeRequests }}</td>
            <td class="uk-td"><span class="uk-status-chip-green">Активен</span></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const houses = [
  { address: 'ул. Ленина, 25', apartments: 120, residents: 350, activeRequests: 2 },
  { address: 'ул. Гагарина, 10', apartments: 80, residents: 200, activeRequests: 1 },
  { address: 'ул. Победы, 5', apartments: 60, residents: 150, activeRequests: 0 },
]
</script>

<style scoped>
.uk-company-bg {
  background: #f7f8fa;
}
.uk-company-header {
  margin-bottom: 18px;
}
.uk-company-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.uk-company-contacts {
  font-size: 1.08rem;
  color: #7a8599;
  margin-bottom: 1.2em;
  display: flex;
  align-items: center;
}
.uk-section-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.7em;
  margin-top: 1.2em;
  color: #3a3d44;
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
.uk-status-chip-green {
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
  .uk-company-title {
    font-size: 1.3rem;
  }
  .uk-section-title {
    font-size: 1.05rem;
  }
  .uk-th, .uk-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 