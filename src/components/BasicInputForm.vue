<template>
<div>
  <label v-if="label">{{ label }}</label>
  <!-- chanty ":" binding attribute -->
  <input
    type="text"
    v-model="text"
    name="text"
    :placeholder="placeholder"

    v-bind="$attrs"
  
    @input="$emit('update:inputValue', $event.target.value)"
    class="field"
  />
  </div>
</template>

<script>

export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    inputValue: {
      type: [String, Number],
      default: "",
    },
  },
  
};
</script>