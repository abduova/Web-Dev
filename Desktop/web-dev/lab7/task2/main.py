from models import Dog, Cat


dog = Dog("Aktos", 3, "white", "Labrador")
cat = Cat("Murka", 2, "brown", 9)

animals = [dog, cat]

for a in animals:
    print(a)
    print(a.info())
    print(a.speak())
    print()
    