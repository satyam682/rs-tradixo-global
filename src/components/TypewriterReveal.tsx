/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypewriterRevealProps {
  key?: string;
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

  const phrasesRef = React.useRef(phrases);
  phrasesRef.current = phrases;
  const typingSpeedRef = React.useRef(typingSpeed);
  typingSpeedRef.current = typingSpeed;
  const deletingSpeedRef = React.useRef(deletingSpeed);
  deletingSpeedRef.current = deletingSpeed;
  const delayBetweenRef = React.useRef(delayBetween);
  delayBetweenRef.current = delayBetween;

  useEffect(() => {
    const currentPhrases = phrasesRef.current;
    if (currentPhrases.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;
    const phrase = currentPhrases[currentPhraseIdx];

    if (isDeleting) {
      // Deleting character one by one
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, deletingSpeedRef.current);
    } else {
      // Typing character one by one
      timer = setTimeout(() => {
        setCurrentText(phrase.slice(0, currentText.length + 1));
      }, typingSpeedRef.current);
    }

    // Finished typing the entire phrase
    if (!isDeleting && currentText === phrase) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenRef.current);
    }

    // Finished deleting the entire phrase
    if (isDeleting && currentText === '') {
      clearTimeout(timer);
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % currentPhrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIdx]);

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
