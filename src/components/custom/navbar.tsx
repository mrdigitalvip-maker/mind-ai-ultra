'use client';

import { Menu, Sparkles, Coins } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
  credits: number;
}

export function Navbar({ onMenuClick, credits }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-xl hover:bg-purple-500/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-purple-300" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hidden sm:block">
              Mind AI
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <Coins className="w-5 h-5 text-yellow-400" />
          <span className="font-bold text-white">{credits}</span>
          <span className="text-sm text-gray-400 hidden sm:inline">créditos</span>
        </div>
      </div>
    </nav>
  );
}
