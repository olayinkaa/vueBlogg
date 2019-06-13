<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-2">
                <h3>Add A New Blog Post</h3>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Post</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
      
    </div>
</template>

<script>
    export default {
        name:'AddBlog',
        data(){
            return {

            }
        }
    }
</script>

<style  scoped>

</style>