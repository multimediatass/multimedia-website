<template>
    <div>
        <notFound msg="Pendaftaran belum dibuka, sabar dulu ya"/>        
    </div>
</template>
<script>
import notFound from '@/components/notFound'
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        store.dispatch('setInfoPage', {titleInfo: 'Join', headerInfo: store.state.routeMeta.join})
    },
    components: {
        notFound
    }
}
</script>