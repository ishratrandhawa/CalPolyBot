import clsx from 'clsx'

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
        'bg-green-600 font-semibold text-white hover:bg-green-500 active:bg-green-700 active:text-white/70',
        className
      )}
      {...props}
    />
  )
}

