<template>
    <div class="not-prose text-center p-3">
        <button @click="getData()" class="px-4 py-2 bg-skin-button border hover:bg-opacity-70">
            <slot/>
            <div>data: {{ showData }}</div>
        </button>
    </div>
</template>

<script setup>

function say(message) {
  alert(message)
}
const showData = ref("none")

async function getData() {
  
  // Define your data here
  const myTodoData = {
    title: "My Todo Title",
    description: "This is a description of my todo item."
  };

  const todo = await $fetch('/.netlify/functions/response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myTodoData) // Convert JavaScript object to JSON string
  });

  console.log(todo);
  showData.value = todo;
}


</script>