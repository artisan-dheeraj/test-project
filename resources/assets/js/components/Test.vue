<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body" v-text="body"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            body: "I'm an example component.",
          }
        },
        mounted() {
          console.log('Component mounted.')
        }
    }
</script>
