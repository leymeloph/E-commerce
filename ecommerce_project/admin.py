from user import User

class Admin(User):
    def __init__(self, user_id, username, email, password):
        super().__init__(user_id, username, email, password)
        self.products = {}

    def add_product(self, product_id, product_name, price):
        if product_id in self.products:
            print(f"Product ID {product_id} already exists.")
        else:
            self.products[product_id] = {"name": product_name, "price": price}
            print(f"Added product: {product_name} (₱{price})")

    def remove_product(self, product_id):
        if product_id in self.products:
            removed = self.products.pop(product_id)
            print(f"Removed product: {removed['name']}")
        else:
            print("Product not found.")

    def view_products(self):
        if not self.products:
            print("No products available.")
        else:
            print("Available products:")
            for pid, details in self.products.items():
                print(f"ID: {pid} | {details['name']} - ₱{details['price']}")
