{/* Mobile Portrait Orientation Prompt */}
      <div className="hidden max-md:portrait:flex absolute inset-0 bg-black z-[100] flex-col items-center justify-center text-center p-8 pointer-events-auto min-h-screen">
        <svg className="w-16 h-16 text-white mb-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" transform="rotate(90 12 12)"></rect>
          <path d="M12 16v.01"></path>
        </svg>
        <h2 className="text-2xl font-light tracking-[0.2em] mb-4 text-white">ROTATE DEVICE</h2>
        <p className="text-gray-400 font-light tracking-widest text-sm uppercase mb-8">Please rotate your device to landscape mode for the optimal experience.</p>
        <button
          className="px-6 py-3 border border-white text-white tracking-widest uppercase text-xs hover:bg-white hover:text-black transition-colors"
          onClick={() => {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen().then(() => {
                if (window.screen.orientation && window.screen.orientation.lock) {
                  window.screen.orientation.lock('landscape').catch(() => {});
                }
              }).catch(() => {});
            }
          }}
        >
          FORCE LANDSCAPE
        </button>
      </div>