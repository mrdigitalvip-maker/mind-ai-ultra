'use client';

import { X, LayoutDashboard, MessageSquare, Image, Video, Mic, Edit, DollarSign, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, gradient: 'from-purple-500 to-pink-500' },
  { id: 'chat', label: 'Chat IA', icon: MessageSquare, gradient: 'from-blue-500 to-purple-500' },
  { id: 'images', label: 'Imagens', icon: Image, gradient: 'from-pink-500 to-purple-500' },
  { id: 'videos', label: 'Vídeos', icon: Video, gradient: 'from-purple-500 to-pink-500' },
  { id: 'voice', label: 'Voz IA', icon: Mic, gradient: 'from-purple-500 to-blue-500' },
  { id: 'editor', label: 'Editor', icon: Edit, gradient: 'from-pink-500 to-red-500' },
  { id: 'monetization', label: 'Monetização', icon: DollarSign, gradient: 'from-green-500 to-emerald-500' },
  { id: 'settings', label: 'Configurações', icon: Settings, gradient: 'from-gray-500 to-gray-600' },
];

export function Sidebar({ isOpen, onClose, activeTab, onTabChange }: SidebarProps) {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 backdrop-blur-xl border-r border-purple-500/20 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={onClose}
              className="md:hidden p-2 rounded-xl hover:bg-purple-500/10 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5 text-purple-300" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                      : 'hover:bg-purple-500/10 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ${
                      isActive ? 'scale-110' : ''
                    } transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`font-medium ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-purple-500/20">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <p className="text-sm text-gray-400 mb-2">Plano Gratuito</p>
              <p className="text-xs text-gray-500">
                Upgrade para Pro e tenha acesso ilimitado
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
