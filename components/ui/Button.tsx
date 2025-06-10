'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  className = '',
  href,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClass = 'btn'
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  }[variant]
  
  const sizeClass = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  }[size]

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''
  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`

  const ButtonComponent = (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    )
  }

  return ButtonComponent
} 