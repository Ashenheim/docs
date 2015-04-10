---
title: Spinner
category: elements
layout: docs
---

###### Cube spinner

```html
<div class="spinner-container box-spinner">
    <div class="spinner"></div>
</div>

<div class="spinner-container line-loader">
    <div class="spinner">
        <div class="spinner-inner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
```

```scss
/* ====================================
    Spinner styling
==================================== */


.spinner {
    display: inline-block;

    .box-spinner & {

        &:after {
            content: '';
            @include size(50px);
            background: $c-main;
            display: inline-block;
            animation: box-spinner 3s cubic-bezier(.09, .57, .49, .9) infinite;
        }
    }

    .line-loader & {

        &-inner {
            display: inline-block;
            font-size: 0;

            > div {
                width: 10px;
                height: 50px;
                background: $c-main;
                display: inline-block;
                margin: 0 1px;
                transform: scaleY(.5);
                animation: line-loader 1s cubic-bezier(.09, .57, .49, .9) infinite;

                @for $i from 1 through 5 {
                    &:nth-child(#{$i}) {
                        animation-delay: 0.1s * $i;
                    }
                }
            }
        }
    }
    &-container {
        text-align: center;
    }
}


/* Animations
==================================== */


@keyframes box-spinner {
    25% {
        transform: perspective(120px) rotateX(180deg) rotateY(0);
    } 50% {
        transform: perspective(120px) rotateX(180deg) rotateY(180deg);
    } 75% {
        transform: perspective(120px) rotateX(0) rotateY(180deg);
    } 100% {
        transform: perspective(120px) rotateX(0) rotateY(0);
    }
}


@keyframes line-loader {
    0%, 100% {
        transform: scaleY(.5);
        opacity: 1;
    } 50% {
        transform: scaleY(1);
        opacity: .7;
    }
}
```