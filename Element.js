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
import React, { useState, useRef, useEffect } from 'react';
import { elementIcons } from './gameData.js';
var Element = function(param) {
    var element = param.element, onDragStart = param.onDragStart, onDrag = param.onDrag, onDragEnd = param.onDragEnd, _param_draggable = param.draggable, draggable = _param_draggable === void 0 ? false : _param_draggable, animationClass = param.animationClass;
    var _useState = _sliced_to_array(useState(element.position || {
        x: 0,
        y: 0
    }), 2), position = _useState[0], setPosition = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), isDragging = _useState1[0], setIsDragging = _useState1[1];
    var elementRef = useRef(null);
    useEffect(function() {
        if (!element.position && draggable) {
            var _document_querySelector;
            // Set a random initial position for new elements
            var parentRect = (_document_querySelector = document.querySelector('[data-workspace="true"]')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.getBoundingClientRect();
            var x, y;
            if (parentRect) {
                // Position within the workspace bounds
                x = Math.random() * (parentRect.width - 60) + 30;
                y = Math.random() * (parentRect.height - 60) + 30;
            } else {
                // Fallback if workspace not found
                x = Math.random() * (window.innerWidth * 0.6) + 50;
                y = Math.random() * (window.innerHeight * 0.3) + 50;
            }
            element.position = {
                x: x,
                y: y
            };
            setPosition(element.position);
        }
    }, [
        element,
        draggable
    ]);
    var handleMouseDown = function(e) {
        if (!draggable) return;
        setIsDragging(true);
        onDragStart && onDragStart(element, e);
        // Store the initial position where the drag started
        var initialX = position.x;
        var initialY = position.y;
        // Calculate the offset from the mouse position to the element's current position
        var offsetX = e.clientX - initialX;
        var offsetY = e.clientY - initialY;
        var handleMouseMove = function(e) {
            // Use the same offset throughout the entire drag operation
            var newPos = {
                x: e.clientX - offsetX,
                y: e.clientY - offsetY
            };
            setPosition(newPos);
            onDrag && onDrag(element, newPos);
        };
        var handleMouseUp = function(e) {
            setIsDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            onDragEnd && onDragEnd(e);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    var icon = elementIcons[element.name] || '❓';
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: elementRef,
        style: {
            position: draggable ? 'absolute' : 'relative',
            left: draggable ? position.x : undefined,
            top: draggable ? position.y : undefined,
            width: draggable ? '70px' : '50px',
            height: draggable ? '70px' : '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isDragging ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            cursor: draggable ? 'grab' : 'default',
            fontSize: draggable ? '2.5rem' : '1.8rem',
            transform: isDragging ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.1s, background 0.2s',
            zIndex: isDragging ? 100 : 10,
            userSelect: 'none',
            animation: element.animationClass || animationClass
        },
        onMouseDown: handleMouseDown,
        children: [
            icon,
            draggable && /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    position: 'absolute',
                    bottom: '-22px',
                    fontSize: '14px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    background: 'rgba(0, 0, 0, 0.5)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    maxWidth: '90px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                },
                children: element.name
            }, void 0, false, {
                fileName: "Element.jsx",
                lineNumber: 94,
                columnNumber: 9
            }, _this),
            !draggable && /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    position: 'absolute',
                    bottom: '-20px',
                    fontSize: '14px',
                    width: '70px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                },
                children: element.name
            }, void 0, false, {
                fileName: "Element.jsx",
                lineNumber: 111,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Element.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, _this);
};
export default Element;
