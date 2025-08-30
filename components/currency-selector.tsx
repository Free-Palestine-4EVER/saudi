"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type CurrencyCode, currencies } from "@/utils/currency"
import { useCurrency } from "@/contexts/currency-context"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CurrencySelectorProps {
  mobile?: boolean
}

export default function CurrencySelector({ mobile = false }: CurrencySelectorProps) {
  const { currency, setCurrency } = useCurrency()
  const [open, setOpen] = useState(false)

  if (mobile) {
    return (
      <div className="w-full">
        <div className="text-sm font-medium mb-1.5">Currency</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between border-input">
              <div className="flex items-center">
                <span className="font-medium">{currency}</span>
                <span className="ml-2 text-muted-foreground">
                  {Object.entries(currencies).find(([code]) => code === currency)?.[1].name}
                </span>
              </div>
              <ChevronsUpDown className="h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
              <DropdownMenuItem key={code} className="cursor-pointer" onClick={() => setCurrency(code)}>
                <span className="font-medium">{code}</span>
                <span className="ml-2 flex-1 text-muted-foreground">{currencies[code].name}</span>
                {currency === code && <Check className="h-4 w-4 ml-2" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-20 border-primary/30 text-primary hover:bg-primary hover:text-white"
        >
          <span className="mr-1">{currency}</span>
          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
          <DropdownMenuItem
            key={code}
            className={cn("cursor-pointer", currency === code && "bg-accent")}
            onClick={() => {
              setCurrency(code)
              setOpen(false)
            }}
          >
            <div className="flex items-center">
              <span className="mr-2">{currencies[code].symbol}</span>
              <span>{currencies[code].name}</span>
            </div>
            {currency === code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
