"use client"

import { cn } from "@/lib/utils"
import { ArrowsUpDownIcon, ChevronDownIcon, Cog8ToothIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

interface Token {
    symbol: string
    name: string
    color: string
    balance?: string
}

const tokens: Token[] = [
    { symbol: "BTC", name: "Bitcoin", color: "#F7931A", balance: "0.5" },
    { symbol: "ETH", name: "Ethereum", color: "#627EEA", balance: "2.0" },
    { symbol: "USDT", name: "Tether", color: "#26A17B", balance: "1000" },
]

function TokenIcon({ color, className }: { color: string, className?: string }) {
    return (
        <div className={cn("relative group/icon", className)}>
            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-0 group-hover/icon:opacity-30 blur-sm transition-all duration-300"></div>
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient-xy opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
            {/* Inner circle with token color */}
            <div
                className="relative w-full h-full rounded-full border border-orange-500/20 transition-all duration-300 group-hover/icon:scale-95 group-hover/icon:border-orange-500/40"
                style={{ backgroundColor: color }}
            >
                {/* Inner glow */}
                <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-40 transition-opacity duration-300 blur-[2px]"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    )
}

export function SwapCard() {
    const [fromToken, setFromToken] = useState<Token>(tokens[0])
    const [toToken, setToToken] = useState<Token>(tokens[1])
    const [fromAmount, setFromAmount] = useState("")
    const [toAmount, setToAmount] = useState("")
    const [showTokenList, setShowTokenList] = useState<"from" | "to" | null>(null)
    const [slippage, setSlippage] = useState("0.5")
    const [showSettings, setShowSettings] = useState(false)

    const handleSwapTokens = () => {
        setFromToken(toToken)
        setToToken(fromToken)
        setFromAmount(toAmount)
        setToAmount(fromAmount)
    }

    return (
        <div className="w-full max-w-sm relative mt-20">
            <div className="relative bg-black/80 backdrop-blur-xl rounded-xl border border-orange-500/10 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium text-orange-500/90">Swap</h2>
                    <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="p-1.5 hover:bg-orange-500/5 rounded-lg transition-colors"
                    >
                        <Cog8ToothIcon className="w-4 h-4 text-orange-500/70" />
                    </button>
                </div>

                {showSettings && (
                    <div className="mb-4 p-3 bg-orange-500/5 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-orange-100/70">Slippage</span>
                            <div className="flex items-center gap-1">
                                <input
                                    type="number"
                                    value={slippage}
                                    onChange={(e) => setSlippage(e.target.value)}
                                    className="w-16 px-2 py-1 bg-black/40 rounded border border-orange-500/10 text-right text-sm"
                                />
                                <span className="text-sm text-orange-500/70">%</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* From Token */}
                <div className="bg-orange-500/5 rounded-lg p-3 group/input hover:bg-orange-500/[0.07] transition-colors duration-300">
                    <div className="flex justify-between mb-1">
                        <input
                            type="number"
                            placeholder="0.0"
                            value={fromAmount}
                            onChange={(e) => setFromAmount(e.target.value)}
                            className="bg-transparent text-xl outline-none w-[140px] placeholder-orange-100/20 focus:placeholder-orange-100/30 transition-colors"
                        />
                        <button
                            onClick={() => setShowTokenList("from")}
                            className="flex items-center gap-2 bg-black/20 hover:bg-black/40 transition-all duration-200 rounded-lg px-2 py-1.5 group/button border border-transparent hover:border-orange-500/20"
                        >
                            <TokenIcon color={fromToken.color} className="w-5 h-5" />
                            <span className="text-sm group-hover/button:text-orange-500 transition-colors">{fromToken.symbol}</span>
                            <ChevronDownIcon className="w-4 h-4 text-orange-500/70 transition-transform duration-200 group-hover/button:rotate-180" />
                        </button>
                    </div>
                    <div className="flex justify-between text-xs text-orange-100/40 group-hover/input:text-orange-100/50 transition-colors">
                        <span>≈ $0.00</span>
                        <span>{fromToken.balance} {fromToken.symbol}</span>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-1.5 relative z-10">
                    <button
                        onClick={handleSwapTokens}
                        className="bg-black/40 border border-orange-500/10 rounded-lg p-1.5 hover:bg-orange-500/5 transition-all duration-200 hover:border-orange-500/30 group/swap"
                    >
                        <ArrowsUpDownIcon className="w-4 h-4 text-orange-500/70 transition-transform duration-300 group-hover/swap:rotate-180" />
                    </button>
                </div>

                {/* To Token */}
                <div className="bg-orange-500/5 rounded-lg p-3 group/input hover:bg-orange-500/[0.07] transition-colors duration-300">
                    <div className="flex justify-between mb-1">
                        <input
                            type="number"
                            placeholder="0.0"
                            value={toAmount}
                            onChange={(e) => setToAmount(e.target.value)}
                            className="bg-transparent text-xl outline-none w-[140px] placeholder-orange-100/20 focus:placeholder-orange-100/30 transition-colors"
                        />
                        <button
                            onClick={() => setShowTokenList("to")}
                            className="flex items-center gap-2 bg-black/20 hover:bg-black/40 transition-all duration-200 rounded-lg px-2 py-1.5 group/button border border-transparent hover:border-orange-500/20"
                        >
                            <TokenIcon color={toToken.color} className="w-5 h-5" />
                            <span className="text-sm group-hover/button:text-orange-500 transition-colors">{toToken.symbol}</span>
                            <ChevronDownIcon className="w-4 h-4 text-orange-500/70 transition-transform duration-200 group-hover/button:rotate-180" />
                        </button>
                    </div>
                    <div className="flex justify-between text-xs text-orange-100/40 group-hover/input:text-orange-100/50 transition-colors">
                        <span>≈ $0.00</span>
                        <span>{toToken.balance} {toToken.symbol}</span>
                    </div>
                </div>

                {/* Price Info */}
                <div className="mt-4 px-1 text-xs space-y-2">
                    <div className="flex justify-between text-orange-100/40 group/impact hover:text-orange-100/60 transition-colors">
                        <span>Price Impact</span>
                        <span className="text-orange-100/60 group-hover/impact:text-orange-500/90 transition-colors">{"< 0.01%"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-orange-100/40 group-hover/route:text-orange-100/60 transition-colors">Route</span>
                        <div className="flex items-center gap-2 group/route">
                            <TokenIcon color={fromToken.color} className="w-3 h-3" />
                            <span className="text-orange-500/70 group-hover/route:text-orange-500 transition-colors transform group-hover/route:scale-110 duration-300">→</span>
                            <TokenIcon color={toToken.color} className="w-3 h-3" />
                        </div>
                    </div>
                </div>

                {/* Swap Button */}
                <div className="relative mt-4 group/button">
                    {/* Animated glow effect */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-lg opacity-0 group-hover/button:opacity-100 blur-sm transition-all duration-500 animate-gradient-xy"></div>

                    {/* Button background with gradient */}
                    <div className="absolute inset-[1px] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg opacity-90 group-hover/button:opacity-100 transition-opacity duration-300"></div>

                    {/* Button content */}
                    <button
                        className="relative w-full bg-black/10 backdrop-blur-sm text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 group-hover/button:shadow-[0_0_20px_rgba(255,140,0,0.3)] active:scale-[0.98] overflow-hidden"
                        disabled={!fromAmount || !toAmount}
                    >
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-1000"></div>

                        {/* Button text */}
                        <span className="tracking-wide relative z-10">
                            {!fromAmount || !toAmount ? "Enter an amount" : "Swap"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Token Selection Modal */}
            {showTokenList && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowTokenList(null)}>
                    <div className="bg-black/90 border border-orange-500/10 rounded-xl p-4 w-full max-w-xs" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-medium text-orange-500/90">Select Token</h3>
                            <button
                                onClick={() => setShowTokenList(null)}
                                className="text-orange-500/70 hover:text-orange-500 transition-colors w-6 h-6 flex items-center justify-center rounded-full hover:bg-orange-500/10"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-1">
                            {tokens.map((token) => (
                                <button
                                    key={token.symbol}
                                    className="w-full flex items-center gap-3 p-2 hover:bg-orange-500/5 rounded-lg transition-all duration-200 group/token relative"
                                    onClick={() => {
                                        if (showTokenList === "from") setFromToken(token)
                                        else setToToken(token)
                                        setShowTokenList(null)
                                    }}
                                >
                                    <TokenIcon color={token.color} className="w-6 h-6" />
                                    <div className="text-left flex-1">
                                        <div className="text-sm group-hover/token:text-orange-500 transition-colors">{token.symbol}</div>
                                        <div className="text-xs text-orange-100/40 group-hover/token:text-orange-100/60 transition-colors">{token.name}</div>
                                    </div>
                                    <div className="text-right text-xs text-orange-100/60">
                                        {token.balance}
                                    </div>
                                    {/* Hover border effect */}
                                    <div className="absolute inset-0 border border-orange-500/0 rounded-lg group-hover/token:border-orange-500/20 transition-colors"></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
} 