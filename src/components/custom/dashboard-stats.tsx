'use client';

import { MessageSquare, Image, Video, TrendingUp } from 'lucide-react';
import type { UserCredits } from '@/lib/types';

interface DashboardStatsProps {
  credits: UserCredits;
  usage: {
    chats: number;
    images: number;
    videos: number;
  };
}

export function DashboardStats({ credits, usage }: DashboardStatsProps) {
  const creditPercentage = (credits.remaining / credits.total) * 100;

  return (
    <div className="space-y-6">
      {/* Card de Créditos */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 to-pink-950/50 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-gray-400 mb-1">Créditos Restantes</h3>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {credits.remaining}
            </p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Barra de Progresso Animada */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Usado: {credits.used}</span>
            <span>Total: {credits.total}</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${creditPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Conversas */}
        <div className="group p-6 rounded-3xl bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">{usage.chats}</span>
          </div>
          <p className="text-gray-400 font-medium">Conversas Feitas</p>
        </div>

        {/* Imagens */}
        <div className="group p-6 rounded-3xl bg-gradient-to-br from-pink-950/30 to-purple-950/30 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">{usage.images}</span>
          </div>
          <p className="text-gray-400 font-medium">Imagens Geradas</p>
        </div>

        {/* Vídeos */}
        <div className="group p-6 rounded-3xl bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-white">{usage.videos}</span>
          </div>
          <p className="text-gray-400 font-medium">Vídeos Criados</p>
        </div>
      </div>
    </div>
  );
}
