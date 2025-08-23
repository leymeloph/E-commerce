class User:
    def __init__(self, user_id, username, email, password):
        self.user_id = user_id
        self.username = username
        self.email = email
        self.password = password

    def login(self, email, password):
        if self.email == email and self.password == password:
            return True
        return False

    def logout(self):
        print(f"{self.username} has logged out.")
