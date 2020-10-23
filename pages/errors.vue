<template>
    <div>
        <div class="errors" v-if="errors">
            <div class="error" v-for="error in errors" :key="error">{{ error }}</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>