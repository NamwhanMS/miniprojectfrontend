<script setup lang="ts">
import LayoutMain from '../layouts/LayoutMain.vue';
</script>


<template>
    <LayoutMain>
        <h3 class="fw-bold">General Setting</h3>
        <p class="text-secondary">Manage General Setting</p>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Title <span class="manitory">*</span></label>
                            <input type="text" placeholder="Enter Title" fdprocessedid="fn5lem" class="form-control mt-1">
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-3">
                        <div class="form-group">
                            <label>Time Zone </label>
                            <select class="select select2-hidden-accessible form-select" data-select2-id="1" tabindex="-1"
                                aria-hidden="true">
                                <option data-select2-id="3">Choose Time Zone </option>
                                <option>USD Time Zone</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                data-select2-id="2" style="width: 100%;"><span class="selection"><span
                                        class="select2-selection select2-selection--single" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                        aria-labelledby="select2-ds71-container"><span class="select2-selection__rendered"
                                            id="select2-ds71-container" role="textbox" aria-readonly="true"
                                            title="Choose Time Zone ">Choose Time
                                            Zone </span><span class="select2-selection__arrow" role="presentation"><b
                                                role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12 mb-3">
                        <div class="form-group">
                            <label>Currency <span class="manitory">*</span></label>
                            <select class="select select2-hidden-accessible form-select" data-select2-id="4" tabindex="-1"
                                aria-hidden="true">
                                <option data-select2-id="6">Choose Currency </option>
                                <option>INR</option>
                                <option>USA</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                data-select2-id="5" style="width: 100%;"><span class="selection"><span
                                        class="select2-selection select2-selection--single" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                        aria-labelledby="select2-aguf-container"><span class="select2-selection__rendered"
                                            id="select2-aguf-container" role="textbox" aria-readonly="true"
                                            title="Choose Currency ">Choose Currency
                                        </span><span class="select2-selection__arrow" role="presentation"><b
                                                role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Date Format<span class="manitory">*</span></label>
                            <select class="select select2-hidden-accessible form-select" data-select2-id="7" tabindex="-1"
                                aria-hidden="true">
                                <option data-select2-id="9">Choose Date Format </option>
                                <option>DD/MM/YYYY</option>
                                <option>MM/DD/YYYY</option>
                            </select><span class="select2 select2-container select2-container--default" dir="ltr"
                                data-select2-id="8" style="width: 100%;"><span class="selection"><span
                                        class="select2-selection select2-selection--single" role="combobox"
                                        aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false"
                                        aria-labelledby="select2-5nvq-container"><span class="select2-selection__rendered"
                                            id="select2-5nvq-container" role="textbox" aria-readonly="true"
                                            title="Choose Date Format ">Choose Date
                                            Format </span><span class="select2-selection__arrow" role="presentation"><b
                                                role="presentation"></b></span></span></span><span class="dropdown-wrapper"
                                    aria-hidden="true"></span></span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="form-group ">
                            <label>Email<span class="manitory">*</span></label>
                            <input type="text" placeholder="Enter email" class="form-control" fdprocessedid="9shmkm">
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="form-group">
                            <label>Phone<span class="manitory">*</span></label>
                            <input type="text" placeholder="Enter Phone" class="form-control" fdprocessedid="uwdg6l">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label>Address<span class="manitory">*</span> </label>
                            <input type="text" placeholder="Enter Address" class="form-control" fdprocessedid="fo5k79">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label> Product Image</label>

                            <div class="mb-3">

                                <input class="form-control" type="file" id="formFile">
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <a href="#" class="btn btn-warning me-2 ">Submit</a>
                            <a href="#" class="btn btn-secondary">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </LayoutMain>
</template>