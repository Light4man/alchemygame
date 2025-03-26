var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useContext } from 'react';
import { GameContext } from './GameContext.js';
import Element from './Element.js';
var DiscoveryPanel = function() {
    var discoveredElements = useContext(GameContext).discoveredElements;
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
                children: "Your Discoveries"
            }, void 0, false, {
                fileName: "DiscoveryPanel.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                },
                children: discoveredElements.map(function(element) {
                    return /*#__PURE__*/ _jsxDEV(Element, {
                        element: element
                    }, element.name, false, {
                        fileName: "DiscoveryPanel.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "DiscoveryPanel.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "DiscoveryPanel.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, _this);
};
export default DiscoveryPanel;
