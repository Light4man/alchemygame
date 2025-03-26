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
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { initialElements, recipes } from './gameData.js';
export var GameContext = /*#__PURE__*/ createContext();
export var GameProvider = function(param) {
    var children = param.children;
    var _useState = _sliced_to_array(useState(function() {
        var savedTheme = localStorage.getItem('alchemyTheme');
        return savedTheme || 'dark';
    }), 2), theme = _useState[0], setTheme = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        var saved = localStorage.getItem('alchemyElements');
        return saved ? JSON.parse(saved) : initialElements;
    }), 2), elements = _useState1[0], setElements = _useState1[1];
    var _useState2 = _sliced_to_array(useState([]), 2), workspace = _useState2[0], setWorkspace = _useState2[1];
    useEffect(function() {
        localStorage.setItem('alchemyElements', JSON.stringify(elements));
    }, [
        elements
    ]);
    useEffect(function() {
        localStorage.setItem('alchemyTheme', theme);
        document.body.setAttribute('data-theme', theme);
    }, [
        theme
    ]);
    var addElementToWorkspace = useCallback(function(element) {
        var id = Date.now();
        setWorkspace(function(prev) {
            return _to_consumable_array(prev).concat([
                _object_spread_props(_object_spread({}, element), {
                    id: id,
                    x: 0,
                    y: 0
                })
            ]);
        });
    }, []);
    var removeElementFromWorkspace = useCallback(function(id) {
        setWorkspace(function(prev) {
            return prev.filter(function(elem) {
                return elem.id !== id;
            });
        });
    }, []);
    var checkCollision = useCallback(function(elem1, elem2) {
        // Updated collision detection for larger elements
        // Increased threshold to match the larger 70px element size
        var collisionThreshold = 70;
        return Math.abs(elem1.x - elem2.x) < collisionThreshold && Math.abs(elem1.y - elem2.y) < collisionThreshold;
    }, []);
    var updateElementPosition = useCallback(function(id, x, y) {
        setWorkspace(function(prev) {
            return prev.map(function(elem) {
                return elem.id === id ? _object_spread_props(_object_spread({}, elem), {
                    x: x,
                    y: y
                }) : elem;
            });
        });
    }, []);
    var combineElements = useCallback(function(elem1, elem2) {
        // Check if there's a recipe for these elements
        var recipe = recipes.find(function(r) {
            return r.ingredients[0] === elem1.name && r.ingredients[1] === elem2.name || r.ingredients[0] === elem2.name && r.ingredients[1] === elem1.name;
        });
        if (recipe) {
            // Check if element already discovered
            if (!elements[recipe.result]) {
                setElements(function(prev) {
                    return _object_spread_props(_object_spread({}, prev), _define_property({}, recipe.result, {
                        name: recipe.result,
                        discovered: true
                    }));
                });
                return {
                    success: true,
                    element: recipe.result,
                    isNew: true
                };
            }
            return {
                success: true,
                element: recipe.result,
                isNew: false
            };
        }
        return {
            success: false
        };
    }, [
        elements
    ]);
    var checkAndCombineOnCollision = useCallback(function() {
        for(var i = 0; i < workspace.length; i++){
            for(var j = i + 1; j < workspace.length; j++){
                if (checkCollision(workspace[i], workspace[j])) {
                    var combinationResult = combineElements(workspace[i], workspace[j]);
                    if (combinationResult.success) {
                        // Remove original elements and add new one
                        removeElementFromWorkspace(workspace[i].id);
                        removeElementFromWorkspace(workspace[j].id);
                        // Optionally add the new element at the collision point
                        addElementToWorkspace({
                            name: combinationResult.element,
                            x: (workspace[i].x + workspace[j].x) / 2,
                            y: (workspace[i].y + workspace[j].y) / 2
                        });
                        break;
                    }
                }
            }
        }
    }, [
        workspace,
        checkCollision,
        combineElements,
        addElementToWorkspace,
        removeElementFromWorkspace
    ]);
    // Theme colors (unchanged from previous version)
    var themeColors = {
        dark: {
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            text: '#fff',
            elementBg: 'rgba(255, 255, 255, 0.1)',
            workspaceBg: 'rgba(255, 255, 255, 0.03)',
            panelBg: 'rgba(0, 0, 0, 0.1)',
            buttonBg: '#3a506b',
            buttonBorder: '#3a506b',
            highlightColor: '#4CAF50'
        },
        light: {
            background: 'linear-gradient(135deg, #e6f2ff 0%, #f5f7fa 100%)',
            text: '#333',
            elementBg: 'rgba(0, 0, 0, 0.05)',
            workspaceBg: 'rgba(0, 0, 0, 0.1)',
            panelBg: 'rgba(255, 255, 255, 0.8)',
            buttonBg: '#6c9bcf',
            buttonBorder: '#6c9bcf',
            highlightColor: '#4CAF50'
        }
    };
    return /*#__PURE__*/ _jsxDEV(GameContext.Provider, {
        value: {
            elements: elements,
            workspace: workspace,
            setWorkspace: setWorkspace,
            discoveredElements: Object.values(elements).filter(function(e) {
                return e.discovered;
            }),
            addElementToWorkspace: addElementToWorkspace,
            removeElementFromWorkspace: removeElementFromWorkspace,
            combineElements: combineElements,
            updateElementPosition: updateElementPosition,
            checkAndCombineOnCollision: checkAndCombineOnCollision,
            theme: theme,
            setTheme: setTheme,
            colors: themeColors[theme]
        },
        children: children
    }, void 0, false, {
        fileName: "GameContext.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, _this);
};
