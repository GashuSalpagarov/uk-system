<template>
  <v-container class="uk-houses-bg pa-0" fluid>
    <div class="uk-houses-header mb-2">
      <div class="houses-main-title">Дома в управлении</div>
      <div class="houses-subtitle">Информация о ваших домах и их текущем статусе.</div>
    </div>
    <v-card class="houses-table-card pa-0">
      <v-table class="houses-table" density="compact">
        <thead>
          <tr>
            <th class="houses-th">Дом</th>
            <th class="houses-th">Адрес</th>
            <th class="houses-th">Квартир</th>
            <th class="houses-th">Активных обращений</th>
            <th class="houses-th">Работ на сегодня</th>
            <th class="houses-th">Старший по дому</th>
            <th class="houses-th">Контакт</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="house in houses" :key="house.name">
            <td class="houses-td">{{ house.name }}</td>
            <td class="houses-td">
              <span class="houses-link" @click="goToProperty(house.address)">{{ house.address }}</span>
            </td>
            <td class="houses-td">{{ house.apartments }}</td>
            <td class="houses-td">{{ house.activeRequests }}</td>
            <td class="houses-td">{{ house.scheduledTasks }}</td>
            <td class="houses-td">{{ house.manager }}</td>
            <td class="houses-td houses-call"><span class="call-link">Позвонить</span></td>
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
  {
    name: 'ЖК Ленина',
    address: 'ул. Ленина, 25',
    apartments: 150,
    activeRequests: 5,
    scheduledTasks: 12,
    manager: 'Иван Иванов',
    phone: '+7 900 123-45-67',
  },
  {
    name: 'ЖК Пушкина',
    address: 'ул. Пушкина, 10',
    apartments: 80,
    activeRequests: 2,
    scheduledTasks: 8,
    manager: 'Петр Петров',
    phone: '+7 900 234-56-78',
  },
  {
    name: 'ЖК Гагарина',
    address: 'ул. Гагарина, 5',
    apartments: 200,
    activeRequests: 8,
    scheduledTasks: 15,
    manager: 'Мария Смирнова',
    phone: '+7 900 345-67-89',
  },
  {
    name: 'ЖК Вишневый',
    address: 'ул. Вишневая, 7',
    apartments: 120,
    activeRequests: 3,
    scheduledTasks: 10,
    manager: 'Алексей Кузнецов',
    phone: '+7 900 456-78-90',
  },
  {
    name: 'ЖК Березовый',
    address: 'ул. Березовая, 22',
    apartments: 90,
    activeRequests: 1,
    scheduledTasks: 7,
    manager: 'Екатерина Ли',
    phone: '+7 900 567-89-01',
  },
]
function goToProperty(address: string) {
  router.push({ path: '/uk/property', query: { address } })
}
</script>

<style scoped>
.uk-houses-bg {
  background: #f7f8fa;
}
.uk-houses-header {
  margin-bottom: 18px;
}
.houses-main-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.houses-subtitle {
  font-size: 1.08rem;
  color: #7a8599;
  margin-bottom: 1.2em;
}
.houses-table-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  overflow-x: auto;
}
.houses-table {
  width: 100%;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  font-size: 1.01rem;
  border-collapse: separate;
  border-spacing: 0;
}
.houses-th, .houses-td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f1f3;
  font-weight: 400;
}
.houses-th {
  color: #23272f;
  font-weight: 600;
  background: #f7f8fa;
  font-size: 1.01rem;
}
.houses-td {
  color: #23272f;
  background: #fff;
  font-size: 1.01rem;
}
.houses-call .call-link {
  color: #1976d2;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.15s;
}
.houses-call .call-link:hover {
  color: #0d47a1;
}
.houses-link {
  color: #1976d2;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
}
.houses-link:hover {
  color: #0d47a1;
}
@media (max-width: 900px) {
  .houses-main-title {
    font-size: 1.3rem;
  }
  .houses-subtitle {
    font-size: 0.98rem;
  }
  .houses-th, .houses-td {
    padding: 8px 6px;
    font-size: 0.97rem;
  }
}
</style> 