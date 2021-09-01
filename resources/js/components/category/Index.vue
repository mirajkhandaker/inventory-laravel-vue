<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Category</h1>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-4">
                <!-- Simple Tables -->
                <div class="card">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">All Category</h6>
                        <router-link class="btn btn-primary bg-gradient-primary" :to="{name: 'CreateCategory'}">Add Category</router-link>
                    </div>
                    <div class="py-2 bg-gray-400">
                        <input type="text" class="form-control" placeholder="Search" v-model="searchTerm">
                    </div>
                    <div class="table-responsive">
                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="category in categories.data" :key="category.id" v-if="!loading">
                                <td>{{category.id}}</td>
                                <td>{{category.category_name}}</td>
                                <td>
                                    <router-link :to="{name:'EditCategory', params:{id:category.id}}" class="btn btn-sm btn-primary">Edit</router-link>
                                    <a @click="deleteCategory(category.id)" class="btn btn-sm btn-danger text-white">Delete</a>
                                </td>
                            </tr>
                            <tr v-if="loading">
                                <td colspan="8" class="text-center">
                                    <img class="loder" src="https://www.theinsurancecenter.net/wp-content/uploads/2019/05/0_4Gzjgh9Y7Gu8KEtZ.gif" alt="Loading">
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        <pagination :limit="2" :show-disabled="true" align="center" :data="categories" @pagination-change-page="allCategory">
                            <span slot="first-nav">First</span>
                            <span slot="last-nav">Last</span>
                        </pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pagination from 'laravel-vue-pagination'

export default {
    name: "Index",
    components:{pagination},
    data(){
        return {
            categories: {},
            searchTerm:'',
            sl: 0,
            loading: false
        }
    },
    methods:{
        slInc(){
            return this.sl++;
        },
        allCategory(page=1){
            this.loading = true;
            axios.get(`/api/category?page=${page}`)
                .then(({data}) => {
                    this.categories = data;
                })
                .catch(() => {
                    alert('error');
                });
            this.loading = false
        },
        deleteCategory(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/category/'+id)
                    .then(() => {
                        this.categories = this.categories.filter(category => {
                            return category.id !== id;
                        })
                    })
                    .catch(()=>{
                        this.$route.push({name:"category"});
                    });

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        }
    },
    computed:{
      filterSearch(){
          return this.suppliers.filter(employee => {
              return employee.name.match(this.searchTerm);
          })
        }
    },
    created(){
        this.allCategory();
    }
}
</script>

<style scoped>
img{
    width: 40px;
}
img.loder{
    width: 30%;
}
</style>
