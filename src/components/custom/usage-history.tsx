'use client';

import { MessageSquare, Image, Video, Clock } from 'lucide-react';
import type { UsageHistory } from '@/lib/types';

interface UsageHistoryProps {
  history: UsageHistory[];
}

export function UsageHistoryComponent({ history }: UsageHistoryProps) {
  const getIcon = (type: UsageHistory['type']) => {
    switch (type) {
      case 'chat':
        return MessageSquare;
      case 'image':
        return Image;
      case 'video':
        return Video;
    }
  };

  const getGradient = (type: UsageHistory['type']) => {
    switch (type) {
      case 'chat':
        return 'from-blue-500 to-purple-500';
      case 'image':
        return 'from-pink-500 to-purple-500';
      case 'video':
        return 'from-purple-500 to-pink-500';
    }
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d atrás`;
    if (hours > 0) return `${hours}h atrás`;
    if (minutes > 0) return `${minutes}min atrás`;
    return 'Agora';
  };

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-gray-950/50 to-purple-950/20 border border-purple-500/20">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Clock className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Histórico de Uso</h3>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {history.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum histórico ainda</p>
          </div>
        ) : (
          history.map((item) => {
            const Icon = getIcon(item.type);
            const gradient = getGradient(item.type);

            return (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-950/20 to-pink-950/20 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">
                    {item.description}
                  </p>
                  <p className="text-sm text-gray-400">
                    {formatTime(item.timestamp)}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-bold text-purple-400">
                    -{item.creditsUsed}
                  </p>
                  <p className="text-xs text-gray-500">créditos</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(139, 92, 246, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #a855f7, #ec4899);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #9333ea, #db2777);
        }
      `}</style>
    </div>
  );
}
