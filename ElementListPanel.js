function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from 'react';
import { elementIcons } from './gameData.js';
var ElementListPanel = function(param) {
    var elements = param.elements;
    var _useState = _sliced_to_array(useState(''), 2), searchTerm = _useState[0], setSearchTerm = _useState[1];
    var filteredElements = elements.filter(function(element) {
        return element.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            height: '100%',
            padding: '15px',
            overflowY: 'auto'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                style: {
                    margin: '0 0 15px 0',
                    fontSize: '1.3rem'
                },
                children: "All Elements"
            }, void 0, false, {
                fileName: "ElementListPanel.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    marginBottom: '15px'
                },
                children: /*#__PURE__*/ _jsxDEV("input", {
                    type: "text",
                    placeholder: "Search elements...",
                    value: searchTerm,
                    onChange: function(e) {
                        return setSearchTerm(e.target.value);
                    },
                    style: {
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.1)',
                        color: 'inherit',
                        fontSize: '14px'
                    }
                }, void 0, false, {
                    fileName: "ElementListPanel.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "ElementListPanel.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '10px'
                },
                children: filteredElements.map(function(element) {
                    return /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            padding: '10px',
                            borderRadius: '8px',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    fontSize: '24px'
                                },
                                children: elementIcons[element] || '❓'
                            }, void 0, false, {
                                fileName: "ElementListPanel.jsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    fontSize: '14px'
                                },
                                children: element
                            }, void 0, false, {
                                fileName: "ElementListPanel.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, _this)
                        ]
                    }, element, true, {
                        fileName: "ElementListPanel.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "ElementListPanel.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "ElementListPanel.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, _this);
};
export default ElementListPanel;
