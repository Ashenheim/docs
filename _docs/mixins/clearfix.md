---
title: Clearfix
category: mixins
layout: docs
---

This is about the button styling

###### Code

# Heading one
## heading two

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sint vel dignissimos voluptatem aliquid laudantium porro natus, necessitatibus magnam iure nulla neque veniam, vero eligendi nisi. Necessitatibus deserunt maxime, distinctio.

```scss
@mixin clearfix() {
    *zoom: 1;
    &:before {
        content: " ";
        display: table;
    }
    &:after {
        content: " ";
        display: table;
        clear: both;
    }
}

%clearfix {
    @include clearfix;
}
```

###### Usage

{% highlight sass %}
element
    +clearfix
{% endhighlight %}