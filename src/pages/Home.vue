<template>
    <div class="bg-gradient-to-b from-green-100 via-[#CBEDD5] to-green-600/30">
      <div class="container flex flex-col items-center pt-28 px-4">
        <TransitionRoot appear :show="isVisible" as="template">
          <div class="w-[60%] sm:w-full text-center space-y-6">
            <!-- Hero Title -->
            <TransitionChild
              as="template"
              enter="transform transition duration-1000"
              enter-from="opacity-0 translate-y-4"
              enter-to="opacity-100 translate-y-0"
              leave="transform duration-300 transition ease-in-out"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 translate-y-4"
            >
              <div class="relative">
                <div class="text-5xl lg:text-2xl font-medium leading-tight tracking-wide capitalize mb-3 text-gray-800">
                  Genggam Cahaya Islam di Ujung Jari dengan 
                    <span class="relative z-10 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                      Muslim Hub
                    </span>
                </div>
              </div>
            </TransitionChild>
  
            <!-- Subtitle -->
            <TransitionChild
              as="template"
              enter="transform transition duration-1000 delay-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transform duration-300 transition ease-in-out"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="space-y-3 md:space-y-1">
                <p class="font-medium text-xl md:text-sm capitalize text-gray-700 ">
                  Dapatkan Kebutuhan Islamimu Dengan Muslim Hub
                </p>
                <p class="font-medium text-xl md:text-sm capitalize text-gray-600 ">
                  Akses Kapan Saja dan Dimana Saja
                </p>
              </div>
            </TransitionChild>
  
            <!-- Buttons -->
            <TransitionChild
              as="template"
              enter="transform transition duration-1000 delay-500"
              enter-from="opacity-0 translate-y-4"
              enter-to="opacity-100 translate-y-0"
              leave="transform duration-300 transition ease-in-out"
              leave-from="opacity-100 translate-y-0"
              leave-to="opacity-0 translate-y-4"
            >
              <div class="flex flex-col items-center sm:flex-row gap-4 justify-center mt-8">
                <a href="#" class="px-8 py-3 md:px-4 md:py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700  transition-colors duration-300 shadow-lg hover:shadow-xl">
                  Mulai Sekarang
                </a>
              </div>
            </TransitionChild>
  
          </div>
        </TransitionRoot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { TransitionRoot, TransitionChild } from '@headlessui/vue'
  
  const isVisible = ref(false)
  
  onMounted(() => {
    isVisible.value = true
  })
  </script>