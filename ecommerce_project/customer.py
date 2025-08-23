from user import User

class Customer(User):
    def __init__(self, user_id, username, email, password):
        super().__init__(user_id, username, email, password)
        self.cart = []

    def add_to_cart(self, item):
        self.cart.append(item)
        print(f"{item} added to cart.")

    def view_cart(self):
        if not self.cart:
            print("Cart is empty.")
        else:
            print("Items in your cart:")
            for item in self.cart:
                print(f"- {item}")

    def buy_items(self):
        if not self.cart:
            print("Cart is empty, cannot checkout.")
        else:
            print(f"Purchasing items: {', '.join(self.cart)}")
            self.cart = []
