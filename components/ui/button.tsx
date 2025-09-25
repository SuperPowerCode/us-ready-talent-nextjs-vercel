import * as React from 'react';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean, variant?: 'default'|'secondary', size?: 'sm'|'md'|'lg' };
export function Button({ asChild, className='', variant='default', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 shadow-sm transition hover:opacity-90';
  const v = variant==='secondary' ? 'bg-slate-800 text-slate-100' : 'bg-indigo-600 text-white';
  const s = size==='lg' ? 'text-base px-5 py-3' : size==='sm' ? 'text-sm px-3 py-1.5' : '';
  if (asChild) return <a className={`${base} ${v} ${s} ${className}`} {...(props as any)} />;
  return <button className={`${base} ${v} ${s} ${className}`} {...props} />;
}
