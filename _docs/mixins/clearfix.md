---
title: Clearfix
category: mixins
layout: default
---

This is about the button styling

###### Code

{% highlight scss %}
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
{% endhighlight %}

###### Usage

{% highlight sass %}
element
    +clearfix
{% endhighlight %}