<script setup lang="ts">
import { InputField, FormBtn } from '../components/form';
import { authApi, type ILoginUser } from '../api/auth.api';
import { useForm } from '@/components/form/formHelper';
import { useLoading } from '@/utils/useLoading';

const form = useForm<ILoginUser>({ defaultValues: { email: '', password: '' } });
const { handleOnEndLoading, handleStartLoading, loadings } = useLoading();
const handleSubmmit = async () => {
    handleStartLoading();

    await authApi.loginUser(form.formValues);
    handleOnEndLoading();
};
</script>

<template>
    <div class="max-w-xs mx-auto space-y-2">
        <div class="px-4 py-8 bg-white border rounded-md shadow-lg">
            <h1 class="mb-6 text-xl font-semibold">Login Account</h1>
            <form @submit.prevent="handleSubmmit" class="space-y-4">
                <InputField name="email" label="Email" @register="form.register" />
                <InputField name="password" label="Password" type="password" @register="form.register" />

                <FormBtn v-if="!loadings.default" name="formBtn" label="Sign In" />
                <div v-if="loadings.default">Loading....</div>
            </form>
        </div>
    </div>
</template>
