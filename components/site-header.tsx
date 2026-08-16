import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-semibold tracking-tight">Your Name</Link>
        <nav className="flex gap-5 text-sm text-zinc-400">
          <Link href="/#work" className="hover:text-white">Work</Link>
          <Link href="/#about" className="hover:text-white">About</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
