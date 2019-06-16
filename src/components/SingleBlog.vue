<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                        <div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title" v-italics>{{blog.title}}</h5>
                                <p class="card-text" >{{blog.content}}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            name:'SingleBlog',
            data(){

                return {

                    id:this.$route.params.id,
                    blog:{}
                }
            },
            created(){

                this.$http.get('https://vue-blogg.firebaseio.com/posts/'+this.id+'.json')

                .then(data=>{

                    return data.json()
                }).then(data=>{

                    this.blog = data;
                })
            }

    }
</script>

<style scoped>

</style>