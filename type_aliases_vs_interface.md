# Understanding Type Aliases vs. Interfaces in TypeScript

## Introduction
As I learned OOP in my previous PHP course, I was familiar with `interface`. But when I first started working with TypeScript, one of the biggest confusions I faced was choosing between a `type` alias and an `interface` as both looks similar at first glance. At first glance, they both seem to do exactly the same thing: define the shape of our data. However, as I practiced more and built larger projects, I realized they have a few key differences that dictate when to use each.

## The Core Differences
An `interface` is strictly used for defining the shapes of objects. The coolest thing about interfaces is a feature called "declaration merging". If you declare the same interface twice, TypeScript automatically merges them together into one single definition. 

```typescript
interface User { 
  name: string; 
}
interface User { 
  age: number; 
}
// The User interface now requires both name and age properties!
```

On the other hand, a `type` alias is a lot more flexible. You can use it for objects, but you can also use it for union types, intersection types, and basic primitives. Interfaces simply cannot do this.

```typescript
type ID = string | number; // A union type
type Point = [number, number]; // A tuple type
```

## Conclusion
So, when should we use which? I normally use `interface` when defining the shape of objects or classes, especially if someone else might need to extend it later. I switch to `type` aliases whenever I need union types, function types, or when working with simpler variable combinations.