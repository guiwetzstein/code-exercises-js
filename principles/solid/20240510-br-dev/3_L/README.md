# Liskov's Substitution Principle (LSP)

In this example, we have two birds extending a base Bird class. But Penguin can't fly, so it's throwing an error, modifying the behavior of it's parent class. It cannot be replaced by it's parent class without breaking the application, which is not good.

This shows that we need to create a different parent class to be extended by each one, respecting the substitution principle. We could still create a generic Bird class, which would be the parent of those.
