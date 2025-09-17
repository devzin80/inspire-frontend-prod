'use client'
import { useRef, useEffect, useState } from 'react'

export default function OtpInput({
    value = '',
    length = 6,
    onChange,
    onResend,
    otpErrorCount,
    timer = 300, // countdown duration
}) {
    const inputs = useRef([])
    const [timeLeft, setTimeLeft] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    const [shake, setShake] = useState(false)

    // re-trigger shake whenever otpVerified becomes true
    useEffect(() => {
        if (otpErrorCount > 0) {
            setShake(true)
            const t = setTimeout(() => setShake(false), 500)
            return () => clearTimeout(t)
        }
    }, [otpErrorCount])

    // handle typing
    const handleChange = (e, idx) => {
        const char = e.target.value.replace(/\D/, '')
        const currentValue = String(value || '').padEnd(length, '')
        const newValue = currentValue.split('')
        newValue[idx] = char
        const otp = newValue.join('').slice(0, length)
        onChange(otp)

        if (char && idx < length - 1) {
            inputs.current[idx + 1]?.focus()
        }
    }

    const handleKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !value[idx] && idx > 0) {
            inputs.current[idx - 1]?.focus()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pasteData = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, length)
        onChange(pasteData)
        const focusIdx = Math.min(pasteData.length, length) - 1
        inputs.current[focusIdx]?.focus()
    }

    // Timer effect
    useEffect(() => {
        if (!timerActive || timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setTimerActive(false)
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [timerActive, timeLeft])

    const handleResend = () => {
        if (onResend) onResend()
        setTimeLeft(timer)
        setTimerActive(true)
    }

    return (
        <div className='flex flex-col items-center space-y-4'>
            <div className={`flex space-x-3 ${shake ? 'shake' : ''}`}>
                {Array.from({ length }).map((_, idx) => (
                    <input
                        key={idx}
                        type='tel'
                        inputMode='numeric'
                        pattern='\d*'
                        maxLength={1}
                        value={value[idx] || ''}
                        ref={(el) => (inputs.current[idx] = el)}
                        onChange={(e) => handleChange(e, idx)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        onPaste={handlePaste}
                        className={`w-16 h-16 text-center text-xl font-semibold text-gray-800 
              border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white 
              ${otpErrorCount ? 'ring-2 ring-red-300' : ''}`}
                    />
                ))}
            </div>

            {otpErrorCount ? (
                <p className='text-red-700 text-sm w-full font-semibold'>
                    Invalid Otp. Please Try Again.
                </p>
            ):('')}

            <p className='text-gray-600 text-sm w-full'>
                Didn’t receive any code?{' '}
                <button
                    type='button'
                    onClick={handleResend}
                    disabled={timerActive}
                    className={`text-blue-600 font-medium hover:underline disabled:text-gray-400 disabled:cursor-not-allowed`}
                >
                    {timerActive
                        ? `Resend Code in ${Math.floor(timeLeft / 60)}:${(
                              timeLeft % 60
                          )
                              .toString()
                              .padStart(2, '0')}s`
                        : 'Resend Code'}
                </button>
            </p>
        </div>
    )
}
