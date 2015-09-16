'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(['react', 'react-bootstrap', 'ramda', 'shuttle', 'shuttle-react', 'components/text-cell'], function (React, ReactBootstrap, R, Shuttle, ShuttleReact, TextCellView) {
    var ParticipantView = (function (_Shuttle$React$Component) {
        _inherits(ParticipantView, _Shuttle$React$Component);

        function ParticipantView(props) {
            _classCallCheck(this, ParticipantView);

            _get(Object.getPrototypeOf(ParticipantView.prototype), 'constructor', this).call(this, props);
        }

        _createClass(ParticipantView, [{
            key: 'render',
            value: function render() {
                var _this = this;

                var DOM = React.DOM;

                return DOM.tr({ key: 'opened-participant-row-1', className: 'non-selected ' + (this.state.opened ? 'selected' : ''), onClick: function onClick() {
                        return _this.props.opened.set(!_this.state.opened);
                    } }, [DOM.td({ className: 'important middle-aligned' }, DOM.span({ className: 'race-number' }, "42")), DOM.td({ className: 'middle-aligned' }, DOM.img({ className: 'country', src: 'http://www.geonames.org/flags/x/ua.gif' })), DOM.td({ className: 'important middle-aligned' }, "Vyacheslav Goldenshteyn"), DOM.td({ className: 'middle-aligned' }, "Honda FMX 650"), DOM.td({ className: 'middle-aligned' }, "Group 3B"), DOM.td({ className: 'important middle-aligned' }, "0/1"), DOM.td({ className: 'middle-aligned' }, "Sommmmm Team")]);
            }
        }]);

        return ParticipantView;
    })(Shuttle.React.Component);

    var AdditionalParticipantView = (function (_Shuttle$React$Component2) {
        _inherits(AdditionalParticipantView, _Shuttle$React$Component2);

        function AdditionalParticipantView() {
            _classCallCheck(this, AdditionalParticipantView);

            _get(Object.getPrototypeOf(AdditionalParticipantView.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(AdditionalParticipantView, [{
            key: 'render',
            value: function render() {
                var DOM = React.DOM;

                return DOM.tr({ key: 'opened-participant-row-2' }, [DOM.td({ style: { padding: '0' } }), DOM.td({ style: { padding: '0' }, colSpan: 3 }, [DOM.div({ className: 'non-selected-additional ' + (this.state.opened ? 'selected-additional' : '') }, React.createElement(ReactBootstrap.Table, { className: 'inner-table', responsive: true, condensed: true }, [DOM.thead({}, DOM.tr({}, [DOM.td({}, ""), DOM.td({}, "Time"), DOM.td({}, "Penalty"), DOM.th({}, "Total"), DOM.td({}, "∆")])), DOM.tbody({}, [DOM.tr({}, [DOM.td({}, "1"), DOM.td({ className: 'col-md-2' }, "1:11.15"), DOM.td({}, [React.createElement(ReactBootstrap.Label, { bsStyle: 'warning' }, "Cone")]), DOM.td({ className: 'col-md-2' }, "1:12.15"), DOM.td({ className: 'col-md-2' }, "0:00.00")]), DOM.tr({}, [DOM.td({}, "2"), DOM.td({ className: 'col-md-2' }, "1:11.16"), DOM.td({}, [React.createElement(ReactBootstrap.Label, { bsStyle: 'warning' }, "Cone")]), DOM.td({ className: 'col-md-2' }, "1:12.16"), DOM.td({ className: 'col-md-2' }, "0:00.01")])])]))]), DOM.td({ style: { padding: '0' }, colSpan: 3 })]);
            }
        }]);

        return AdditionalParticipantView;
    })(Shuttle.React.Component);

    var a = Shuttle.ref(false);
    var b = Shuttle.ref(true);
    var c = Shuttle.ref(false);
    var d = Shuttle.ref(false);

    var CompetitionView = (function (_React$Component) {
        _inherits(CompetitionView, _React$Component);

        function CompetitionView() {
            _classCallCheck(this, CompetitionView);

            _get(Object.getPrototypeOf(CompetitionView.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(CompetitionView, [{
            key: 'render',
            value: function render() {
                var DOM = React.DOM;

                var eventId = this.props.params.eventId;
                return DOM.div({}, [React.createElement(ReactBootstrap.Pager, {}, [React.createElement(ReactBootstrap.PageItem, {
                    previous: true,
                    href: '#event/' + eventId + '/registration'
                }, [React.createElement(ReactBootstrap.Glyphicon, { glyph: 'menu-left' }), ' ', "Registration"]), React.createElement(ReactBootstrap.PageItem, { href: '#event/' + eventId + '/competition' }, "Competition"), React.createElement(ReactBootstrap.PageItem, { next: true, href: '#event/' + eventId + '/results' }, ["Results", ' ', React.createElement(ReactBootstrap.Glyphicon, { glyph: 'menu-right' })])]), React.createElement(ReactBootstrap.Table, {
                    className: 'pair-table-striped',
                    responsive: true,
                    hover: true
                }, [DOM.tbody({}, [React.createElement(ParticipantView, { opened: a }), React.createElement(AdditionalParticipantView, { opened: a }), React.createElement(ParticipantView, { opened: b }), React.createElement(AdditionalParticipantView, { opened: b }), React.createElement(ParticipantView, { opened: c }), React.createElement(AdditionalParticipantView, { opened: c }), React.createElement(ParticipantView, { opened: d }), React.createElement(AdditionalParticipantView, { opened: d })])])]);
            }
        }]);

        return CompetitionView;
    })(React.Component);

    return CompetitionView;
});

//# sourceMappingURL=competition.js.map