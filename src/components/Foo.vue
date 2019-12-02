<template>
    <div>Target Foo - {{msg}}</div>
</template>

<script>
    export default {
        name: 'Foo',
        props: {
            msg: String
        }
    }
</script>