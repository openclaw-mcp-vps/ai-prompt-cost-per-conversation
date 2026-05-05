import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Cost Tracker — Per Conversation Analytics',
  description: 'Track AI API token usage and costs per user conversation thread. Identify expensive patterns and optimize your AI spend.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="11760390-d8fe-4e1a-9479-24d27b5a58a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
