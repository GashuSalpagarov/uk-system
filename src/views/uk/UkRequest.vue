<template>
  <v-container class="request-detail-bg pa-0" fluid>
    <div class="d-flex mb-6">
      <v-btn icon variant="text" class="mr-2" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2 class="text-h4 font-weight-bold mb-0">Обращение {{ request.id }}</h2>
      <v-chip
        :color="request.status === 'open' ? 'rgb(0 116 249)' : '#e53935'"
        :text-color="request.status === 'open' ? '#1976d2' : '#fff'"
        size="small"
        class="font-weight-bold ml-4"
      >
        {{ request.status === 'open' ? 'Открыто' : 'Закрыто' }}
      </v-chip>
    </div>
    <v-card class="request-detail-card pa-6">
      <div class="d-flex align-center mb-2">
        <v-icon color="primary" class="mr-2">mdi-wrench</v-icon>
        <span class="font-weight-bold">{{ request.category }}</span>
      </div>
      <div class="text-subtitle-2 mb-4" style="color:#7a8599">{{ request.address }}</div>
      <v-divider class="my-4" />
      <div class="mb-3">
        <span class="font-weight-bold">Дата создания: </span>{{ request.date }}
      </div>
      <div class="mb-3">
        <span class="font-weight-bold">Срочность: </span>
        <v-chip :color="urgencyColor(request.urgency)" size="small" class="font-weight-bold">
          {{ urgencyLabel(request.urgency) }}
        </v-chip>
      </div>
      <div class="mb-3">
        <span class="font-weight-bold">Описание: </span>{{ request.description }}
      </div>
      <div v-if="request.photos && request.photos.length" class="mb-2">
        <span class="font-weight-bold">Фото:</span>
        <div class="d-flex flex-row flex-wrap gap-4 mt-2">
          <v-img v-for="(photo, i) in request.photos" :key="i" :src="photo" max-width="120" max-height="90" class="rounded-lg elevation-1" />
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  window.history.length > 1 ? window.history.back() : router.push('/uk/home')
}
const request = {
  id: 'REQ1234',
  status: 'open',
  date: '2023-08-15',
  address: 'ул. Ленина, 25, кв. 201',
  category: 'Сантехника',
  urgency: 'urgent',
  description: 'Течет кран в ванной, требуется срочный ремонт. Вода не перекрывается.',
  photos: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  ],
}
function urgencyLabel(u: string) {
  if (u === 'normal') return 'Обычно'
  if (u === 'urgent') return 'Срочно'
  if (u === 'emergency') return 'Аварийно'
  return u
}
function urgencyColor(u: string) {
  if (u === 'normal') return '#e3f0ff'
  if (u === 'urgent') return '#ffe082'
  if (u === 'emergency') return '#e53935'
  return '#e3f0ff'
}
</script>

<style scoped>
.request-detail-card {
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(60, 60, 60, 0.04);
  background: #fff;
  max-width: 540px;
}
.gap-4 {
  gap: 1.5rem;
}
@media (max-width: 600px) {
  .request-detail-card {
    padding: 1.2rem !important;
    max-width: 98vw !important;
  }
}
</style> 