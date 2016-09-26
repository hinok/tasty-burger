# :fire: :hamburger: Tasty Burger

Mmmmhmmm this is a tasty burger

[![Mmmmhmmm this is a tasty burger](http://i.imgur.com/g6Oltok.gif)](https://www.youtube.com/watch?v=Mnb_3ibUp38&t=54 "Mmmmhmmm this is a tasty burger")

## Usage

### Take meat

```html
<link rel="stylesheet" href="tasty-burger.css">
```

### Put it on grill

```html
<div class="tb tb--lg"><span></span></div>
```

### Sizes `--sm`, `--md`, `--lg`

```html
<!-- Small - 12px -->
<div class="tb tb--sm"><span></span></div>

<!-- Large - 24px -->
<div class="tb tb--md"><span></span></div>

<!-- Large - 44px -->
<div class="tb tb--lg"><span></span></div>
```

### Your own size

```scss
@import 'tasty-burger';

@include tasty-burger($size-name: 'medium-rare', $icon-size: 32px);
```

```html
<div class="tb tb--medium-rare"><span></span></div>
```

### Your own everything

```scss
$tb-class: '.my-tasty-burger';
$tb-color: pink;
$tb-bar-height: 4px;
$tb-animation-time: 0.15s;
$tb-sizes: (default: 30px);

@import 'tasty-burger';
```

```html
<div class="my-tasty-burger my-tasty-burger--default"><span></span></div>
```

## API

### Variables

### `$tb-class`, defaults `.tb`

Base css class that will be generated.

### `$tb-color`, defaults `#000`

Color of each icon's bar.

### `$tb-bar-height`, defaults `2px`

Height of each bar in the icon.

### `$tb-animation-time`, defaults `0.3s`

Duration of animation.

### `$tb-sizes`, defaults `(sm: 12px, md: 24px, lg: 44px)`

Map that holds sizes for generated CSS, depends on `$tb-class`.

### Mixins

### `@mixin tasty-burger($size-name, $icon-size)`

- `$size-name` - name of modifier for base class
- `$icon-size` - height of the icon

## Supported browsers ([source](https://css-tricks.com/transitions-and-animations-on-css-generated-content/))

- Firefox 4.0 and up
- Safari 6.1 and up
- Chrome 26 and up
- Opera 15 and up (post Blink)
- IE 10 and up
- Safari iOS 7

## License

MIT
