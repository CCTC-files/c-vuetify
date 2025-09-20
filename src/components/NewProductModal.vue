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
                        <v-text-field label="Name" type="text" v-model="name" variant="outlined"></v-text-field>
                        <v-text-field label="Description" type="text" v-model="description" variant="outlined"></v-text-field>
                        <v-text-field label="Price" type="number" v-model="price" variant="outlined"></v-text-field>
                        <v-text-field label="Quantity" type="number" v-model="quantity" variant="outlined"></v-text-field>
                        <v-text-field label="Category" type="text" v-model="category" variant="outlined"></v-text-field>
                        <v-text-field label="SKU" type="text" v-model="sku" variant="outlined"></v-text-field>
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
import axios from 'axios'

const dialog = ref(false)
const name = ref('')
const description = ref('')
const price = ref(null)
const quantity = ref(null)
const category = ref('')
const sku = ref('')
const is_active = ref(true)

const addProduct = async () => {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('description', description.value)
    formData.append('price', price.value)
    formData.append('quantity', quantity.value)
    formData.append('category', category.value)
    formData.append('sku', sku.value)
    formData.append('is_active', is_active.value ? '1' : '0')

    try {
        const response = await axios.post('/api/products', formData)
        if (response.data.success == true) {
            dialog.value = false
        } else {
            console.error('Error adding product')
        }
    } catch (error) {
        console.error('Network error:', error)
    }
}
</script>