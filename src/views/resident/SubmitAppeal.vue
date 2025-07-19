<template>
  <v-container class="fill-height pa-0" fluid>
    <div class="w-100">
      <div class="d-flex mb-2">
        <v-btn icon variant="text" class="mr-2" @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h1 class="text-h4 font-weight-bold mb-0">Новое обращение</h1>
      </div>
      <div class="d-flex flex-column align-center justify-center">
        <div class="text-subtitle-1 mb-8" style="color: #7a8599;">
        Заполните форму ниже, чтобы отправить новое обращение.
      </div>
      <v-card class="submit-appeal-card pa-8" max-width="700">
        <v-form>
          <v-select
            label="Тип обращения"
            :items="types"
            v-model="form.type"
            variant="outlined"
            class="mb-6"
            required
          />
          <v-textarea
            label="Описание"
            v-model="form.description"
            placeholder="Опишите проблему подробно..."
            variant="outlined"
            class="mb-6"
            counter="500"
            maxlength="500"
            rows="4"
            required
          />
          <div class="mb-6">
            <div class="font-weight-bold mb-2">Фотографии</div>
            <v-file-input
              v-model="form.photos"
              accept="image/*"
              multiple
              show-size
              counter
              prepend-icon="mdi-camera-plus"
              label="Перетащите фото сюда или выберите файлы (до 3)"
              :rules="[v => !v || v.length <= 3 || 'Максимум 3 фото']"
              variant="outlined"
              class="submit-appeal-file"
            />
          </div>
          <div class="mb-6">
            <div class="font-weight-bold mb-2">Срочность</div>
            <v-btn-toggle v-model="form.urgency" mandatory class="submit-appeal-urgency">
              <v-btn value="normal">Обычно</v-btn>
              <v-btn value="urgent">Срочно</v-btn>
              <v-btn value="emergency">Аварийно</v-btn>
            </v-btn-toggle>
          </div>
          <div class="d-flex justify-end">
            <v-btn color="primary" size="default" style="min-width: 140px; padding: 0 18px; font-weight:500;">
              Отправить обращение
            </v-btn>
          </div>
        </v-form>
      </v-card>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const types = [
  'Аварийная ситуация',
  'Не выполняются обязательные работы',
  'Качество уборки',
  'Благоустройство территории',
  'Другое',
]
const form = reactive({
  type: '',
  description: '',
  photos: [],
  urgency: 'normal',
})

function goBack() {
  window.history.length > 1 ? window.history.back() : router.push('/resident/home')
}
</script>

<style scoped>
.submit-appeal-card {
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(60, 60, 60, 0.06);
  background: #fff;
}
.submit-appeal-file .v-input__prepend {
  margin-right: 8px;
}
.submit-appeal-urgency .v-btn {
  border-radius: 24px;
  min-width: 110px;
  font-weight: 500;
}
@media (max-width: 600px) {
  .submit-appeal-card {
    padding: 1.2rem !important;
    max-width: 98vw !important;
  }
}
</style> 