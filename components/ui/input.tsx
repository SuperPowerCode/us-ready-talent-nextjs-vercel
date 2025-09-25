import * as React from 'react';
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-xl bg-slate-800 border border-white/10 p-2 text-slate-100 ${props.className||''}`} />
}
