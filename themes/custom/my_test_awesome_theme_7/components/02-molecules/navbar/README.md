## References
* https://getbootstrap.com/docs/5.1/components/navbar/

## SASS Variables

Should be added to the:
`components/00-bootstrap/styles/_variables.scss`

```
$navbar-padding-y:                  $spacer * .5;
$navbar-padding-x:                  null;

$navbar-nav-link-padding-x:         .5rem;

$navbar-brand-font-size:            fontSize(lg);
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end:           1rem;

$navbar-toggler-padding-y:          .25rem;
$navbar-toggler-padding-x:          .75rem;
$navbar-toggler-font-size:          fontSize(lg);
$navbar-toggler-border-radius:      $btn-border-radius;
$navbar-toggler-focus-width:        $btn-focus-width;
$navbar-toggler-transition:         box-shadow .15s ease-in-out;
```

```
$navbar-dark-color:                 rgba($white, .55);
$navbar-dark-hover-color:           rgba($white, .75);
$navbar-dark-active-color:          $white;
$navbar-dark-disabled-color:        rgba($white, .25);
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-dark-toggler-border-color:  rgba($white, .1);

$navbar-light-color:                rgba($black, .55);
$navbar-light-hover-color:          rgba($black, .7);
$navbar-light-active-color:         rgba($black, .9);
$navbar-light-disabled-color:       rgba($black, .3);
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-light-toggler-border-color: rgba($black, .1);

$navbar-light-brand-color:                $navbar-light-active-color;
$navbar-light-brand-hover-color:          $navbar-light-active-color;
$navbar-dark-brand-color:                 $navbar-dark-active-color;
$navbar-dark-brand-hover-color:           $navbar-dark-active-color;
```
