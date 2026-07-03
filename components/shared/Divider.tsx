import React from 'react'

interface DividerProps {
  className: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`w-full max-w-[450px] h-2 ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
      }}
    >
      <div
        className="w-full h-full bg-primary dark:bg-secondary"
        style={{
          maskImage:
            'repeating-linear-gradient(45deg, black, black 2px, transparent 2px, transparent 8px)',
          WebkitMaskImage:
            'repeating-linear-gradient(45deg, black, black 2px, transparent 2px, transparent 8px)',
        }}
      />
    </div>
  )
}
