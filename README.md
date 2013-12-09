Angular-Sortable
================

A UI sortable directive for Angular

You can see it implemented in the [Angular-Sortable gh-pages site](http://willsp.github.io/Angular-Sortable)

It works with Internet Explorer 9 or later. Only angularjs 1.2.2 required. No other
frameworks or libraries.

To use it, set up your html like so...

    <ul>
        <li ng-repeat="bar in foo" pw-sortable="<vertical | horizontal" pw-handle>{{bar}}</li>
    </ul>

* pw-sortable - the parameter is optional and defaults to vertical, you can also specify
horizontal (any other value will just give you vertical
* pw-handle can be assigned to the same element or a child element, this will
be the element you "grab" onto to drag it.

This directive must be used with ng-repeat. It only supports the most basic form of the statement (element in array or
property in object), no trackBy or filters.

