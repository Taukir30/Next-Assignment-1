# Explaining Access Modifiers in TypeScript OOP

## Introduction
Object-oriented programming in TypeScript brings a really cool feature from languages like Java or C#: access modifiers. These keywords (`public`, `private`, `protected`, and `readonly`) help us control what parts of our class can be seen or changed from the outside. This is a core concept in programming called encapsulation.

## How the Modifiers Work
In plain JavaScript, keywords like `public`, `protected`, and `readonly` don't actually exist natively. While JS recently introduced the `#` symbol for private fields, it can still feel a bit clunky. TypeScript solves this beautifully by adding these access modifier keywords directly into the language syntax. TypeScript enforces these rules during the compile step, catching errors before the code even runs in the browser.

Here is a quick breakdown of how these specific modifiers change the behavior of our class properties:

* **`public`**: This is the default behavior. Anyone can access a public property from anywhere in the code.

* **`private`**: A private property can only be used inside the exact class where it was created. Even if you extend the class, the child class cannot touch it!

* **`protected`**: This is exactly like private, but subclasses (child classes that extend the parent) are actually allowed to access it.

* **`readonly`**: This makes a property completely unchangeable after it gets its initial value in the constructor.

```typescript
class Car {
  public brand: string;
  private engineId: number;
  protected topSpeed: number;
  readonly wheels: number = 4;

  constructor(brand: string, engineId: number, topSpeed: number) {
    this.brand = brand;
    this.engineId = engineId;
    this.topSpeed = topSpeed;
  }
}
```

## Conclusion
Access modifiers make our code much safer and more organized. They prevent other developers from accidentally breaking our class logic by changing sensitive data (like an `engineId` or a bank balance) from the outside! It is a great habit to make things private by default unless they really need to be public.