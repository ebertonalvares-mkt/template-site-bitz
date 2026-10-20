"use client";

import Script from "next/script";
import { siteConfig } from "@/config/siteConfig";

declare global {
  interface Window {
    initChat?: (options: {
      hotelName: string;
      token: string;
      primaryColor: string;
      position: string;
    }) => void;
  }
}

export function BitzChatWidget() {
  const { chatWidget } = siteConfig.bitzEngine;

  if (!chatWidget.enabled || !chatWidget.token) {
    return null;
  }

  const handleScriptLoad = () => {
    if (typeof window !== "undefined" && window.initChat) {
      window.initChat({
        hotelName: chatWidget.hotelName,
        token: chatWidget.token,
        primaryColor: chatWidget.primaryColor,
        position: chatWidget.position,
      });
    }
  };

  return (
    <Script
      src={chatWidget.scriptUrl}
      strategy="lazyOnload"
      type="module"
      onLoad={handleScriptLoad}
    />
  );
}
