<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-2">
                <h3>Add A New Blog Post</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">TITLE</label>
                        <input type="text" v-model="title" class="form-control" id="post_title" aria-describedby="emailHelp" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">CONTENT</label>
                        <textarea class="form-control" v-model="content" id="post_content" rows="3"></textarea>
                    </div>
                  
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
                <!--  -->
                   <div>
                        blog-title: {{title}}
                    </div>
                    <div>
                         <p>Blog-content: {{content}}</p>
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

                title:'',
                content:''
            }
        }
    }
</script>

<style  scoped>

</style>