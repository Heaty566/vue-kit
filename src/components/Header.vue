<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { routers } from '../core/router';
</script>

<template>
    <header>
        <nav>
            <div className="x-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 flex items-center gap-16">
                    <RouterLink :to="routers.home.path">
                        <div class="p-4 bg-red-500">Logo</div>
                    </RouterLink>
                    <div className="hidden lg:flex lg:gap-10">
                        <RouterLink :to="routers.login.path">
                            <div>Login</div>
                        </RouterLink>
                        <RouterLink :to="routers.register.path">
                            <div>Register</div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
