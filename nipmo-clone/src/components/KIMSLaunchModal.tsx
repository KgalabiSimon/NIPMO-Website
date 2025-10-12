"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface KIMSLaunchModalProps {
  isOpen: boolean
  onClose: () => void
  kimsUrl?: string
}

export function KIMSLaunchModal({
  isOpen,
  onClose,
  kimsUrl = "https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard"
}: KIMSLaunchModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            KIMS Launch Update
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            The countdown has begun — a fresh, new-looking KIM System is launching soon.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-4">
          <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
            <img
              src="https://ext.same-assets.com/4026891959/1299496361.png"
              alt="Preview of the new KIMS interface"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <DialogFooter className="p-6 pt-4 flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full sm:w-auto order-2 sm:order-1"
          >
            Close
          </Button>
          <Button
            className="bg-[#a4ba36] hover:bg-[#94a632] text-white w-full sm:w-auto order-1 sm:order-2"
            asChild
          >
            <a href={kimsUrl} rel="noopener noreferrer">
              Access Current KIMS
              <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Hook to attach modal to all "Access KIMS Now" buttons
export function useKIMSModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // Check if element has data-kims-access attribute
      const hasDataAttribute = target.closest('[data-kims-access]')

      // Check if the clicked element is specifically a button with "Access KIMS Now" text
      const isButton = target.tagName === 'BUTTON' || target.closest('button')
      const buttonText = target.textContent?.trim().toLowerCase() || ''
      const isKIMSButton = isButton && buttonText === 'access kims now'

      if (hasDataAttribute || isKIMSButton) {
        event.preventDefault()
        event.stopPropagation()
        setIsOpen(true)
      }
    }

    // Attach click listener to document
    document.addEventListener('click', handleButtonClick, true)

    return () => {
      document.removeEventListener('click', handleButtonClick, true)
    }
  }, [])

  return {
    isOpen,
    onClose: () => setIsOpen(false)
  }
}
