/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterRevealProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypewriterReveal({
  phrases,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000
}: TypewriterRevealProps) {
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typewriter when phrases list changes (e.g. on language change)
  useEffect(() => {
    setCurrentPhraseIdx(0);
    setCurrentText('');
    setIsDeleting(false);
  }, [phrases]);

  useEffect(() => {
    if (phrases.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;
    const phrase = phrases[currentPhraseIdx];

    if (isDeleting) {
      // Deleting character one by one
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing character one by one
      timer = setTimeout(() => {
        setCurrentText(phrase.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Finished typing the entire phrase
    if (!isDeleting && currentText === phrase) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    }

    // Finished deleting the entire phrase
    if (isDeleting && currentText === '') {
      clearTimeout(timer);
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIdx, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="inline-block whitespace-nowrap">
        {currentText}
      </span>
      {/* Blinking organic typing cursor */}
      <motion.span 
        className="inline-block bg-[#C5A25D] w-[2px] h-[1em] ml-1 self-center"
        animate={{ opacity: [1, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 0.8, 
          ease: "steps(2)" 
        }}
      />
    </span>
  );
}
