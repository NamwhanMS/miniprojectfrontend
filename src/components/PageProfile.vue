<script setup lang="ts">
import LayoutMain from '../layouts/LayoutMain.vue';
</script>


<template>
    <LayoutMain>
        <h3 class="fw-bold">Profile</h3>
        <p class="text-secondary">User Profile</p>

        <div class="card">
            <div class="card-body">
                <div class="profile-set">
                    <div class="profile-head">
                    </div>
                    <div class="profile-top">
                        <div class="profile-content">
                            <div class="profile-contentname">
                                <h2>William Castillo</h2> 
                                <h4>Updates Your Personal Details.</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-6 col-sm-12 ">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" placeholder="William" fdprocessedid="u9qzsj" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Castilo" fdprocessedid="fbrjy" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="william@example.com" fdprocessedid="ov6n5e" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" placeholder="+1452 876 5432" fdprocessedid="cipgr" class="form-control" >
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>User Name</label>
                            <input type="text" placeholder="+1452 876 5432" fdprocessedid="kw5f8w" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Password</label>
                            <div class="pass-group">
                                <input type="password" class=" pass-input form-control " fdprocessedid="2078ht"  >
                                <span class="fas toggle-password fa-eye-slash"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <a href="#" class="btn btn-warning me-2">Submit</a>
                        <a href="#" class="btn btn-secondary">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </LayoutMain>
</template>