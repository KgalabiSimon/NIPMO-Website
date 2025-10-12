"use client";

import { useEffect } from "react";
import { KIMSLaunchModal, useKIMSModal } from "@/components/KIMSLaunchModal";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onClose } = useKIMSModal();

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <>
      <div className="antialiased">{children}</div>
      <KIMSLaunchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
