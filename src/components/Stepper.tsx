import classNames from 'classnames';

export function Stepper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-start relative w-full">{children}</div>;
}

export default function Step({
  isActive = false,
  isCompleted = true,
  children,
}: // size = 40,
// backgroundColor = 'var(--theme-tertiary-color)',
// foregroundColor = 'var(--theme-tertiary-foreground-color)',
// activeBackgroundColor = 'var(--theme-active-color)',
// activeForegroundColor = 'var(--theme-active-foreground-color)',
// completedBackgroundColor = 'var(--theme-card-color)',
// completedForegroundColor = 'var(--theme-card-foreground-color)',
{
  children: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
}) {
  return (
    <div
      className={classNames(
        '[&:not(:last-child)]:w-full relative [&:not(:last-child)]:after:content [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:w-[calc(100%-40px)] [&:not(:last-child)]:after:top-1/2 [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:h-[4px] [&:not(:last-child)]:after:bg-slate-400',
        {
          '[&:not(:last-child)]:after:bg-slate-400': !isActive && !isCompleted, // Default state
          '[&:not(:last-child)]:after:bg-sky-600': isActive, // Active state
          '[&:not(:last-child)]:after:bg-green-500': isCompleted, // Completed state
        },
      )}
    >
      <div
        className={classNames('flex justify-center items-center w-[40px] h-[40px] rounded-full', {
          'bg-slate-400 text-slate-950': !isActive && !isCompleted, // Default state
          'bg-sky-600 text-white': isActive, // Active state
          'bg-green-500 text-white': isCompleted, // Completed state
        })}
      >
        {children}
      </div>
    </div>
  );
}
