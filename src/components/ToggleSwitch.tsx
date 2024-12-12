import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type ToggleSwitchProps = {
  isSelected?: boolean
  onToggle?: () => void
  activeBgClass?: string
  inactiveBgClass?: string
  activeIcon?: React.ReactNode
  inactiveIcon?: React.ReactNode
}

export default function ToggleSwitch({
  isSelected: controlledSelected,
  onToggle,
  activeBgClass = 'bg-green-600',
  inactiveBgClass = 'bg-gray-600',
  activeIcon,
  inactiveIcon,
}: ToggleSwitchProps) {
  const [internalSelected, setInternalSelected] = useState(false)
  const isSelected = controlledSelected ?? internalSelected

  const handleClick = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalSelected(!isSelected)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        'flex w-20 h-10 rounded-full items-center transition-all duration-300',
        isSelected ? activeBgClass : inactiveBgClass
      )}
    >
      <span
        className={twMerge(
          'h-11 w-11 bg-white rounded-full transition-all duration-300 shadow-lg flex items-center justify-center',
          isSelected && 'ml-10'
        )}
      >
        {isSelected ? activeIcon : inactiveIcon}
      </span>
    </div>
  )
}
