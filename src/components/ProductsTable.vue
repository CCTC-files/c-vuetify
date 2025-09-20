<template>
    <v-container>
        <div class="table-container">
            <table class="modern-table">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>CATEGORY</th>
                        <th>SKU</th>
                        <th>IS_ACTIVE</th>
                        <th>CREATED_AT</th>
                        <th>UPDATED_AT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.title" class="table-row">
                        <td>{{ product.name }}</td>
                        <td>{{ product.description }}</td>
                        <td class="price">₱{{ product.price.toLocaleString() }}</td>
                        <td class="quantity">{{ product.quantity }}</td>
                        <td><span class="category-badge">{{ product.category }}</span></td>
                        <td class="sku">{{ product.sku }}</td>
                        <td>
                            <span :class="['status-badge', product.is_active ? 'active' : 'inactive']">
                                {{ product.is_active ? 'Active' : 'Inactive' }}
                            </span>
                        </td>
                        <td>{{ formatDate(product.created_at) }}</td>
                        <td>{{ formatDate(product.updated_at) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref()

const fetchProducts = async () => {
    const response = await axios.get('/api/products')
    products.value = response.data.data
}

onMounted(() => {
    fetchProducts()
})

const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}
</script>

<style scoped>
.table-container {
    background: #111827;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px 0;
    border: 1px solid #374151;
}

.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #f9fafb;
}

.modern-table thead {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    color: #f9fafb;
    border-bottom: 2px solid #374151;
}

.modern-table th {
    padding: 16px 12px;
    text-align: left;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: none;
    color: #d1d5db;
}

.modern-table tbody tr {
    border-bottom: 1px solid #374151;
    transition: all 0.2s ease;
    background: #1f2937;
}

.modern-table tbody tr:hover {
    background-color: #374151;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.modern-table tbody tr:last-child {
    border-bottom: none;
}

.modern-table td {
    padding: 16px 12px;
    border: none;
    vertical-align: middle;
    color: #f9fafb;
}

.price {
    font-weight: 600;
    color: #10b981;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
}

.quantity {
    font-weight: 500;
    color: #60a5fa;
}

.category-badge {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.sku {
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-size: 12px;
    color: #9ca3af;
    background: #374151;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 500;
    border: 1px solid #4b5563;
}

.status-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
}

.status-badge.inactive {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);
}

/* Responsive design */
@media (max-width: 1024px) {
    .table-container {
        overflow-x: auto;
    }

    .modern-table {
        min-width: 800px;
    }

    .modern-table th,
    .modern-table td {
        padding: 12px 8px;
        font-size: 13px;
    }
}

@media (max-width: 768px) {

    .modern-table th,
    .modern-table td {
        padding: 10px 6px;
        font-size: 12px;
    }

    .category-badge,
    .status-badge {
        padding: 3px 8px;
        font-size: 11px;
    }
}
</style>