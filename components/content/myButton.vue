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
    email: "email@email"
  };

  const todo = await $fetch('/.netlify/functions/hello-world', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myTodoData) // Convert JavaScript object to JSON string
  });
  

    // Log the raw response text to verify the body content
    // console.log('Raw response:', todo);



//   console.log(todo);
  showData.value = todo.message;
  console.log(showData)
}


</script>