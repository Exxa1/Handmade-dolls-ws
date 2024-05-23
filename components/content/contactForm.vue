<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

//retrieve the list of products from api/products (which is a json file generated when static site is generated)
const {data:productsList, pending, error, refresh} = await useFetch('/api/products')

// list of dolls to select from, automatically filled using api
const dollList = productsList.value.productsAPI.map(item => ({
  label: item.title,
  value: item.id
}));

// link to the image shown when doll is selected, reactive property (always watched for change)
const imgPlace = reactive({ url: ''});

// changes the imgPlace url which changes the photo shown when a doll is selected
async function loadDollImage(dollId) {
  const selectDoll = productsList.value.productsAPI.find(product => product.id === dollId)
  console.log(selectDoll)
  console.log(selectDoll.imgLinks[0])
  imgPlace.url = `/img/dolls/${selectDoll.id}/${selectDoll.imgLinks[0]}`
}

// Options to choose from for reason for contacting
const reasonForContactingOptions = [
  { label: 'Interested in buying a doll', value: 'buy-a-doll' },
  { label: 'Other inquiries', value: 'general-message' },
]

// saves the selected properties to send when form submitted
const state = reactive({
  senderName: undefined,
  senderEmail: undefined,
  reasonForContacting: undefined,
  subject: undefined,
  senderMessage: undefined,
  // select: undefined,
  singupForEmaillist: false,
})

// checks if fills are valid in the form
const schema = z.object({
  senderName: z.string().min(3),
  senderEmail: z.string().email('Invalid email'),
  reasonForContacting: z.string().refine(value => value != undefined, {
    message: 'Please select an option'
  }),
  subject: z.any().refine(value => value != undefined, {
    message: 'Please fill out'
  }),
  senderMessage: z.string().min(5),
});

type Schema = z.infer<typeof schema>

// makes the form reactive ie. constantly watched for change. See more: https://vuejs.org/api/reactivity-core.html#ref
const form = ref()


// When the form is submitter
async function onSubmit (event: FormSubmitEvent<Schema>) {

  // makes sure state.subject is not an object but it's value (string)
  if (state.subject instanceof Object) {
  state.subject = state.subject.value;
}

  // Connects to a Netlify function to send email
  const contactFunctionResponse = await $fetch('/.netlify/functions/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(state), // Convert JavaScript object to JSON string
    async onResponse({ request, response, options }) {
    // Log response
    // console.log("[fetch response]", request, response.status, response.body);
    if (response.status === 200){
      navigateTo('/message-success')
    } else {
      navigateTo('/message-fail')
    }
  },
  });
}

// If gets to this page from another page, load parameters from url query
try {
  const route = useRoute();
  state.reasonForContacting = ref(route.query.reasonForContacting || '').value;
  const idFromRoute = ref(route.query.id || '')
  state.subject = dollList.find(item => item.value === idFromRoute.value);
  // console.log(state.subject)
  loadDollImage(state.subject.value)
} catch {
  // console.log(`not loaded ${state}`)
}


</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup name="senderName" label="Name">
      <UInput v-model="state.senderName" />
    </UFormGroup>

    <UFormGroup label="Email" name="senderEmail">
      <UInput v-model="state.senderEmail" />
    </UFormGroup>

    <UFormGroup name="reasonForContacting" label="Subject">
      <URadioGroup @change="state.subject = undefined" v-model="state.reasonForContacting" :options="reasonForContactingOptions" />
    </UFormGroup>

    <UFormGroup name="subject">
      <UInput v-if="state.reasonForContacting === 'general-message'" placeholder="Subject" v-model="state.subject" />
      <div v-if="state.reasonForContacting === 'buy-a-doll'">
      <USelectMenu @change="loadDollImage(state.subject.value)" v-model="state.subject" placeholder="Select the doll..." :options="dollList" />
      <img v-if="state.subject" :src="imgPlace.url"/>
      </div>
    </UFormGroup>

    <UFormGroup name="message" label="Message">
      <UTextarea v-model="state.senderMessage" />
    </UFormGroup>

    <UFormGroup name="singupForEmaillist" label="Email list">
      <UCheckbox v-model="state.singupForEmaillist" label="I would like to receive updates and deals" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>

    <!-- <UButton variant="outline" class="ml-2" @click="form.clear()">
      Clear
    </UButton> -->
  </UForm>
</template>