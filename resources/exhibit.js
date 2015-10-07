/* global React */
/* global locations */

"use strict";

var AnimalView = React.createClass({
    displayName: "AnimalView",

    render: function render() {
        return React.createElement(
            "div",
            { className: "animal" },
            React.createElement(
                "h3",
                null,
                this.props.animal.name
            ),
            React.createElement("img", { src: "images/" + this.props.animal.image, width: 300 })
        );
    }
});

var ExhibitView = React.createClass({
    displayName: "ExhibitView",

    render: function render() {
        function item(animal) {
            return React.createElement(AnimalView, { animal: animal });
        };
        return React.createElement(
            "section",
            { className: "exhibit" },
            React.createElement(
                "h2",
                null,
                this.props.exhibit[0].location
            ),
            this.props.exhibit.map(item)
        );
    }
});

var ContainerView = React.createClass({
    displayName: "ContainerView",

    render: function render() {
        function item(exhibit) {
            return React.createElement(ExhibitView, { exhibit: exhibit });
        };
        return React.createElement(
            "section",
            null,
            this.props.locations.map(item)
        );
    }
});

React.render(React.createElement(ContainerView, { className: "container", locations: locations }), document.getElementById('exhibits'));
