import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AlchemyGame from './AlchemyGame.js';
import { GameProvider } from './GameContext.js';
import { AudioManager } from './AudioManager.js';

function App() {
    useEffect(() => {
        AudioManager.initialize();
        // Set music state in AlchemyGame to match AudioManager
        const setMusicStateEvent = new CustomEvent('setMusicState', {
            detail: {
                isPlaying: AudioManager.isPlaying
            }
        });
        window.dispatchEvent(setMusicStateEvent);
        // Try to play music automatically (may be blocked by browser)
        const playPromise = AudioManager.backgroundMusic?.play();
        if (playPromise) {
            playPromise.catch(err => {
                console.log('Auto-play prevented by browser:', err);
                // We'll handle this in the first interaction
            });
        }
    }, []);

    return (
        <GameProvider>
            <div style={{
                height: '100%',
                fontFamily: '"Quicksand", sans-serif',
                overflow: 'hidden',
                padding: '16px',
                boxSizing: 'border-box'
            }}>
                <AlchemyGame />
            </div>
        </GameProvider>
    );
}

const container = document.getElementById('renderDiv');
const root = ReactDOM.createRoot(container);
root.render(<App />);
