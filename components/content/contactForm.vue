<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const {data: products} = await useAsyncData('dolls', () => queryContent('/products').only(['title', '_path', 'id']).find())

const dollList = products.value.map(item => ({
  label: item.title,
  value: item.id
}));

const imgPlace = reactive({ url: ''});

async function loadDollImage(dollId) {
  const imgRoute = await $fetch(`/api/products/${dollId}`);
  imgPlace.url = imgRoute.imgPaths[0]
}

// const dollList = [
//   { label: 'Option 1', value: 'option-1' },
//   { label: 'Option 2', value: 'option-2' },
//   { label: 'Option 3', value: 'option-3' }
// ]

const reasonForContactingOptions = [
  { label: 'Interested in buying a doll', value: 'buy-a-doll' },
  { label: 'Other inquiries', value: 'general-message' },
]

const state = reactive({
  senderName: undefined,
  senderEmail: undefined,
  reasonForContacting: undefined,
  subject: undefined,
  senderMessage: undefined,
  // select: undefined,
  singupForEmaillist: false,
})

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
  // checkbox: z.boolean().refine(value => value === true, {
  //   message: 'Check me'
  // }),
});

type Schema = z.infer<typeof schema>

const form = ref()

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data

  if (state.subject instanceof Object) {
  state.subject = state.subject.value;
}


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
    useRouter().push('/message-success')
    } else {
      useRouter().push('/message-fail')
    }

  },
  });

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

    <!-- <UFormGroup v-if="state.reasonForContacting === 'general-message'" name="subject" label="Subject">
      <UInput v-model="state.subject" />
    </UFormGroup>

    <UFormGroup v-if="state.reasonForContacting === 'buy-a-doll'" name="select" label="Which Doll">
      <USelectMenu v-model="state.subject" placeholder="Select..." :options="options" />
    </UFormGroup> -->

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