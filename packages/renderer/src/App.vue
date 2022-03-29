<template>
  <select name="" id="">
    <option v-for="item in imageTypeList" :key="item.id" :value="item.id">{{ item.name }}</option>
  </select>
  <div>
    <img v-for="item in imageList" :key="item.id" :src="item.url" :alt="item.tag" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { getImageTypeApi, getImageListApi } from './api';
  import { setWallpaper } from 'wallpaper';

  const imageTypeList = ref<any>([]);
  const imageList = ref<any>([]);

  onMounted(async () => {
    try {
      const { data: imageTypes } = await getImageTypeApi();
      imageTypeList.value = imageTypes;
      const id = imageTypes[0].id;

      const {
        data: { data },
      } = await getImageListApi(id);

      setWallpaper(data[0].url).then((data) => {
        console.log('data :>> ', data);
      });

      console.log('imageList :>> ', data);
      imageList.value = data;
    } catch (error) {
      throw error;
    }
  });
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .logo-box {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .logo-box span {
    width: 74px;
  }

  .static-public {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .static-public code {
    background-color: #eee;
    padding: 2px 4px;
    margin: 0 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
