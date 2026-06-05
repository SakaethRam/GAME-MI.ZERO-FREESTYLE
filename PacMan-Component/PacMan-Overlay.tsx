{/* Mobile/Tablet Under Construction Overlay */}
      {deviceType !== 'desktop' && uiState !== 'cover' && (
        <div className="absolute inset-0 bg-black z-[90] flex flex-col items-center justify-center text-center p-8 pointer-events-auto min-h-[100dvh] font-sans">
          <div className="flex flex-col items-center justify-center space-y-12 max-w-lg w-full h-full">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-[10px] tracking-[0.4em] text-red-500/80 font-light uppercase">System Alert</span>
              <div className="w-12 h-[1px] bg-gray-800"></div>
            </div>
            
            <p className="text-gray-300 font-light tracking-[0.15em] text-sm uppercase leading-relaxed text-center px-4">
              The {deviceType === 'tablet' ? 'Tablet' : 'Mobile'} Experience is currently under construction.
              <br /><br />
              The world of chaos is preparing to arrive on {deviceType === 'tablet' ? 'tablet' : 'mobile'} soon.
            </p>
            
            <div className="flex items-center gap-6 mt-8">
              <span className="text-red-400 font-light tracking-[0.3em] text-xs uppercase animate-pulse">Stay tuned</span>
              
              {/* Pac-Man Animation */}
              <div className="flex items-center gap-1.5 text-red-400/80">
                <div className="w-4 h-4 relative">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 animate-pacman-top" fill="currentColor" style={{ transformOrigin: '50% 50%' }}>
                    <path d="M 100 50 A 50 50 0 0 0 0 50 Z" />
                  </svg>
                  <svg viewBox="0 0 100 100" className="absolute inset-0 animate-pacman-bottom" fill="currentColor" style={{ transformOrigin: '50% 50%' }}>
                    <path d="M 0 50 A 50 50 0 0 0 100 50 Z" />
                  </svg>
                </div>
                <div className="w-1 h-1 bg-red-400/50 rounded-full animate-pacman-dot" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-1 bg-red-400/50 rounded-full animate-pacman-dot" style={{ animationDelay: '400ms' }}></div>
                <div className="w-1 h-1 bg-red-400/50 rounded-full animate-pacman-dot" style={{ animationDelay: '800ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}