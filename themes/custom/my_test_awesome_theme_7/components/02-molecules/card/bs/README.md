## References
* https://getbootstrap.com/docs/5.1/components/card/

## SASS Variables

Should be added to the:
`components/00-bootstrap/styles/_variables.scss`

```
$card-spacer-y:                     $spacer;
$card-spacer-x:                     $spacer;
$card-title-spacer-y:               $spacer * .5;
$card-border-width:                 $border-width;
$card-border-color:                 rgba($black, .125);
$card-border-radius:                $border-radius;
$card-box-shadow:                   null;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width);
$card-cap-padding-y:                $card-spacer-y * .5;
$card-cap-padding-x:                $card-spacer-x;
$card-cap-bg:                       rgba($black, .03);
$card-cap-color:                    null;
$card-height:                       null;
$card-color:                        null;
$card-bg:                           $white;
$card-img-overlay-padding:          $spacer;
$card-group-margin:                 $grid-gutter-width * .5;
```
