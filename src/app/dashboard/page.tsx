'use client';

import { useState } from 'react';
import { Navbar } from '@/components/custom/navbar';
import { Sidebar } from '@/components/custom/sidebar';
import { DashboardStats } from '@/components/custom/dashboard-stats';
import { UsageHistoryComponent } from '@/components/custom/usage-history';
import { INITIAL_CREDITS } from '@/lib/constants';
import type { UsageHistory } from '@/lib/types';

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data - será substituído por estado real
  const [credits] = useState({
    total: INITIAL_CREDITS,
    used: 45,
    remaining: 155,
  });

  const [usage] = useState({
    chats: 12,
    images: 8,
    videos: 3,
  });

  const [history] = useState<UsageHistory[]>([
    {
      id: '1',
      type: 'chat',
      description: 'Conversa com GPT-4 sobre programação',
      creditsUsed: 5,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: '2',
      type: 'image',
      description: 'Geração de imagem: paisagem futurista',
      creditsUsed: 10,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: '3',
      type: 'video',
      description: 'Vídeo estilo cinematográfico criado',
      creditsUsed: 20,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-pink-950/20">
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        credits={credits.remaining}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="pt-20 md:pl-64 min-h-screen">
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Bem-vindo ao Mind AI
                </h2>
                <p className="text-gray-400">
                  Seu assistente de IA completo para criar, conversar e inovar
                </p>
              </div>

              <DashboardStats credits={credits} usage={usage} />
              <UsageHistoryComponent history={history} />
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">💬</div>
                <h3 className="text-2xl font-bold text-purple-300">Chat IA</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">🖼️</div>
                <h3 className="text-2xl font-bold text-pink-300">Gerador de Imagens</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎬</div>
                <h3 className="text-2xl font-bold text-purple-300">Criador de Vídeos</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'voice' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎙️</div>
                <h3 className="text-2xl font-bold text-blue-300">Roteiros e Voz IA</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'editor' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">✍️</div>
                <h3 className="text-2xl font-bold text-green-300">Editor de Conteúdo</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'monetization' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">💰</div>
                <h3 className="text-2xl font-bold text-yellow-300">Monetização</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚙️</div>
                <h3 className="text-2xl font-bold text-gray-300">Configurações</h3>
                <p className="text-gray-400">Em desenvolvimento</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
