import { Waves } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-flow-indigo to-flow-cyan">
            <Waves className="h-3.5 w-3.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-sm font-bold">Flow</span>
        </a>
        <p className="text-sm text-slate-500">© 2026 Flow Labs, Inc. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="transition-colors hover:text-white">Privacy</a>
          <a href="#" className="transition-colors hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  )
}
