import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  Loader2, 
  HelpCircle, 
  BookOpen, 
  Flame,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface AiHistorianModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  initialContext?: string;
}

interface Message {
  role: 'assistant' | 'user';
  content: string;
  timestamp: string;
}

const SAMPLE_QUESTIONS = [
  "Compare Pelé, Diego Maradona, and Lionel Messi in World Cup finals.",
  "Explain the tactical evolution of Rinus Michels' Total Football at Ajax.",
  "Why is the 1954 Miracle of Bern considered a turning point in German history?",
  "How did Arrigo Sacchi's AC Milan revolutionize modern zonal pressing?",
  "Who was the greatest defender in football history: Beckenbauer or Maldini?"
];

export const AiHistorianModal: React.FC<AiHistorianModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
  initialContext
}) => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Greetings! I am your AI Football Historian. Ask me anything about World Cup chronicles, legendary tacticians, iconic rivalries, Ballon d'Or debates, or deep archival statistics from 1863 to the present.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleAsk(initialPrompt, initialContext);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAsk = async (promptText: string, contextText?: string) => {
    if (!promptText.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-historian', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          context: contextText || initialContext || ''
        })
      });

      const data = await response.json();
      const assistantReply = data.response || data.fallback || "An error occurred fetching historical insight.";

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Unable to reach the historical archive server at this time. Please check your network and try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAsk(inputPrompt);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="ai-historian-dialog"
        className="bg-stone-900 border border-amber-500/30 w-full max-w-3xl h-[88vh] max-h-[780px] rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-amber-500/20"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-stone-950 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-stone-950 font-bold shadow-md">
              <Sparkles className="w-5 h-5 fill-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-stone-100 font-serif">
                  Football History AI Assistant
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Gemini Flash 3.8
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Encyclopedic knowledge of tournaments, tactics, legends & milestones
              </p>
            </div>
          </div>
          <button
            id="close-ai-historian-button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggested Queries Pill Bar (if few messages) */}
        {messages.length <= 2 && (
          <div className="bg-stone-950/60 px-5 py-2.5 border-b border-stone-800/80 overflow-x-auto scrollbar-none flex items-center gap-2">
            <span className="text-[11px] font-semibold text-amber-400/90 whitespace-nowrap flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" /> Quick Prompts:
            </span>
            {SAMPLE_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(q)}
                className="text-[11px] bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border border-stone-700/60 flex items-center gap-1"
              >
                <span>{q}</span>
                <ArrowRight className="w-2.5 h-2.5 text-stone-400" />
              </button>
            ))}
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-stone-900/60">
          {messages.map((msg, index) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={index}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-amber-400" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    isUser
                      ? 'bg-amber-500 text-stone-950 font-medium rounded-tr-none'
                      : 'bg-stone-800/90 text-stone-100 border border-stone-700/70 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  <p>{msg.content}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      isUser ? 'text-stone-900/70' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
                {isUser && (
                  <div className="w-7 h-7 rounded-full bg-stone-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-stone-300" />
                  </div>
                )}
              </div>
            );
          })}
          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-amber-400" />
              </div>
              <div className="bg-stone-800/90 text-stone-300 border border-stone-700/70 rounded-2xl rounded-tl-none px-4 py-3 text-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                <span>Consulting archives and synthesizing historical record...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleFormSubmit}
          className="p-3 sm:p-4 bg-stone-950 border-t border-stone-800 flex items-center gap-2"
        >
          <input
            id="ai-historian-input"
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Ask about any match, player, team, tactic, or era..."
            disabled={isLoading}
            className="flex-1 bg-stone-900 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 disabled:opacity-60"
          />
          <button
            id="ai-historian-submit-button"
            type="submit"
            disabled={isLoading || !inputPrompt.trim()}
            className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
};
