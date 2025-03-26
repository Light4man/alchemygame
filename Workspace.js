function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import React, { useContext, useRef, useState } from 'react';
import { GameContext } from './GameContext.js';
import Element from './Element.js';
import { AudioManager } from './AudioManager.js';
var Workspace = function(param) {
    var showNotification = param.showNotification;
    var _useContext = useContext(GameContext), workspace = _useContext.workspace, removeElementFromWorkspace = _useContext.removeElementFromWorkspace, combineElements = _useContext.combineElements, colors = _useContext.colors, setWorkspace = _useContext.setWorkspace;
    var _useState = _sliced_to_array(useState(null), 2), draggingElement = _useState[0], setDraggingElement = _useState[1];
    var _useState1 = _sliced_to_array(useState(null), 2), combinationEffect = _useState1[0], setCombinationEffect = _useState1[1];
    var workspaceRef = useRef(null);
    var handleDragStart = function(element, e) {
        setDraggingElement(element);
    };
    var handleDragEnd = function(e) {
        if (!draggingElement) return;
        // Clear combining flags when drag ends
        workspace.forEach(function(elem) {
            elem.isCombining = false;
        });
        // Check if this element was dropped on another element
        var elemBelow = workspace.find(function(elem) {
            return elem.id !== draggingElement.id && isColliding(e, elem.position);
        });
        if (elemBelow) {
            // Try to combine the elements
            var result = combineElements(draggingElement, elemBelow);
            if (result.success) {
                // Remove the combined elements
                removeElementFromWorkspace(draggingElement.id);
                removeElementFromWorkspace(elemBelow.id);
                // Show combination effect
                var midX = (draggingElement.position.x + elemBelow.position.x) / 2;
                var midY = (draggingElement.position.y + elemBelow.position.y) / 2;
                setCombinationEffect({
                    x: midX,
                    y: midY,
                    element: result.element
                });
                setTimeout(function() {
                    setCombinationEffect(null);
                }, 1000);
                // Add the new element to workspace
                showNotification(result.isNew ? "Discovered: ".concat(result.element, "!") : "Created: ".concat(result.element), 'success');
                // Play the appropriate sound effect
                if (result.isNew) {
                    // Force sound to play directly instead of using AudioManager
                    var discoverySound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-tune-2008.mp3');
                    discoverySound.volume = 0.5;
                    discoverySound.play().catch(function(e) {
                        return console.error("Sound play error:", e);
                    });
                } else {
                    // Force sound to play directly instead of using AudioManager
                    var combineSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3');
                    combineSound.volume = 0.5;
                    combineSound.play().catch(function(e) {
                        return console.error("Sound play error:", e);
                    });
                }
            } else {
                showNotification("These elements don't combine", 'error');
                // Play fail sound directly
                var failSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-clicking-bad-2-1113.mp3');
                failSound.volume = 0.5;
                failSound.play().catch(function(e) {
                    return console.error("Sound play error:", e);
                });
            }
        }
        setDraggingElement(null);
    };
    var isColliding = function(event, elemPos) {
        if (!elemPos) return false;
        // Calculate the center of the dragged element
        var dragEndPosX = event.clientX - workspaceRef.current.getBoundingClientRect().left;
        var dragEndPosY = event.clientY - workspaceRef.current.getBoundingClientRect().top;
        // Calculate distance between centers
        var distance = Math.sqrt(Math.pow(dragEndPosX - elemPos.x, 2) + Math.pow(dragEndPosY - elemPos.y, 2));
        // Elements collide if their centers are within 35px (since we're using larger elements now)
        return distance < 35;
    };
    var handleDrag = function(element, newPosition) {
        element.position = newPosition;
        // Check for potential combinations while dragging
        // Use a smaller 20px radius (10px per element) for potential combinations
        // Ignore combining if element is already being combined
        if (element.isCombining) return;
        var otherElement = workspace.find(function(elem) {
            return elem.id !== element.id && !elem.isCombining && calculateDistance(newPosition, elem.position) < 80;
        });
        if (otherElement) {
            // If elements are close enough, try to combine them
            // Use 20px total distance (10px radius for each element) for actual combination
            if (calculateDistance(newPosition, otherElement.position) < 80) {
                // Try to combine the elements
                var result = combineElements(element, otherElement);
                if (result.success) {
                    // Set flag to prevent multiple combinations
                    element.isCombining = true;
                    otherElement.isCombining = true;
                    // Remove the combined elements
                    removeElementFromWorkspace(element.id);
                    removeElementFromWorkspace(otherElement.id);
                    // Calculate midpoint for new element position
                    var midX = (newPosition.x + otherElement.position.x) / 2;
                    var midY = (newPosition.y + otherElement.position.y) / 2;
                    // Set animation classes on elements being combined
                    element.animationClass = 'combineAnimation 0.5s forwards';
                    otherElement.animationClass = 'combineAnimation 0.5s forwards';
                    // Add the new element to workspace at the midpoint with animation
                    var newElem = {
                        name: result.element,
                        id: Date.now(),
                        position: {
                            x: midX,
                            y: midY
                        },
                        animationClass: 'newElementAnimation 0.6s forwards'
                    };
                    setWorkspace(function(prev) {
                        return _to_consumable_array(prev.filter(function(e) {
                            return e.id !== element.id && e.id !== otherElement.id;
                        })).concat([
                            newElem
                        ]);
                    });
                    showNotification(result.isNew ? "Discovered: ".concat(result.element, "!") : "Created: ".concat(result.element), 'success');
                    // Play the appropriate sound effect
                    if (result.isNew) {
                        // Force sound to play directly instead of using AudioManager
                        var discoverySound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-tune-2008.mp3');
                        discoverySound.volume = 0.5;
                        discoverySound.play().catch(function(e) {
                            return console.error("Sound play error:", e);
                        });
                    } else {
                        // Force sound to play directly instead of using AudioManager
                        var combineSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3');
                        combineSound.volume = 0.5;
                        combineSound.play().catch(function(e) {
                            return console.error("Sound play error:", e);
                        });
                    }
                    return;
                }
            }
        } else {
        // No nearby elements, continue with normal dragging
        }
    };
    var calculateDistance = function(pos1, pos2) {
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    };
    // Handle dropping elements from the library
    var handleDragOver = function(e) {
        e.preventDefault(); // Allow drop
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        ref: workspaceRef,
        "data-workspace": "true",
        onDragOver: handleDragOver,
        style: {
            height: '100%',
            position: 'relative',
            background: colors.workspaceBg,
            borderRadius: '8px',
            padding: '10px',
            overflow: 'hidden'
        },
        children: [
            workspace.map(function(element) {
                return /*#__PURE__*/ _jsxDEV(Element, {
                    element: element,
                    onDragStart: handleDragStart,
                    onDrag: handleDrag,
                    onDragEnd: handleDragEnd,
                    draggable: true,
                    animationClass: element.animationClass
                }, element.id, false, {
                    fileName: "Workspace.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, _this);
            }),
            /*#__PURE__*/ _jsxDEV("style", {
                children: "\n          @keyframes pulse {\n            0% { transform: scale(0.8); opacity: 0.5; }\n            50% { transform: scale(1.1); opacity: 0.8; }\n            100% { transform: scale(0.8); opacity: 0.5; }\n          }\n          \n          @keyframes combineAnimation {\n            0% { transform: scale(1); opacity: 1; }\n            50% { transform: scale(0.5); opacity: 0.7; }\n            100% { transform: scale(0); opacity: 0; }\n          }\n          \n          @keyframes newElementAnimation {\n            0% { transform: scale(0); opacity: 0; }\n            60% { transform: scale(1.2); opacity: 0.8; }\n            100% { transform: scale(1); opacity: 1; }\n          }\n        "
            }, void 0, false, {
                fileName: "Workspace.jsx",
                lineNumber: 209,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Workspace.jsx",
        lineNumber: 182,
        columnNumber: 5
    }, _this);
};
export default Workspace;
