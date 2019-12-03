<template>
    <div>
        <div class="scope">Target - {{msg}} Bar</div>
        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: 'Bar',
        props: {
            msg: String
        }
    }
</script>