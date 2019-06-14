<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-2">
                <h3 v-if="!submitted">Add A New Blog Post</h3>
                <form v-if="!submitted" >
                    <div class="form-group">
                        <label for="exampleInputEmail1">TITLE</label>
                        <input type="text" v-model.lazy="blog.title" class="form-control" id="post_title" aria-describedby="emailHelp" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">CONTENT</label>
                        <textarea class="form-control" v-model.lazy="blog.content" id="post_content" rows="3"></textarea>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-2">
                            CATEGORIES 
                        </div>
                        
                        <div class="col-md-8 offset-md-1">
                             <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" v-model="blog.categories" value="Sport"> Sport
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" v-model="blog.categories" value="Music"> Music
                                </label>
                            </div>
                            <div class="form-check form-check-inline disabled">
                                <label class="form-check-label">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" v-model="blog.categories" value="Movies"> Movies
                                </label>
                            </div>
                        </div>
                    </div>
                    <!----  ---->
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">AUTHOR</label>
                        <select class="form-control" v-model="blog.author">
                            <option  v-for="author in authors" :key="author.id">{{author}}</option>
                        </select>
                    </div>


                    <button type="submit" @click.prevent="post" class="btn btn-primary btn-block">Submit</button>
                </form>
                <div>
                    <h3 v-if="submitted">Thanks for add a post</h3>
                </div>
                <!--  -->
                   <div>
                        blog-title: {{blog.title}}
                    </div>
                    <div>
                         <p>Blog-content: {{blog.content}}</p>
                    </div>
                    <div>
                    Blog categories
                         <ul>
                            <li v-for="category in blog.categories" :key="category.id">{{category}}</li>
                         </ul>
                    </div>
                    <div>
                        <p>Blog author: {{blog.author}}</p>
                    </div>
            </div>
         
        </div>
     
      
    </div>
</template>

<script>
    export default {
        name:'AddBlog',
        data(){
            return {

                blog:{
                    title:'',
                    content:'',
                    categories:[],
                    author:''
                },
                authors:['Ibrahim','Timilehin','YoungPro'],
                submitted: false
            }
        },

        methods: {
            post:function(){

                this.$http.post('https://jsonplaceholder.typicode.com/posts',{

                    title: this.blog.title,
                    body: this.blog.content,
                    userId:1
                }).then(data=>{

                    console.log(data);
                    this.submitted = true
                })
            }
        }
    }
</script>

<style  scoped>

</style>