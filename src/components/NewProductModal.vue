<template>
    <div>
        <v-btn @click="dialog = true" color="blue">Add Product</v-btn>

        <v-dialog v-model="dialog" width="500">
            <v-card rounded="xl">
                <v-container>
                    <div class="header d-flex align-center justify-space-between mb-5">
                        <h1 class="text-h5 font-weight-bold">Add Product</h1>
                        <v-btn icon="mdi-close" @click="dialog = false" variant="text"></v-btn>
                    </div>
                    <div>
                        <v-text-field label="Name" v-model="name" variant="outlined"></v-text-field>
                        <v-text-field label="Description" v-model="description" variant="outlined"></v-text-field>
                        <v-text-field label="Price" v-model="price" variant="outlined"></v-text-field>
                        <v-text-field label="Quantity" v-model="quantity" variant="outlined"></v-text-field>
                        <v-text-field label="Category" v-model="category" variant="outlined"></v-text-field>
                        <v-text-field label="SKU" v-model="sku" variant="outlined"></v-text-field>
                        <v-switch v-model="is_active" label="Active"></v-switch>
                    </div>
                    <div class="action-btns d-flex justify-end">
                        <v-btn @click="dialog = false" variant="outlined" class="me-3" height="40px"
                            rounded="lg">Cancel</v-btn>
                        <v-btn @click="addProduct" color="blue" height="40px" rounded="lg">Add Product</v-btn>
                    </div>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const name = ref('')
const description = ref('')
const price = ref(0)
const quantity = ref(0)
const category = ref('')
const sku = ref('')
const is_active = ref(true)

const addProduct = () => {
    console.log(name.value, description.value, price.value)
    dialog.value = false
}
</script>