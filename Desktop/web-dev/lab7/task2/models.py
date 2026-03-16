class Animal:

    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def speak(self):
        return "Some sound"

    def info(self):
        return self.name + " is " + str(self.age) + " years old"

    def __str__(self):
        return self.name + " (" + self.color + ")"
        

class Dog(Animal):

    def __init__(self, name, age, color, breed):
        Animal.__init__(self, name, age, color)
        self.breed = breed

    def speak(self):
        return "Woof"


class Cat(Animal):

    def __init__(self, name, age, color, lives):
        Animal.__init__(self, name, age, color)
        self.lives = lives

    def speak(self):
        return "Meow"
    