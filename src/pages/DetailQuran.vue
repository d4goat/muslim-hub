<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axiosInstance from '@/libs/axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const surah = ref({})
const tafsir = ref({})

async function getSurah(nomor: any) {
  try {
    const response = await axiosInstance.get(`https://equran.id/api/v2/surat/${nomor}`)
    surah.value = response.data.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getSurah(route.query.surah_ke)
})
</script>

<template>
  <div class="flex-col">
    <div class="flex justify-end">
      <input
        type="search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder=" Cari Ayat.."
        name=""
        id=""
      />
    </div>
    <div v-for="ayat in surah.ayat" :key="ayat.nomorAyat">
      <div class="">
        <div class="flex flex-col gap-3 px-3 py-5 my-5 rounded border-solid border-2 border-border">
          <div class="flex justify-between gap-5 px-2">
            <span class="border-2 rounded-full border-border dark:border-white p-2 h-10">
              {{ ayat.nomorAyat }}
            </span>
            <span class="text-2xl text-right">
              {{ ayat.teksArab }}
            </span>
          </div>
          <span> {{ ayat.teksIndonesia }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
