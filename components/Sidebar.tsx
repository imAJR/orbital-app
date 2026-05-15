"use client";
import { MessageSquare, PlayCircle, User, Home, Settings, Flame, Hash } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home', ariaLabel: 'Go to home' },
    { href: '/feed', icon: MessageSquare, label: 'Feed', ariaLabel: 'Go to feed' },
    { href: '/shorts', icon: PlayCircle, label: 'Shorts', ariaLabel: 'Go to shorts' },
    { href: '/profile', icon: User, label: 'Profile', ariaLabel: 'Go to profile' },
    { href: '/settings', icon: Settings, label: 'Settings', ariaLabel: 'Go to settings' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="hidden xl:flex flex-col gap-5 w-16 sticky top-24 h-fit items-center py-8 border border-border-light dark:border-border-dark rounded-3xl bg-card-light dark:bg-card-dark shadow-soft-md">
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-background-dark shadow-orbital-cyan">
        <Hash size={20} />
      </div>
      <div className="w-6 h-[1px] my-2 bg-border-light dark:bg-border-dark"></div>

      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              active
                ? 'bg-primary text-background-dark shadow-orbital-cyan'
                : 'opacity-40 hover:opacity-100 hover:text-primary'
            }`}
            aria-label={item.ariaLabel}
            title={item.label}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </aside>
  );
};
