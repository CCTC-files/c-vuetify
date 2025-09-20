<template>
    <v-container>
        <div class="header">
            <h1 class="text-h2 font-weight-bold">Products</h1>
            <NewProductModal />
        </div>
        <ProductsTable />
    </v-container>
</template>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>