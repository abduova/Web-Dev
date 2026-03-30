from django.http import JsonResponse
from django.views import View
from .models import Product, Category


def product_to_dict(p):
    return {
        'id': p.id,
        'name': p.name,
        'price': p.price,
        'description': p.description,
        'count': p.count,
        'is_active': p.is_active,
        'category_id': p.category_id,
    }


def category_to_dict(c):
    return {
        'id': c.id,
        'name': c.name,
    }


class ProductListView(View):
    def get(self, request):
        products = Product.objects.all()
        data = [product_to_dict(p) for p in products]
        return JsonResponse(data, safe=False)


class ProductDetailView(View):
    def get(self, request, id):
        try:
            product = Product.objects.get(pk=id)
            return JsonResponse(product_to_dict(product))
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Not found'}, status=404)


class CategoryListView(View):
    def get(self, request):
        categories = Category.objects.all()
        data = [category_to_dict(c) for c in categories]
        return JsonResponse(data, safe=False)


class CategoryDetailView(View):
    def get(self, request, id):
        try:
            category = Category.objects.get(pk=id)
            return JsonResponse(category_to_dict(category))
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Not found'}, status=404)


class CategoryProductsView(View):
    def get(self, request, id):
        try:
            category = Category.objects.get(pk=id)
            products = category.products.all()
            data = [product_to_dict(p) for p in products]
            return JsonResponse(data, safe=False)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Not found'}, status=404)
        