<template>
  <Layout>
    <template #page-top>page top</template>
    <template #page-bottom>page bottom</template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>
