{tab === 'audio' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              
              {/* Custom Track Segment */}
              <div className="space-y-6">
                <h3 className="text-lg font-light tracking-wide text-gray-900">Custom BGM Track</h3>
                <p className="text-xs text-gray-500 font-light tracking-wide">Upload an MP3 track to play continuously throughout the game.</p>
                <div className="max-w-xl">
                  <button 
                    onClick={() => setIsBgmPanelOpen(true)}
                    className="relative w-full h-[140px] border border-dashed border-gray-300 bg-gray-50/50 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center p-6 cursor-pointer group"
                  >
                    <span className="text-xl font-light text-gray-400 group-hover:text-black transition-colors block mb-2">+</span>
                    <span className="text-xs font-light uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">Manage BGM Tracks</span>
                  </button>
                  
                  {customAudio && (
                    <div className="mt-4 relative w-full border border-gray-900 bg-white shadow-sm flex flex-col p-4">
                      <div className="flex justify-between items-center w-full mb-2">
                        <h4 className="text-sm font-light tracking-wide text-gray-900 truncate uppercase" title={customAudio.name}>{customAudio.name}</h4>
                        <span className={`text-[10px] tracking-[0.2em] uppercase ${isCustomAudioPlaying ? "text-green-600" : "text-amber-500"}`}>
                          {isCustomAudioPlaying ? "PLAYING" : "PAUSED"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center w-full mt-2">
                        <button
                          onClick={() => setIsCustomAudioPlaying(!isCustomAudioPlaying)}
                          className="px-3 py-1 border border-gray-200 text-gray-700 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-colors"
                        >
                          {isCustomAudioPlaying ? "PAUSE" : "PLAY"}
                        </button>
                        <input 
                          type="range" 
                          min="0" max="1" step="0.01" 
                          value={customAudioVolume}
                          onChange={(e) => setCustomAudioVolume(parseFloat(e.target.value))}
                          className="w-24 h-1 bg-gray-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full"
                        />
                        <button 
                          onClick={() => setCustomAudio(null)}
                          className="px-3 py-1 border border-red-200 text-red-500 text-[10px] uppercase tracking-widest hover:bg-red-50 hover:border-red-300 transition-colors flex items-center gap-1"
                        >
                          <Trash2 size={10} /> CLEAR
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 my-8"></div>

            </div>
          )}