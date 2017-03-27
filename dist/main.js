(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["react-multiselect-two-sides"] = factory(require("React"));
	else
		root["react-multiselect-two-sides"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_0__;\n\n//////////////////\n// WEBPACK FOOTER\n// external \"React\"\n// module id = 0\n// module chunks = 0 1\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {\n\t\t\treturn classNames;\n\t\t}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/classnames/index.js\n// module id = 1\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./~/classnames/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass FilterContainer extends _react2.default.Component {\n\trender() {\n\t\tconst {\n\t\t\tsearchable,\n\t\t\tfilterAvailable,\n\t\t\tfilterSelected,\n\t\t\tonChangeFilterAvailable,\n\t\t\tonChangeFilterSelected,\n\t\t\trenderFilter\n\t\t} = this.props;\n\n\t\tif (!searchable) {\n\t\t\treturn null;\n\t\t}\n\t\treturn _react2.default.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"msts__subheading\" },\n\t\t\t_react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"msts__side msts__side_filter\" },\n\t\t\t\trenderFilter(filterAvailable, onChangeFilterAvailable)\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"msts__side msts__side_filter\" },\n\t\t\t\trenderFilter(filterSelected, onChangeFilterSelected)\n\t\t\t)\n\t\t);\n\t}\n}\n\nexports.default = FilterContainer;\nFilterContainer.propTypes = {\n\tsearchable: _react2.default.PropTypes.bool,\n\tfilterAvailable: _react2.default.PropTypes.node,\n\tfilterSelected: _react2.default.PropTypes.node,\n\tonChangeFilterAvailable: _react2.default.PropTypes.func,\n\tonChangeFilterSelected: _react2.default.PropTypes.func,\n\trenderFilter: _react2.default.PropTypes.func\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/filter-container.js\n// module id = 2\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./components/filter-container.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass Filter extends _react2.default.Component {\n\tconstructor(props) {\n\t\tvar _this;\n\n\t\t_this = super(props);\n\t\tthis.props = props;\n\t\tthis.handleChange = function (e) {\n\t\t\t_this.props.onChange(e.target.value);\n\t\t};\n\t\tthis.handleClickClear = function () {\n\t\t\t_this.props.onChange('');\n\t\t};\n\t}\n\n\trender() {\n\t\tconst { clearFilterText, clearable, disabled, placeholder, value } = this.props;\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'msts__filter' },\n\t\t\t_react2.default.createElement('input', _extends({\n\t\t\t\tclassName: 'msts__filter-input',\n\t\t\t\tonChange: this.handleChange,\n\t\t\t\ttype: 'text'\n\t\t\t}, { disabled, placeholder, value })),\n\t\t\t' ',\n\t\t\tclearable && value && !disabled ? _react2.default.createElement('span', {\n\t\t\t\tclassName: 'msts__filter-clear', onClick: this.handleClickClear,\n\t\t\t\ttitle: clearFilterText\n\t\t\t}) : null\n\t\t);\n\t}\n}\nexports.default = Filter;\nFilter.propTypes = {\n\tclearFilterText: _react2.default.PropTypes.string,\n\tclearable: _react2.default.PropTypes.bool,\n\tdisabled: _react2.default.PropTypes.bool,\n\tonChange: _react2.default.PropTypes.func.isRequired,\n\tplaceholder: _react2.default.PropTypes.string,\n\tvalue: _react2.default.PropTypes.string\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/filter.js\n// module id = 3\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./components/filter.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass ListSeparator extends _react2.default.Component {\n\trender() {\n\t\tconst { availableSeparator, selectedSeparator, containerClass } = this.props;\n\t\tconst hasHeader = availableSeparator || selectedSeparator;\n\t\tif (!hasHeader) {\n\t\t\treturn null;\n\t\t}\n\n\t\treturn _react2.default.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: containerClass },\n\t\t\t_react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"msts__side msts__side_available\" },\n\t\t\t\tavailableSeparator\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"msts__side msts__side_selected\" },\n\t\t\t\tselectedSeparator\n\t\t\t)\n\t\t);\n\t}\n}\n\nexports.default = ListSeparator;\nListSeparator.propTypes = {\n\tavailableSeparator: _react2.default.PropTypes.node,\n\tselectedSeparator: _react2.default.PropTypes.node,\n\tcontainerClass: _react2.default.PropTypes.string\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/list-separator.js\n// module id = 4\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./components/list-separator.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _listItem = __webpack_require__(7);\n\nvar _listItem2 = _interopRequireDefault(_listItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass List extends _react2.default.Component {\n\tconstructor(props) {\n\t\tvar _this;\n\n\t\t_this = super(props);\n\t\tthis.props = props;\n\t\tthis.handleClick = function (value) {\n\t\t\tif (_this.props.disabled) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\t_this.props.onClick(value);\n\t\t};\n\t}\n\trender() {\n\t\tvar _this2 = this;\n\n\t\tconst { labelKey, options, valueKey } = this.props;\n\t\tconst items = options.map(function (item) {\n\t\t\treturn _react2.default.createElement(_listItem2.default, {\n\t\t\t\tkey: item[valueKey],\n\t\t\t\tonClick: _this2.handleClick,\n\t\t\t\tdisabled: item.disabled,\n\t\t\t\thighlighted: item.highlighted,\n\t\t\t\tlabel: item[labelKey],\n\t\t\t\tvalue: item[valueKey]\n\t\t\t});\n\t\t});\n\n\t\treturn _react2.default.createElement(\n\t\t\t'ul',\n\t\t\t{ className: 'msts__list' },\n\t\t\titems\n\t\t);\n\t}\n\n}\n\nexports.default = List;\nList.propTypes = {\n\tdisabled: _react2.default.PropTypes.bool,\n\tlabelKey: _react2.default.PropTypes.string,\n\tonClick: _react2.default.PropTypes.func,\n\toptions: _react2.default.PropTypes.array,\n\tvalueKey: _react2.default.PropTypes.string\n};\n\nList.defaultProps = {\n\toptions: []\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/list.js\n// module id = 5\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./components/list.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(1);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _list = __webpack_require__(5);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _listSeparator = __webpack_require__(4);\n\nvar _listSeparator2 = _interopRequireDefault(_listSeparator);\n\nvar _filterContainer = __webpack_require__(2);\n\nvar _filterContainer2 = _interopRequireDefault(_filterContainer);\n\nvar _filter = __webpack_require__(3);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass MultiselectTwoSides extends _react2.default.Component {\n\tconstructor(props) {\n\t\tvar _this;\n\n\t\t_this = super(props);\n\t\tthis.state = {\n\t\t\tfilterAvailable: '',\n\t\t\tfilterSelected: ''\n\t\t};\n\n\t\t// Instance methods\n\t\tthis.handleClickAvailable = function (value) {\n\t\t\t_this.props.onChange(_this.props.value.concat(value));\n\t\t};\n\n\t\tthis.handleClickSelected = function (value) {\n\t\t\tconst { onChange, value: currentValue } = _this.props;\n\t\t\tconst newValue = currentValue.slice();\n\n\t\t\tnewValue.splice(currentValue.indexOf(value), 1);\n\t\t\tonChange(newValue);\n\t\t};\n\n\t\tthis.handleClickSelectAll = function () {\n\t\t\tconst { limit, onChange, options, value, valueKey } = _this.props;\n\t\t\tconst previousValue = value.slice();\n\n\t\t\tconst newValue = options.reduce(function (a, b) {\n\t\t\t\tif (!b.disabled && previousValue.indexOf(b[valueKey]) === -1) {\n\t\t\t\t\ta.push(b[valueKey]);\n\t\t\t\t}\n\t\t\t\treturn a;\n\t\t\t}, previousValue);\n\n\t\t\tlet limitedValue = newValue;\n\t\t\tif (limit >= 0) {\n\t\t\t\tlimitedValue = limitedValue.slice(0, limit);\n\t\t\t}\n\n\t\t\tlimitedValue.sort();\n\n\t\t\tonChange(limitedValue);\n\t\t};\n\n\t\tthis.handleClickDeselectAll = function () {\n\t\t\t_this.props.onChange([]);\n\t\t};\n\n\t\tthis.filterAvailable = function () {\n\t\t\tconst {\n\t\t\t\thighlight,\n\t\t\t\tlabelKey,\n\t\t\t\tlimit,\n\t\t\t\toptions,\n\t\t\t\tvalue,\n\t\t\t\tvalueKey\n\t\t\t} = _this.props;\n\t\t\tconst filtered = options.reduce(function (a, b) {\n\t\t\t\tif (value.indexOf(b[valueKey]) === -1) {\n\t\t\t\t\ta.push(b);\n\t\t\t\t}\n\t\t\t\treturn a;\n\t\t\t}, []);\n\n\t\t\tlet limited = filtered;\n\t\t\tif (value.length >= limit) {\n\t\t\t\tlimited = filtered.map(function (item) {\n\t\t\t\t\treturn Object.assign({}, item, { disabled: true });\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tif (highlight && highlight.length > 0) {\n\t\t\t\tlimited = limited.map(function (item) {\n\t\t\t\t\tif (highlight.indexOf(item[valueKey]) > -1) {\n\t\t\t\t\t\treturn Object.assign({}, item, { highlighted: true });\n\t\t\t\t\t}\n\t\t\t\t\treturn item;\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tif (!_this.props.searchable) {\n\t\t\t\treturn limited;\n\t\t\t}\n\n\t\t\tconst { filterAvailable: filter } = _this.state;\n\t\t\tif (filter) {\n\t\t\t\treturn limited.filter(function (a) {\n\t\t\t\t\treturn filterByName(a, filter, labelKey);\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn limited;\n\t\t};\n\n\t\tthis.filterActive = function () {\n\t\t\tconst { labelKey, options, value, valueKey } = _this.props;\n\t\t\tconst filtered = options.reduce(function (a, b) {\n\t\t\t\tif (value.indexOf(b[valueKey]) > -1) {\n\t\t\t\t\ta.push(b);\n\t\t\t\t}\n\t\t\t\treturn a;\n\t\t\t}, []);\n\n\t\t\tif (!_this.props.searchable) {\n\t\t\t\treturn filtered;\n\t\t\t}\n\n\t\t\tconst { filterSelected: filter } = _this.state;\n\t\t\tif (filter) {\n\t\t\t\treturn filtered.filter(function (a) {\n\t\t\t\t\treturn filterByName(a, filter, labelKey);\n\t\t\t\t});\n\t\t\t}\n\n\t\t\treturn filtered;\n\t\t};\n\n\t\tthis.handleChangeFilterAvailable = function (filterAvailable) {\n\t\t\t_this.setState({ filterAvailable });\n\t\t};\n\n\t\tthis.handleChangeFilterSelected = function (filterSelected) {\n\t\t\t_this.setState({ filterSelected });\n\t\t};\n\n\t\tthis.renderFilter = function (value, onChange) {\n\t\t\tconst { clearFilterText, clearable, disabled, filterComponent, placeholder } = _this.props;\n\n\t\t\tif (!filterComponent) {\n\t\t\t\treturn _react2.default.createElement(_filter2.default, _extends({\n\t\t\t\t\tvalue: value,\n\t\t\t\t\tonChange: onChange\n\t\t\t\t}, { clearFilterText, clearable, disabled, placeholder }));\n\t\t\t}\n\n\t\t\treturn _react2.default.createElement(filterComponent, {\n\t\t\t\tclearFilterText,\n\t\t\t\tclearable,\n\t\t\t\tdisabled,\n\t\t\t\tonChange,\n\t\t\t\tplaceholder,\n\t\t\t\tvalue\n\t\t\t});\n\t\t};\n\t}\n\n\trender() {\n\t\tconst {\n\t\t\tavailableFooter,\n\t\t\tavailableHeader,\n\t\t\tclassName,\n\t\t\tdeselectAllText,\n\t\t\tdisabled,\n\t\t\tlabelKey,\n\t\t\tlimit,\n\t\t\toptions,\n\t\t\tsearchable,\n\t\t\tselectAllText,\n\t\t\tselectedFooter,\n\t\t\tselectedHeader,\n\t\t\tshowControls,\n\t\t\tvalue,\n\t\t\tvalueKey\n\t\t} = this.props;\n\n\t\tconst { filterAvailable, filterSelected } = this.state;\n\n\t\tconst componentClassName = 'msts';\n\n\t\tlet sideControls = null;\n\t\tif (showControls) {\n\t\t\tsideControls = _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__side msts__side_controls' },\n\t\t\t\t_react2.default.createElement('button', {\n\t\t\t\t\tclassName: 'msts__control msts__control_select-all',\n\t\t\t\t\tonClick: this.handleClickSelectAll,\n\t\t\t\t\ttitle: selectAllText,\n\t\t\t\t\ttype: 'button',\n\t\t\t\t\tdisabled: value.length === options.length || value.length >= limit || disabled\n\t\t\t\t}),\n\t\t\t\t_react2.default.createElement('button', {\n\t\t\t\t\tclassName: 'msts__control msts__control_deselect-all',\n\t\t\t\t\tonClick: this.handleClickDeselectAll,\n\t\t\t\t\ttitle: deselectAllText,\n\t\t\t\t\ttype: 'button',\n\t\t\t\t\tdisabled: !value.length || disabled\n\t\t\t\t})\n\t\t\t);\n\t\t}\n\n\t\treturn _react2.default.createElement(\n\t\t\t'div',\n\t\t\t{ className: (0, _classnames2.default)(componentClassName, disabled && `${componentClassName}_disabled`, className) },\n\t\t\t_react2.default.createElement(_listSeparator2.default, {\n\t\t\t\tavailableSeparator: availableHeader,\n\t\t\t\tselectedSeparator: selectedHeader,\n\t\t\t\tcontainerClass: 'msts__heading'\n\t\t\t}),\n\t\t\t_react2.default.createElement(_filterContainer2.default, {\n\t\t\t\tsearchable: searchable,\n\t\t\t\tfilterAvailable: filterAvailable,\n\t\t\t\tfilterSelected: filterSelected,\n\t\t\t\tonChangeFilterAvailable: this.handleChangeFilterAvailable,\n\t\t\t\tonChangeFilterSelected: this.handleChangeFilterSelected,\n\t\t\t\trenderFilter: this.renderFilter\n\t\t\t}),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'msts__body' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_available' },\n\t\t\t\t\t_react2.default.createElement(_list2.default, _extends({\n\t\t\t\t\t\toptions: this.filterAvailable(),\n\t\t\t\t\t\tonClick: this.handleClickAvailable\n\t\t\t\t\t}, { disabled, labelKey, valueKey }))\n\t\t\t\t),\n\t\t\t\tsideControls,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'msts__side msts__side_selected' },\n\t\t\t\t\t_react2.default.createElement(_list2.default, _extends({\n\t\t\t\t\t\toptions: this.filterActive(),\n\t\t\t\t\t\tonClick: this.handleClickSelected\n\t\t\t\t\t}, { disabled, labelKey, valueKey }))\n\t\t\t\t)\n\t\t\t),\n\t\t\t_react2.default.createElement(_listSeparator2.default, {\n\t\t\t\tavailableSeparator: availableFooter,\n\t\t\t\tselectedSeparator: selectedFooter,\n\t\t\t\tcontainerClass: 'msts__footer'\n\t\t\t})\n\t\t);\n\t}\n}\n\nexports.default = MultiselectTwoSides;\n\n\nfunction filterByName(a, name, labelKey) {\n\treturn a[labelKey].toLowerCase().indexOf(name.toLowerCase()) > -1;\n}\n\nMultiselectTwoSides.propTypes = {\n\tavailableFooter: _react2.default.PropTypes.node,\n\tavailableHeader: _react2.default.PropTypes.node,\n\tclassName: _react2.default.PropTypes.string,\n\tclearFilterText: _react2.default.PropTypes.string,\n\tclearable: _react2.default.PropTypes.bool,\n\tdeselectAllText: _react2.default.PropTypes.string,\n\tdisabled: _react2.default.PropTypes.bool,\n\tfilterComponent: _react2.default.PropTypes.func,\n\thighlight: _react2.default.PropTypes.array,\n\tlabelKey: _react2.default.PropTypes.string,\n\tlimit: _react2.default.PropTypes.number,\n\tonChange: _react2.default.PropTypes.func,\n\toptions: _react2.default.PropTypes.array,\n\tplaceholder: _react2.default.PropTypes.string,\n\tsearchable: _react2.default.PropTypes.bool,\n\tselectAllText: _react2.default.PropTypes.string,\n\tselectedFooter: _react2.default.PropTypes.node,\n\tselectedHeader: _react2.default.PropTypes.node,\n\tshowControls: _react2.default.PropTypes.bool,\n\tvalue: _react2.default.PropTypes.array,\n\tvalueKey: _react2.default.PropTypes.string\n};\n\nMultiselectTwoSides.defaultProps = {\n\tclearFilterText: 'Clear',\n\tclearable: true,\n\tdeselectAllText: 'Deselect all',\n\tdisabled: false,\n\thighlight: [],\n\tlabelKey: 'label',\n\toptions: [],\n\tsearchable: false,\n\tselectAllText: 'Select all',\n\tshowControls: false,\n\tvalue: [],\n\tvalueKey: 'value'\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./index.js\n// module id = 6\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _classnames = __webpack_require__(1);\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nclass ListItem extends _react2.default.Component {\n\tconstructor(props) {\n\t\tvar _this;\n\n\t\t_this = super(props);\n\t\tthis.handleClick = function () {\n\t\t\tif (_this.props.disabled) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst { onClick, value } = _this.props;\n\t\t\tonClick(value);\n\t\t};\n\t}\n\n\trender() {\n\t\tconst { disabled, highlighted, label } = this.props;\n\t\tconst className = 'msts__list-item';\n\n\t\treturn _react2.default.createElement(\n\t\t\t'li',\n\t\t\t{\n\t\t\t\tclassName: (0, _classnames2.default)(className, disabled && `${className}_disabled`, highlighted && `${className}_highlighted`),\n\t\t\t\tonClick: this.handleClick\n\t\t\t},\n\t\t\tlabel\n\t\t);\n\t}\n}\n\nexports.default = ListItem;\nListItem.propTypes = {\n\tdisabled: _react2.default.PropTypes.bool,\n\thighlighted: _react2.default.PropTypes.bool,\n\tlabel: _react2.default.PropTypes.string,\n\tonClick: _react2.default.PropTypes.func,\n\tvalue: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string])\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./components/list-item.js\n// module id = 7\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./components/list-item.js?");

/***/ })
/******/ ]);
});