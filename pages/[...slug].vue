<template>
  <main class="prose max-w-screen-m mx-auto mt-5 prose-h1:text-center">
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <!-- <h1>{{ doc.title }}</h1> -->
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
  </ContentDoc>
  </main>
</template>