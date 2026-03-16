from models import Dog, Cat


dog = Dog("Bob", 3, "brown", "Labrador")
cat = Cat("Milo", 2, "white", 9)

animals = [dog, cat]

for a in animals:
    print(a)
    print(a.info())
    print(a.speak())
    print()
    