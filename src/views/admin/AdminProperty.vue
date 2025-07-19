<template>
  <v-container class="admin-property-bg pa-0" fluid>
    <div class="admin-property-header mb-6">
      <div class="admin-property-title">Обзор объекта</div>
    </div>
    <v-card class="admin-property-card pa-6 mb-8">
      <div class="admin-property-map-wrap mb-4">
        <div class="admin-property-map">
          <input class="admin-property-search" placeholder="Поиск по адресу или объекту" />
          <div class="admin-property-map-img"></div>
          <div class="admin-property-map-controls">
            <v-btn icon size="small" variant="text"><v-icon>mdi-plus</v-icon></v-btn>
            <v-btn icon size="small" variant="text"><v-icon>mdi-minus</v-icon></v-btn>
            <v-btn icon size="small" variant="text"><v-icon>mdi-crosshairs-gps</v-icon></v-btn>
          </div>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-4">
        <div>
          <div class="admin-property-addr font-weight-bold">ул. Ленина, 25</div>
          <div class="admin-property-brief">Управляющая компания: ООО "ДомСервис" · Квартир: 24 · Активных обращений: 2 · Статус: Все задачи выполнены</div>
        </div>
        <v-img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80" width="180" height="110" class="admin-property-img" cover></v-img>
      </div>
      <v-table class="admin-property-table" density="compact">
        <tbody>
          <tr>
            <td class="admin-property-th">Адрес</td>
            <td class="admin-property-td">ул. Ленина, 25, г. Москва</td>
          </tr>
          <tr>
            <td class="admin-property-th">Управляющая компания</td>
            <td class="admin-property-td">ООО "ДомСервис"</td>
          </tr>
          <tr>
            <td class="admin-property-th">Количество квартир</td>
            <td class="admin-property-td">24</td>
          </tr>
          <tr>
            <td class="admin-property-th">Активных обращений</td>
            <td class="admin-property-td">2</td>
          </tr>
          <tr>
            <td class="admin-property-th">Последние работы</td>
            <td class="admin-property-td">Все задачи выполнены</td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
// Мок-данные, всё статично
</script>

<style scoped>
.admin-property-bg {
  background: #f7f8fa;
}
.admin-property-header {
  margin-bottom: 18px;
}
.admin-property-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.admin-property-card {
  background: #fff;
  border-radius: 16px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  margin-bottom: 32px;
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
@media (max-width: 900px) {
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