---
title: "Living with null in .NET"
author: "cptwesley"
date: "2023-03-19T20:00:00Z"
---

# Living with null in .NET

If you ever did a Google (or Bing) search about `null`, you might have come across some articles describing why [we should stop using null](https://medium.com/swlh/we-need-to-stop-using-null-heres-why-c56ff3ac72dd), why [null is the worst mistake in computer science](https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/), why [null is bad](https://dev.to/mbernard/why-null-in-c-is-so-bad-cid), why [null is evil](https://blog.ndepend.com/null-evil/) and why [we shouldn't use null, because it's evil](https://the-null-log.org/post/176008930669/dont-use-null-null-is-evil). These articles might provide you with a subtle hint that this extremely common 4 letter word, which exists in most programming languages, is perhaps more dangerous than it originally seemed to be. If the sarcasm wasn't clear: `null` can indeed be quite dangerous and many language designers are probably regretting the choice to include it in their language.

Instead of writing another article on why `null` should be avoided, or providing you an overview of what programming languages you can use to avoid the `null` situation altogether, I decided to focus on what steps we can take to limit the potential dangers of `null` in my favourite programming language: C#.

Let's start with a simple example of method that has some hidden danger:

```cs
private Foo foo;

// ...

public override string ToString() {
  return foo.ToString();
}
```

If the field `foo` is not instantiated to a non-`null` value, we will encounter a nasty `NullReferenceException` when we execute this function. We usually expect `ToString` to be able to return without crashing regardless of the state of the object. Thus this behaviour is not desirable.

## Null-state analysis

Thankfully, C# language version 8 (released together with .NET Core 3 in 2019) introduced so-called _null-state analysis_. This form of static analysis allows partial automatic detection of locations in the code where potential `NullReferenceException`s could occur during run-time. Enabling this feature is as simple as adding the following to the `PropertyGroup` inside your `.csproj` project file:

```xml
<Nullable>enable</Nullable>
```

An example of a fully configured `.csproj` is given below:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
```

It must be noted that using this feature requires C# language version 8 to be used in your project. This is automatically the case for any project targeting .NET Core 3.0 or any newer version of .NET. For more information about how to use modern C# language features, while still targeting older .NET versions, have a look [here](/post/using-modern-csharp-features-in-older-targets).

Having enabled this feature
