function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import React, { useContext, useRef } from 'react';
import { GameContext } from './GameContext.js';
import Element from './Element.js';
import { elementIcons } from './gameData.js';
import { AudioManager } from './AudioManager.js';
var ElementLibrary = function() {
    var _useContext = useContext(GameContext), elements = _useContext.elements, addElementToWorkspace = _useContext.addElementToWorkspace, workspace = _useContext.workspace, setWorkspace = _useContext.setWorkspace;
    var libraryRef = useRef(null);
    // Only show basic elements and discovered elements
    var baseElements = Object.values(elements).filter(function(elem) {
        return elem.isBasic || elem.discovered;
    });
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            marginbottom: '15px',
            padding: '15px'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    marginBottom: '20px',
                    opacity: 0.7,
                    textAlign: 'center',
                    fontSize: '1rem',
                    padding: '5px 0'
                },
                children: "Drag elements to workspace:"
            }, void 0, false, {
                fileName: "ElementLibrary.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                ref: libraryRef,
                style: {
                    display: 'flex',
                    gap: '15px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    rowGap: '25px'
                },
                children: baseElements.map(function(element) {
                    var handleDragStart = function(e) {
                        // Create a ghost image that follows the cursor
                        var ghostElement = document.createElement('div');
                        ghostElement.textContent = elementIcons[element.name] || '❓';
                        ghostElement.style.fontSize = '24px';
                        ghostElement.style.opacity = '0.6';
                        document.body.appendChild(ghostElement);
                        e.dataTransfer.setDragImage(ghostElement, 25, 25);
                        // Clean up the ghost element after drag starts
                        setTimeout(function() {
                            document.body.removeChild(ghostElement);
                        }, 0);
                        // Store element data
                        e.dataTransfer.setData('elementName', element.name);
                    };
                    var handleDragEnd = function(e) {
                        // Calculate if the drag ended in the workspace area
                        var workspaceElement = document.querySelector('[data-workspace="true"]');
                        if (workspaceElement) {
                            var rect = workspaceElement.getBoundingClientRect();
                            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                                // Add element to workspace at the drop position
                                var relativeX = e.clientX - rect.left;
                                var relativeY = e.clientY - rect.top;
                                var id = Date.now();
                                setWorkspace(function(prev) {
                                    return _to_consumable_array(prev).concat([
                                        _object_spread_props(_object_spread({}, element), {
                                            id: id,
                                            position: {
                                                x: relativeX,
                                                y: relativeY
                                            },
                                            animationClass: 'newElementAnimation 0.6s forwards'
                                        })
                                    ]);
                                });
                                // Play placement sound using AudioManager
                                AudioManager.playSound('place');
                            }
                        }
                    };
                    return /*#__PURE__*/ _jsxDEV("div", {
                        draggable: "true",
                        onDragStart: handleDragStart,
                        onDragEnd: handleDragEnd,
                        style: {
                            cursor: 'grab',
                            position: 'relative',
                            transition: 'transform 0.1s ease'
                        },
                        onMouseDown: function(e) {
                            e.currentTarget.style.transform = 'scale(0.95)';
                        },
                        onMouseUp: function(e) {
                            e.currentTarget.style.transform = 'scale(1)';
                        },
                        onMouseLeave: function(e) {
                            e.currentTarget.style.transform = 'scale(1)';
                        },
                        onDoubleClick: function() {
                            // Calculate center position of workspace
                            var workspaceElement = document.querySelector('[data-workspace="true"]');
                            if (workspaceElement) {
                                var rect = workspaceElement.getBoundingClientRect();
                                var centerX = rect.width / 2;
                                var centerY = rect.height / 2;
                                // Add element at center of workspace with larger random offset
                                var randomOffsetX = (Math.random() - 0.5) * 300;
                                var randomOffsetY = (Math.random() - 0.5) * 400;
                                var id = Date.now();
                                setWorkspace(function(prev) {
                                    return _to_consumable_array(prev).concat([
                                        _object_spread_props(_object_spread({}, element), {
                                            id: id,
                                            position: {
                                                x: centerX + randomOffsetX,
                                                y: centerY + randomOffsetY
                                            },
                                            animationClass: 'newElementAnimation 0.6s forwards'
                                        })
                                    ]);
                                });
                                // Play placement sound using AudioManager
                                AudioManager.playSound('place');
                            }
                        },
                        children: /*#__PURE__*/ _jsxDEV(Element, {
                            element: element
                        }, void 0, false, {
                            fileName: "ElementLibrary.jsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, _this)
                    }, element.name, false, {
                        fileName: "ElementLibrary.jsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "ElementLibrary.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "ElementLibrary.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, _this);
};
export default ElementLibrary;
