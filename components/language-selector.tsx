"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", flag: "🇯🇴" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
]

interface LanguageSelectorProps {
  mobile?: boolean
}

export default function LanguageSelector({ mobile = false }: LanguageSelectorProps) {
  const [language, setLanguage] = useState("en")
  const [open, setOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  if (mobile) {
    return (
      <div className="w-full">
        <div className="text-sm font-medium mb-1.5">Language</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between border-input">
              <div className="flex items-center">
                <span className="mr-2 text-base">{currentLanguage.flag}</span>
                <span className="font-medium">{currentLanguage.name}</span>
              </div>
              <ChevronsUpDown className="h-4 w-4 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-[200px]">
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.code} className="cursor-pointer" onClick={() => setLanguage(lang.code)}>
                <span className="mr-2 text-base">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && <Check className="h-4 w-4 ml-auto" />}
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
          <span className="mr-2">{currentLanguage.flag}</span>
          <span>{currentLanguage.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={cn("cursor-pointer", language === lang.code && "bg-accent")}
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
          >
            <span className="mr-2">{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
