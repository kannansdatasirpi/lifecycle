<template>              <!--4.create this template, then compile my tem or other element temp (if any other element , it will compile that element template )-->
    <div id="child">               <!--5.everythink is ready in our component now our component is ready to mount with DOM, just beforeMounting is called . then our component is mounted with our DOM then mounted function called-->
                        <!--6.then mounte-->

    </div>
</template>
<!--2. when the component is created, the created component is called. then it will initialize two things methods and property  -->
<script>

    export default {
        name:'ChildCom',
        methods: {

        },
        data()
        {
            return {}
        },
        beforeCreate()
        {
            console.warn('beforeCreate')
        },
        created() {
            console.warn('created')
        },
        beforeMount()
        {
            console.warn('beforeMount')
        },
        mounted()
        {
            console.warn('mounted')
        }

    }
</script>

<style lang="scss" scoped>

</style>