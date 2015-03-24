---
title: Media Queries
category: mixins
layout: default
---

This is about the button styling

source

{% highlight scss %}
@mixin breakpoint($bp) {
    @media only screen and (min-width: $bp) {
        @content;
    }
}
{% endhighlight %}

usage

{% highlight scss %}
element {
    background: red;
    @include breakpoint(500px) {
        background: blue;
    }
}
{% endhighlight %}