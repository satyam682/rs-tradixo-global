/**
 * TradixoBot — Rule-Based Chatbot
 * UI redesigned to match RS Tradixo Global website color scheme:
 *   White bg | Gold accent #C5A25D / #D4AF37 | Slate text | #0056B3 blue
 * Keyword + Levenshtein fuzzy matching — Zero API cost
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import ruleData from '../rule.json';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Rule {
  id: string;
  keywords: string[];
  response: string;
}
interface RuleJSON {
  botName: string;
  greeting: string;
  fallback: string;
  rules: Rule[];
}
interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

// ─── Levenshtein fuzzy matching ───────────────────────────────────────────────
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function isFuzzyMatch(input: string, keyword: string): boolean {
  const inp = input.toLowerCase().trim();
  const kw  = keyword.toLowerCase().trim();
  if (inp.includes(kw)) return true;
  if (kw.length >= 5) {
    for (const word of inp.split(/\s+/))
      if (word.length >= 3 && levenshtein(word, kw) <= 2) return true;
  }
  return false;
}

function findBestRule(input: string, rules: Rule[]): Rule | null {
  const scored: { rule: Rule; score: number }[] = [];
  for (const rule of rules) {
    let score = 0;
    for (const kw of rule.keywords)
      if (isFuzzyMatch(input, kw)) score += kw.length;
    if (score > 0) scored.push({ rule, score });
  }
  if (!scored.length) return null;
  return scored.sort((a, b) => b.score - a.score)[0].rule;
}

// ─── Inline markdown renderer ─────────────────────────────────────────────────
function inlineFmt(text: string): React.ReactNode {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**'))
          return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        if (part.startsWith('*') && part.endsWith('*'))
          return <em key={i} className="italic">{part.slice(1, -1)}</em>;
        if (part.startsWith('`') && part.endsWith('`'))
          return <code key={i} className="bg-amber-50 text-amber-800 rounded px-1 text-[10px] font-mono border border-amber-200">{part.slice(1, -1)}</code>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function renderMd(text: string): React.ReactNode {
  const lines = text.split('\n');
  const els: React.ReactNode[] = [];
  let tblBuf: string[] = [];
  let inTbl = false;

  const flushTable = (key: string) => {
    if (tblBuf.length < 2) { els.push(<p key={key} className="text-xs text-slate-600 leading-relaxed">{tblBuf.join('\n')}</p>); tblBuf = []; inTbl = false; return; }
    const headers = tblBuf[0].split('|').filter(Boolean).map(h => h.trim());
    const rows    = tblBuf.slice(2).map(r => r.split('|').filter(Boolean).map(c => c.trim()));
    els.push(
      <div key={key} className="overflow-x-auto my-2 rounded-lg border border-amber-100">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-200">
              {headers.map((h, i) => <th key={i} className="px-3 py-2 text-left font-bold text-amber-800 whitespace-nowrap">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}>
                {row.map((cell, ci) => <td key={ci} className="px-3 py-1.5 text-slate-700 border-b border-slate-100">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tblBuf = []; inTbl = false;
  };

  lines.forEach((line, idx) => {
    const key = `l${idx}`;
    if (line.startsWith('|')) { inTbl = true; tblBuf.push(line); return; }
    else if (inTbl) flushTable(`t${idx}`);

    if (line.startsWith('# '))        els.push(<h2 key={key} className="font-bold text-slate-900 text-sm mt-2 mb-1 border-l-2 border-amber-400 pl-2">{inlineFmt(line.slice(2))}</h2>);
    else if (line.startsWith('## '))  els.push(<h3 key={key} className="font-bold text-slate-800 text-xs mt-2 mb-0.5">{inlineFmt(line.slice(3))}</h3>);
    else if (line.startsWith('### ')) els.push(<h4 key={key} className="font-semibold text-slate-700 text-xs mt-1">{inlineFmt(line.slice(4))}</h4>);
    else if (line.match(/^[•\-\*] /)) els.push(
      <div key={key} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed my-0.5">
        <span className="text-amber-500 mt-0.5 shrink-0 font-bold">›</span>
        <span>{inlineFmt(line.slice(2))}</span>
      </div>
    );
    else if (line.match(/^\d+[️⃣]?\s/)) els.push(
      <div key={key} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed my-0.5">
        <span className="text-amber-600 font-bold shrink-0 min-w-[14px]">{line.match(/^\d+/)?.[0]}.</span>
        <span>{inlineFmt(line.replace(/^\d+[️⃣]?\s/, ''))}</span>
      </div>
    );
    else if (line.trim() === '---')    els.push(<hr key={key} className="my-2 border-amber-100" />);
    else if (line.trim() === '')       els.push(<div key={key} className="h-1.5" />);
    else els.push(<p key={key} className="text-xs text-slate-600 leading-relaxed">{inlineFmt(line)}</p>);
  });

  if (inTbl) flushTable('tend');
  return <>{els}</>;
}

// ─── Quick chips ──────────────────────────────────────────────────────────────
const CHIPS = [
  { label: '🥜 Products',        query: 'what products do you sell' },
  { label: '📦 MOQ & Packing',   query: 'minimum order quantity and packing' },
  { label: '🚢 Shipping',        query: 'shipping transit time' },
  { label: '💰 Payment Terms',   query: 'payment terms LC TT' },
  { label: '📋 Certifications',  query: 'certifications and documents' },
  { label: '🌍 Export Markets',  query: 'which countries do you export to' },
  { label: '📞 Contact Info',    query: 'contact information' },
  { label: '🔬 Quality Control', query: 'quality assurance process' },
];

// ─── Chatbot panel ────────────────────────────────────────────────────────────
const rules     = (ruleData as RuleJSON).rules;
const BOT_NAME  = (ruleData as RuleJSON).botName;
const GREETING  = (ruleData as RuleJSON).greeting;
const FALLBACK  = (ruleData as RuleJSON).fallback;
const genId     = () => Math.random().toString(36).slice(2, 10);

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: genId(), role: 'bot', text: GREETING, timestamp: new Date() }
  ]);
  const [inputText, setInputText]   = useState('');
  const [isTyping, setIsTyping]     = useState(false);
  const [showChips, setShowChips]   = useState(true);
  const endRef   = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (isOpen) {
      timerId = setTimeout(() => inputRef.current?.focus(), 350);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages(prev => [...prev, { id: genId(), role: 'user', text: trimmed, timestamp: new Date() }]);
    setInputText('');
    setIsTyping(true);
    setShowChips(false);

    setTimeout(() => {
      const matched = findBestRule(trimmed, rules);
      setMessages(prev => [...prev, {
        id: genId(), role: 'bot',
        text: matched ? matched.response : FALLBACK,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 400 + Math.random() * 500);
  }, [isTyping]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(inputText); }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop blur overlay on small screens */}
      <div
        className="fixed inset-0 z-40 sm:hidden bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col"
        style={{ width: 'min(390px, calc(100vw - 32px))', height: 'min(580px, calc(100vh - 120px))' }}
        role="dialog"
        aria-modal="true"
        aria-label="TradixoBot Export Assistant"
      >
        {/* ── Outer card — white bg, gold border accent ── */}
        <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200"
          style={{ boxShadow: '0 24px 60px -10px rgba(0,0,0,0.18), 0 0 0 1px rgba(197,162,93,0.15)' }}>

          {/* ── HEADER ── gold gradient, same palette as CTA button ── */}
          <div className="shrink-0 px-4 py-3 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #AA8B4C 0%, #C5A25D 40%, #D4AF37 100%)' }}>

            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/25 border-2 border-white/50 flex items-center justify-center text-lg font-bold shadow-inner">
                🤖
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-amber-600 shadow" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-slate-950 font-extrabold text-sm leading-none tracking-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {BOT_NAME}
              </p>
              <p className="text-slate-800/70 text-[10px] mt-0.5 font-semibold tracking-wide">
                RS Tradixo Global · Export Assistant
              </p>
            </div>

            {/* Live badge */}
            <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-1 mr-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-900 text-[9px] font-bold uppercase tracking-widest">Live</span>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-slate-900 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Thin gold divider line ── */}
          <div className="h-px shrink-0" style={{ background: 'linear-gradient(90deg, #D4AF37, #C5A25D, #AA8B4C)' }} />

          {/* ── MESSAGES AREA ── */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FDFBF7]"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#C5A25D30 transparent' }}>

            {messages.map((msg) => (
              <div key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} bot-msg-in`}>

                {/* Bot avatar dot */}
                {msg.role === 'bot' && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mr-2 mt-0.5 border border-amber-200 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #AA8B4C, #D4AF37)' }}>
                    <span className="text-sm">🤖</span>
                  </div>
                )}

                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${
                  msg.role === 'user'
                    ? 'rounded-tr-md text-white'
                    : 'rounded-tl-md bg-white border border-slate-100'
                }`}
                  style={msg.role === 'user'
                    ? { background: 'linear-gradient(135deg, #1E293B 0%, #334155 100%)' }
                    : { boxShadow: '0 2px 8px rgba(197,162,93,0.08)' }
                  }>
                  {msg.role === 'user'
                    ? <p className="text-xs text-white/95 leading-relaxed">{msg.text}</p>
                    : <div>{renderMd(msg.text)}</div>
                  }
                  <p className={`text-[9px] mt-1.5 text-right ${
                    msg.role === 'user' ? 'text-slate-400' : 'text-slate-300'
                  }`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {/* User avatar dot */}
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs shrink-0 ml-2 mt-0.5 shadow-sm">
                    <span className="text-sm">👤</span>
                  </div>
                )}
              </div>
            ))}

            {/* Typing dots */}
            {isTyping && (
              <div className="flex justify-start bot-msg-in">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mr-2 mt-0.5 border border-amber-200"
                  style={{ background: 'linear-gradient(135deg, #AA8B4C, #D4AF37)' }}>
                  <span className="text-sm">🤖</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400"
                        style={{ animation: `tDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quick-access chips — only after first bot greeting */}
            {showChips && messages.length === 1 && !isTyping && (
              <div className="pt-1">
                <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider mb-2">
                  Quick Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {CHIPS.map(chip => (
                    <button
                      key={chip.query}
                      onClick={() => sendMessage(chip.query)}
                      className="chip-btn px-2.5 py-1 rounded-full text-[10px] font-semibold border border-amber-200 bg-white text-amber-800 hover:bg-amber-50 hover:border-amber-400 transition-all duration-150 cursor-pointer shadow-sm"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* ── INPUT BAR ── */}
          <div className="shrink-0 px-3 py-3 bg-white border-t border-slate-100">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={handleKey}
                disabled={isTyping}
                placeholder="Ask about products, shipping, pricing…"
                className="flex-1 text-xs rounded-xl px-3.5 py-2.5 bg-[#F8F9FA] border border-slate-200 text-slate-800 placeholder-slate-400 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                aria-label="Chat input"
              />
              <button
                onClick={() => sendMessage(inputText)}
                disabled={!inputText.trim() || isTyping}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer"
                style={{
                  background: inputText.trim() && !isTyping
                    ? 'linear-gradient(135deg, #AA8B4C, #D4AF37)'
                    : '#E2E8F0',
                  cursor: inputText.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  boxShadow: inputText.trim() && !isTyping ? '0 2px 8px rgba(197,162,93,0.35)' : 'none',
                }}
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" stroke={inputText.trim() && !isTyping ? '#1E293B' : '#94A3B8'}
                  strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            {/* Footer label */}
            <p className="text-[9px] text-center mt-1.5 text-slate-300 font-medium tracking-wide">
              TradixoBot · Rule-Based AI · Zero API Cost
            </p>
          </div>
        </div>

        {/* Scoped animations */}
        <style>{`
          @keyframes tDot {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
            30% { transform: translateY(-4px); opacity: 1; }
          }
          @keyframes msgIn {
            from { opacity: 0; transform: translateY(6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .bot-msg-in { animation: msgIn 0.22s ease-out forwards; }
        `}</style>
      </div>
    </>
  );
}

// ─── Floating Toggle Button ───────────────────────────────────────────────────
interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function ChatbotButton({ onClick, isOpen }: ChatbotButtonProps) {
  return (
    <button
      id="chatbot-toggle-button"
      onClick={onClick}
      aria-label={isOpen ? 'Close TradixoBot' : 'Open TradixoBot Chat'}
      className="fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-50 flex items-center gap-2.5 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        padding: '10px 18px',
        background: isOpen
          ? 'linear-gradient(135deg, #334155 0%, #1E293B 100%)'
          : 'linear-gradient(135deg, #AA8B4C 0%, #C5A25D 40%, #D4AF37 100%)',
        boxShadow: isOpen
          ? '0 8px 24px rgba(30,41,59,0.35)'
          : '0 8px 24px rgba(197,162,93,0.45), 0 0 0 1px rgba(197,162,93,0.2)',
      }}
    >
      {/* Subtle pulse ring when closed */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-xl animate-ping opacity-20"
          style={{ background: 'linear-gradient(135deg, #C5A25D, #D4AF37)' }} />
      )}

      <span className="text-lg relative z-10">
        {isOpen ? '✕' : '🤖'}
      </span>

      <div className="relative z-10 text-left">
        <p className="font-extrabold text-xs leading-none tracking-tight"
          style={{ color: isOpen ? '#CBD5E1' : '#1E293B', fontFamily: 'Montserrat, sans-serif' }}>
          {isOpen ? 'Close Chat' : 'TradixoBot'}
        </p>

      </div>
    </button>
  );
}
