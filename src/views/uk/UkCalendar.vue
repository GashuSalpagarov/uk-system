<template>
  <v-container class="uk-calendar-bg pa-0" fluid>
    <div class="uk-calendar-header mb-2">
      <div class="calendar-main-title">Календарь</div>
    </div>
    <v-card class="calendar-card pa-6 mb-6">
      <div class="calendar-months d-flex justify-space-between align-center mb-4">
        <v-btn icon variant="text" size="small" disabled><v-icon>mdi-chevron-left</v-icon></v-btn>
        <div class="calendar-month-label">Июль 2024</div>
        <div class="calendar-month-label">Август 2024</div>
        <v-btn icon variant="text" size="small" disabled><v-icon>mdi-chevron-right</v-icon></v-btn>
      </div>
      <div class="d-flex gap-8">
        <div class="calendar-grid">
          <div class="calendar-row calendar-days">
            <span v-for="(d, i) in days" :key="i" class="calendar-day-label">{{ d }}</span>
          </div>
          <div class="calendar-row" v-for="(row, rowIdx) in julyRows" :key="rowIdx">
            <span v-for="(cell, cellIdx) in row" :key="cellIdx" :class="['calendar-cell', { 'calendar-cell--today': cell === 5 }]">{{ cell || '' }}</span>
          </div>
        </div>
        <div class="calendar-grid">
          <div class="calendar-row calendar-days">
            <span v-for="(d, i) in days" :key="i" class="calendar-day-label">{{ d }}</span>
          </div>
          <div class="calendar-row" v-for="(row, rowIdx) in augustRows" :key="rowIdx">
            <span v-for="(cell, cellIdx) in row" :key="cellIdx" class="calendar-cell">{{ cell || '' }}</span>
          </div>
        </div>
      </div>
    </v-card>
    <div class="calendar-section-title mb-2">Сегодня</div>
    <v-card class="calendar-events-card pa-0 mb-6">
      <div v-for="event in todayEvents" :key="event.title" class="calendar-event-row d-flex align-center">
        <v-icon class="mr-3" size="28" color="#b0b8c9">{{ event.icon }}</v-icon>
        <div>
          <div class="calendar-event-title">{{ event.title }}</div>
          <div class="calendar-event-time">{{ event.time }}</div>
        </div>
      </div>
    </v-card>
    <div class="calendar-section-title mb-2">Ближайшие</div>
    <v-card class="calendar-events-card pa-0">
      <div v-for="event in upcomingEvents" :key="event.title" class="calendar-event-row d-flex align-center">
        <v-icon class="mr-3" size="28" color="#b0b8c9">{{ event.icon }}</v-icon>
        <div>
          <div class="calendar-event-title">{{ event.title }}</div>
          <div class="calendar-event-time">{{ event.time }}</div>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const days = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В']
// July 2024: starts on Monday, 31 days
const julyRows = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, '', '', '', ''],
]
// August 2024: starts on Thursday, 31 days
const augustRows = [
  ['', '', '', 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, ''],
]
const todayEvents = [
  {
    icon: 'mdi-home-outline',
    title: 'Осмотр дома на ул. Дубовая, 12',
    time: '10:00 - 11:00',
  },
  {
    icon: 'mdi-account-group-outline',
    title: 'Встреча с жильцами',
    time: '14:00 - 15:00',
  },
]
const upcomingEvents = [
  {
    icon: 'mdi-tools',
    title: 'Плановое обслуживание, ул. Сосновая, 45',
    time: '1 августа, 11:00 - 12:00',
  },
  {
    icon: 'mdi-account-outline',
    title: 'Обсуждение продления аренды',
    time: '2 августа, 15:00 - 16:00',
  },
]
</script>

<style scoped>
.uk-calendar-bg {
  background: #f7f8fa;
}
.uk-calendar-header {
  margin-bottom: 18px;
}
.calendar-main-title {
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.2em;
  letter-spacing: -0.5px;
  color: #2a2d34;
}
.calendar-card {
  background: #f8fafc;
  border-radius: 16px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  margin-bottom: 32px;
}
.calendar-months {
  font-size: 1.15rem;
  font-weight: 600;
  color: #23272f;
  gap: 32px;
}
.calendar-month-label {
  min-width: 120px;
  text-align: center;
}
.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-right: 32px;
}
.calendar-row {
  display: flex;
  flex-direction: row;
  gap: 2px;
}
.calendar-days {
  font-size: 1.01rem;
  color: #7a8599;
  font-weight: 600;
  margin-bottom: 2px;
}
.calendar-day-label {
  width: 32px;
  text-align: center;
}
.calendar-cell {
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 50%;
  background: #fff;
  color: #23272f;
  font-weight: 500;
  font-size: 1.01rem;
}
.calendar-cell--today {
  background: #dbeafe;
  color: #1976d2;
}
.calendar-section-title {
  font-size: 1.18rem;
  font-weight: 700;
  margin-bottom: 0.7em;
  margin-top: 1.2em;
  color: #3a3d44;
}
.calendar-events-card {
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e3e6ea;
  box-shadow: none;
  margin-bottom: 18px;
  padding: 0 0 0 0;
}
.calendar-event-row {
  padding: 18px 24px 12px 18px;
  border-bottom: 1px solid #f0f1f3;
}
.calendar-event-row:last-child {
  border-bottom: none;
}
.calendar-event-title {
  font-size: 1.08rem;
  font-weight: 600;
  color: #23272f;
}
.calendar-event-time {
  font-size: 0.98rem;
  color: #7a8599;
  font-weight: 400;
}
@media (max-width: 900px) {
  .calendar-main-title {
    font-size: 1.3rem;
  }
  .calendar-section-title {
    font-size: 1.05rem;
  }
  .calendar-event-title {
    font-size: 0.98rem;
  }
  .calendar-event-row {
    padding: 10px 8px 8px 8px;
  }
}
</style> 