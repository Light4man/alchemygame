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
import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from './GameContext.js';
import Workspace from './Workspace.js';
import ElementLibrary from './ElementLibrary.js';
import DiscoveryPanel from './DiscoveryPanel.js';
import { elementIcons } from './gameData.js';
import { AudioManager } from './AudioManager.js';
var AlchemyGame = function() {
    var _useContext = useContext(GameContext), discoveredElements = _useContext.discoveredElements, workspace = _useContext.workspace, setWorkspace = _useContext.setWorkspace, theme = _useContext.theme, setTheme = _useContext.setTheme, colors = _useContext.colors;
    var _useState = _sliced_to_array(useState(null), 2), notification = _useState[0], setNotification = _useState[1];
    var _useState1 = _sliced_to_array(useState('workspace'), 2), activeTab = _useState1[0], setActiveTab = _useState1[1];
    var _useState2 = _sliced_to_array(useState('bottom'), 2), layoutMode = _useState2[0], setLayoutMode = _useState2[1]; // 'bottom' or 'right'
    var _useState3 = _sliced_to_array(useState(AudioManager.isPlaying), 2), musicEnabled = _useState3[0], setMusicEnabled = _useState3[1];
    // Handle music toggle
    var toggleMusic = function() {
        var isPlaying = AudioManager.toggle();
        setMusicEnabled(isPlaying);
    };
    // Listen for setMusicState events from main.jsx
    useEffect(function() {
        var handleSetMusicState = function(event) {
            setMusicEnabled(event.detail.isPlaying);
        };
        window.addEventListener('setMusicState', handleSetMusicState);
        return function() {
            window.removeEventListener('setMusicState', handleSetMusicState);
        };
    }, []);
    var showNotification = function(message, type) {
        setNotification({
            message: message,
            type: type
        });
        setTimeout(function() {
            return setNotification(null);
        }, 2000);
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: colors.background,
            color: colors.text,
            transition: 'background 0.3s, color 0.3s'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("header", {
                style: {
                    textAlign: 'center',
                    marginBottom: '10px',
                    padding: '10px',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                },
                children: /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            children: [
                                /*#__PURE__*/ _jsxDEV("h1", {
                                    style: {
                                        margin: 0,
                                        fontSize: '1.8rem'
                                    },
                                    children: "Alchemy"
                                }, void 0, false, {
                                    fileName: "AlchemyGame.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, _this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        fontSize: '0.9rem',
                                        opacity: 0.7
                                    },
                                    children: [
                                        "Discovered: ",
                                        discoveredElements.length,
                                        " / ",
                                        Object.keys(elementIcons).length
                                    ]
                                }, void 0, true, {
                                    fileName: "AlchemyGame.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "AlchemyGame.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            onClick: toggleMusic,
                            style: {
                                background: 'transparent',
                                border: "1px solid ".concat(colors.buttonBorder),
                                color: colors.text,
                                padding: '8px 15px',
                                borderRadius: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    style: {
                                        fontSize: '1rem'
                                    },
                                    children: musicEnabled ? '🎵' : '🔇'
                                }, void 0, false, {
                                    fileName: "AlchemyGame.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, _this),
                                "Music"
                            ]
                        }, void 0, true, {
                            fileName: "AlchemyGame.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "AlchemyGame.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "AlchemyGame.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '10px',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return setActiveTab('workspace');
                                },
                                style: {
                                    background: activeTab === 'workspace' ? colors.buttonBg : 'transparent',
                                    border: "1px solid ".concat(colors.buttonBorder),
                                    color: colors.text,
                                    padding: '8px 15px',
                                    borderRadius: '20px',
                                    cursor: 'pointer'
                                },
                                children: "Workspace"
                            }, void 0, false, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return setActiveTab('discoveries');
                                },
                                style: {
                                    background: activeTab === 'discoveries' ? colors.buttonBg : 'transparent',
                                    border: "1px solid ".concat(colors.buttonBorder),
                                    color: colors.text,
                                    padding: '8px 15px',
                                    borderRadius: '20px',
                                    cursor: 'pointer'
                                },
                                children: "Discoveries"
                            }, void 0, false, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "AlchemyGame.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return setLayoutMode(layoutMode === 'bottom' ? 'right' : 'bottom');
                                },
                                style: {
                                    background: 'transparent',
                                    border: "1px solid ".concat(colors.buttonBorder),
                                    color: colors.text,
                                    padding: '6px 10px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontSize: '0.85rem'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        style: {
                                            fontSize: '1rem'
                                        },
                                        children: layoutMode === 'bottom' ? '⇄' : '⇵'
                                    }, void 0, false, {
                                        fileName: "AlchemyGame.jsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, _this),
                                    layoutMode === 'bottom' ? 'Side View' : 'Bottom View'
                                ]
                            }, void 0, true, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return setTheme('light');
                                },
                                style: {
                                    background: theme === 'light' ? colors.buttonBg : 'transparent',
                                    border: "1px solid ".concat(colors.buttonBorder),
                                    color: theme === 'dark' ? '#fff' : '#333',
                                    padding: '6px 10px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '0.85rem',
                                    opacity: theme === 'light' ? 1 : 0.7
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        style: {
                                            marginRight: '5px'
                                        },
                                        children: "☀️"
                                    }, void 0, false, {
                                        fileName: "AlchemyGame.jsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, _this),
                                    "Light"
                                ]
                            }, void 0, true, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return setTheme('dark');
                                },
                                style: {
                                    background: theme === 'dark' ? colors.buttonBg : 'transparent',
                                    border: "1px solid ".concat(colors.buttonBorder),
                                    color: theme === 'dark' ? '#fff' : '#333',
                                    padding: '6px 10px',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '0.85rem',
                                    opacity: theme === 'dark' ? 1 : 0.7
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        style: {
                                            marginRight: '5px'
                                        },
                                        children: "\uD83C\uDF19"
                                    }, void 0, false, {
                                        fileName: "AlchemyGame.jsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, _this),
                                    "Dark"
                                ]
                            }, void 0, true, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "AlchemyGame.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "AlchemyGame.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    flex: 1,
                    overflow: 'hidden'
                },
                children: activeTab === 'workspace' ? /*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        display: 'flex',
                        flexDirection: layoutMode === 'bottom' ? 'column' : 'row',
                        height: '100%',
                        gap: '15px'
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            },
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        marginBottom: '10px'
                                    },
                                    children: /*#__PURE__*/ _jsxDEV("button", {
                                        onClick: function() {
                                            return setWorkspace([]);
                                        },
                                        style: {
                                            background: '#e74c3c',
                                            border: 'none',
                                            color: '#fff',
                                            padding: '5px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '1rem'
                                                },
                                                children: "\uD83E\uDDF9"
                                            }, void 0, false, {
                                                fileName: "AlchemyGame.jsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, _this),
                                            " Clear Workspace"
                                        ]
                                    }, void 0, true, {
                                        fileName: "AlchemyGame.jsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, _this)
                                }, void 0, false, {
                                    fileName: "AlchemyGame.jsx",
                                    lineNumber: 197,
                                    columnNumber: 15
                                }, _this),
                                /*#__PURE__*/ _jsxDEV(Workspace, {
                                    showNotification: showNotification
                                }, void 0, false, {
                                    fileName: "AlchemyGame.jsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, _this)
                            ]
                        }, void 0, true, {
                            fileName: "AlchemyGame.jsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, _this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            style: {
                                width: layoutMode === 'right' ? '280px' : 'auto',
                                height: layoutMode === 'bottom' ? 'auto' : '100%',
                                minHeight: layoutMode === 'bottom' ? '220px' : 'auto',
                                overflow: 'auto'
                            },
                            children: /*#__PURE__*/ _jsxDEV(ElementLibrary, {}, void 0, false, {
                                fileName: "AlchemyGame.jsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, _this)
                        }, void 0, false, {
                            fileName: "AlchemyGame.jsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, _this)
                    ]
                }, void 0, true, {
                    fileName: "AlchemyGame.jsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, _this) : activeTab === 'discoveries' ? /*#__PURE__*/ _jsxDEV(DiscoveryPanel, {}, void 0, false, {
                    fileName: "AlchemyGame.jsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, _this) : null
            }, void 0, false, {
                fileName: "AlchemyGame.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, _this),
            notification && /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    position: 'fixed',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    background: notification.type === 'success' ? '#4CAF50' : '#f44336',
                    color: 'white',
                    borderRadius: '4px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                    animation: 'fade-in 0.3s ease-out'
                },
                children: notification.message
            }, void 0, false, {
                fileName: "AlchemyGame.jsx",
                lineNumber: 234,
                columnNumber: 9
            }, _this)
        ]
    }, void 0, true, {
        fileName: "AlchemyGame.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, _this);
};
export default AlchemyGame;
