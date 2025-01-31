def fizzbuzz():
    x = range(100)
    for n in x:
        if n % 15 == 0:
            print("fizzbuzz")
        elif n % 3 == 0:
            print("fizz")
        elif n % 5 == 0:
            print("buzz")
        else:
            print(n)

fizzbuzz()

# doing fizzbuzz on python to help me remember the syntax
