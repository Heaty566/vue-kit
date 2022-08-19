<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

export interface Props extends InputHTMLAttributes {
    label?: string;
    name: string;
}
const { name, label } = defineProps<Props>();
</script>

<template>
    <div className="space-y-2">
        <label :htmlFor="name" className="block text-sm font-medium text-gray-700" v-if="label"> {{ label }} </label>

        <input
            :id="name"
            v-bind="$attrs"
            className="block w-full duration-200 border border-gray-300 rounded-sm shadow-sm outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
    </div>
</template>
