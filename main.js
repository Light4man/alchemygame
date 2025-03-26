var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AlchemyGame from './AlchemyGame.js';
import { GameProvider } from './GameContext.js';
import { AudioManager } from './AudioManager.js';
var App = function() {
    // Initialize AudioManager when the app loads and try to play immediately
    useEffect(function() {
        var _AudioManager_backgroundMusic;
        AudioManager.initialize();
        // Set music state in AlchemyGame to match AudioManager
        var setMusicStateEvent = new CustomEvent('setMusicState', {
            detail: {
                isPlaying: AudioManager.isPlaying
            }
        });
        window.dispatchEvent(setMusicStateEvent);
        // Try to play music automatically (may be blocked by browser)
        var playPromise = (_AudioManager_backgroundMusic = AudioManager.backgroundMusic) === null || _AudioManager_backgroundMusic === void 0 ? void 0 : _AudioManager_backgroundMusic.play();
        if (playPromise) {
            playPromise.catch(function(err) {
                console.log('Auto-play prevented by browser:', err);
            // We'll handle this in the first interaction
            });
        }
    }, []);
    return /*#__PURE__*/ _jsxDEV(GameProvider, {
        children: /*#__PURE__*/ _jsxDEV("div", {
            style: {
                height: '100%',
                fontFamily: '"Quicksand", sans-serif',
                overflow: 'hidden',
                padding: '16px',
                boxSizing: 'border-box'
            },
            children: /*#__PURE__*/ _jsxDEV(AlchemyGame, {}, void 0, false, {
                fileName: "main.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "main.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "main.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, _this);
};
var container = document.getElementById('renderDiv');
var root = ReactDOM.createRoot(container);
root.render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "main.jsx",
    lineNumber: 45,
    columnNumber: 13
}, this));
