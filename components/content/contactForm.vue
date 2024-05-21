<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
]

const state = reactive({
  input: undefined,
  textarea: undefined,
  select: undefined,
  checkbox: undefined,
  switch: undefined,
})

const schema = z.object({
  input: z.string().min(3),
  textarea: z.string().min(5),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'Check me'
  }),
})

type Schema = z.infer<typeof schema>

const form = ref()

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <UForm ref="form" :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup name="input" label="Input">
      <UInput v-model="state.input" />
    </UFormGroup>

    <UFormGroup name="textarea" label="Textarea">
      <UTextarea v-model="state.textarea" />
    </UFormGroup>

    <UFormGroup name="select" label="Which Doll">
      <USelect v-model="state.select" placeholder="Select..." :options="options" />
    </UFormGroup>

    <UFormGroup name="checkbox" label="Checkbox">
      <UCheckbox v-model="state.checkbox" label="Check me" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>

    <UButton variant="outline" class="ml-2" @click="form.clear()">
      Clear
    </UButton>
  </UForm>
</template>