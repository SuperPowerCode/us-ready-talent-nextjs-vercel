import * as React from 'react';
export function Card({ className='', children }: React.PropsWithChildren<{className?: string}>) { return <div className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}>{children}</div>; }
export function CardHeader({ children, className='' }: React.PropsWithChildren<{className?: string}>) { return <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>; }
export function CardTitle({ children, className='' }: React.PropsWithChildren<{className?: string}>) { return <div className={`font-semibold ${className}`}>{children}</div>; }
export function CardContent({ children, className='' }: React.PropsWithChildren<{className?: string}>) { return <div className={`p-5 ${className}`}>{children}</div>; }
