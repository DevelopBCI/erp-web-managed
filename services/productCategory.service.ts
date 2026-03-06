import apiClient from '@/lib/apiClient';

export interface ProductCategory {
    category_id: string | number;
    category_name: string;
    category_name_th: string;
}

export interface ProductCategoriesResponse {
    status: string;
    message: string;
    data: ProductCategory[];
}

/**
 * ดึงข้อมูลหมวดหมู่สินค้าทั้งหมด
 * @returns Promise<ProductCategoriesResponse>
 */
export const getProductCategories = async (): Promise<ProductCategoriesResponse> => {
    return await apiClient.get('/product-categories/index.php') as unknown as ProductCategoriesResponse;
};
