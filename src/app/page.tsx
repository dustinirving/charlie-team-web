import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Checkout our documentary{' '}
            <a href="#" className="font-semibold text-sky-600">
              <span aria-hidden="true" className="absolute inset-0" />
              Watch now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl flex items-center gap-5 content-center">
            <Image alt="" src="/logo.svg" width={100} height={100} />
            Healing from PTSD
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Post-Traumatic Stress Disorder (PTSD) affects millions, leaving a profound impact on
            emotional and mental well-being. It can disrupt daily life, relationships, and the
            ability to find peace. Charlie Team connects individuals with potential psychedelic
            therapies as part of innovative and compassionate approaches to PTSD treatment. Through
            education, advocacy, and support, we aim to empower individuals on their journey toward
            healing, resilience, and transformation.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/application"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Apply now
            </a>
            <a href="/mission" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
