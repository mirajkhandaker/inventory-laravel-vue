<template>

</template>

<script>
import AppStorage from "../../helpers/AppStorage";
export default {
    name: "Logout",
    created() {
        AppStorage.clear();
        Toast.fire({
            icon: 'success',
            title: 'Logout successfully'
        })
        this.$router.push({name: 'Login'});
    }
}
</script>

<style scoped>

</style>
