<template>
    <div class="container">
        <input type="text" name="search" v-model="search" placeholder="search box">
        <div class="row">
            <!-- <div  v-for="blog in blogs" :key="blog.id" v-theme:column class="col-md-8 mb-4"> -->
            <div  v-for="blog in filteredBlogs" :key="blog.id" v-theme:column class="col-md-8 mb-4">
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title" v-italics>{{blog.title|capitalize}}</h5>
                        <p class="card-text" >{{blog.content | snippet}}</p>
                        <router-link :to="'/blog/'+blog.id" class="btn btn-primary">Read More</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import directiveMixin from '../mixin/directiveMixin'
    export default {
        name:'ShowBlog',
        data(){

            return {

                    blogs:[],
                    search:''
            }
        },
        methods: {

        },
        filters: {

            snippet:function(value){

                return value.slice(0,100)+"..."
            }
        },
        directives: {

                'italics':{

                    bind(el,binding,vnode){
                        el.style.fontStyle="italic"
                    }
                }
        },
        created: function() {
                this.$http.get('https://vue-blogg.firebaseio.com/posts.json').then(data=>{

                        return data.json()
                    // this.blogs = data.body.slice(0,10)
                }).then(data=>{

                        var blogArray = [];
                        for(let key in data)
                        {
                            data[key].id = key;
                            blogArray.push(data[key]);
                        }

                        this.blogs = blogArray;
                })

        },
        computed: {

                filteredBlogs:function(){

                    return this.blogs.filter(blog=>{

                        return blog.title.match(this.search)
                    })
                }
        },
        mixins:[directiveMixin]





        // ---------end
    }
</script>

<style lang="scss" scoped>

</style>