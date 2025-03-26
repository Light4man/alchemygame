// AudioManager singleton for handling application sound
export var AudioManager = {
    backgroundMusic: null,
    isPlaying: true,
    soundsEnabled: true,
    volume: 0.5,
    isLoading: false,
    loadError: false,
    soundEffects: {
        combine: null,
        discovery: null,
        fail: null,
        place: null
    },
    initialize: function initialize() {
        // Create audio element for background music
        this.backgroundMusic = new Audio('https://play.rosebud.ai/assets/perfect.mp3?WnaV');
        this.backgroundMusic.loop = true;
        this.backgroundMusic.volume = this.volume;
        this.backgroundMusic.preload = 'auto';
        // Initialize sound effects
        this.soundEffects.combine = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3');
        this.soundEffects.discovery = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magical-tune-2008.mp3');
        this.soundEffects.fail = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-clicking-bad-2-1113.mp3');
        this.soundEffects.place = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-car-key-lock-1667.mp3');
        // Set volume for all sound effects
        for(var effect in this.soundEffects){
            if (this.soundEffects[effect]) {
                this.soundEffects[effect].volume = this.volume;
                this.soundEffects[effect].preload = 'auto';
            }
        }
        // Load volume from localStorage if available
        var savedVolume = localStorage.getItem('alchemyMusicVolume');
        if (savedVolume !== null) {
            this.volume = parseFloat(savedVolume);
            this.backgroundMusic.volume = this.volume;
            this.updateAllVolumes();
        }
        // Always default to true, but still check localStorage for user preference
        var savedIsPlaying = localStorage.getItem('alchemyMusicPlaying');
        this.isPlaying = savedIsPlaying === null ? true : savedIsPlaying === 'true';
        // Load sound effects state from localStorage
        var savedSoundsEnabled = localStorage.getItem('alchemySoundsEnabled');
        this.soundsEnabled = savedSoundsEnabled === null ? true : savedSoundsEnabled === 'true';
        // Always set up the event listener for first interaction, regardless of isPlaying state
        // This ensures we can enable audio after user interaction
        document.addEventListener('click', this.handleFirstInteraction.bind(this), {
            once: true
        });
    },
    handleFirstInteraction: function handleFirstInteraction() {
        var _this = this;
        // Remove the conditional - we want to initialize audio regardless
        // This ensures we can play later when the user clicks the music button
        var playPromise = this.backgroundMusic.play();
        // Handle the promise to prevent uncaught promise rejection
        if (playPromise !== undefined) {
            playPromise.then(function() {
                _this.isPlaying = true;
                localStorage.setItem('alchemyMusicPlaying', 'true');
            }).catch(function(error) {
                console.log('Audio playback failed on first interaction:', error);
            // Even if play fails, we've now unlocked audio for future interactions
            });
        }
    },
    play: function play() {
        var _this = this;
        if (this.backgroundMusic) {
            this.isLoading = true;
            this.loadError = false;
            // Reset to start of track before playing
            this.backgroundMusic.currentTime = 0;
            var playPromise = this.backgroundMusic.play();
            // Properly handle the play promise
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    _this.isPlaying = true;
                    _this.isLoading = false;
                    localStorage.setItem('alchemyMusicPlaying', 'true');
                }).catch(function(error) {
                    console.log('Audio playback failed:', error);
                    // If play fails, we might be in a browser that requires user interaction
                    // Store that we want to play so we can try again on the next interaction
                    _this.isPlaying = false;
                    _this.isLoading = false;
                    _this.loadError = true;
                    localStorage.setItem('alchemyMusicPlaying', 'false');
                });
            }
        }
    },
    pause: function pause() {
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
            this.isPlaying = false;
            this.isLoading = false;
            this.loadError = false;
            localStorage.setItem('alchemyMusicPlaying', 'false');
        }
    },
    toggle: function toggle() {
        if (this.isPlaying) {
            this.pause();
            return false;
        } else {
            this.play();
            return true;
        }
    },
    toggleSounds: function toggleSounds() {
        this.soundsEnabled = !this.soundsEnabled;
        localStorage.setItem('alchemySoundsEnabled', this.soundsEnabled.toString());
        return this.soundsEnabled;
    },
    setVolume: function setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = this.volume;
        }
        this.updateAllVolumes();
        localStorage.setItem('alchemyMusicVolume', this.volume.toString());
    },
    updateAllVolumes: function updateAllVolumes() {
        // Update volume for all sound effects
        for(var effect in this.soundEffects){
            if (this.soundEffects[effect]) {
                this.soundEffects[effect].volume = this.volume;
            }
        }
    },
    playSound: function playSound(type) {
        if (!this.soundsEnabled) return; // Don't play sounds if sound effects are disabled
        if (this.soundEffects[type]) {
            // Stop and reset the sound before playing
            this.soundEffects[type].pause();
            this.soundEffects[type].currentTime = 0;
            // Play the requested sound effect
            this.soundEffects[type].play().catch(function(error) {
                return console.log("Sound effect (".concat(type, ") playback failed:"), error);
            });
        }
    }
};
