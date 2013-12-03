Angular-Sortable
================

A UI sortable directive for Angular

You can see it implemented in the [github pages site](http://willsp.github.io/Angular-Sortable/)

It works with Internet Explorer 9 or later. Only angularjs 1.2.2 required. No other
frameworks or libraries.

To use it, set up your html like so...

    <ul>
        <li ng-repeat="bar in foo" pw-sortable="foo" reference="bar" pw-handle>{{bar}}</li>
    </ul>

* reference is a reference to the item (usually the first part of ng-repeat)
* pw-sortable should equal the collection (the second part of ng-repeat)
* direction is optional and defaults to vertical, you can also specify
horizontal (any other value will just give you vertical
* pw-handle can be assigned to the same element or a child element, this will
be the element you "grab" onto to drag it.

Your app will need to include the directive, you can copy and paste it, or just
assign your app to:

    window.angularModule

This will likely only be used with ng-repeat... thinking about just reusing the ng-repeat stuff and assigning the direction in pw-sortable...

