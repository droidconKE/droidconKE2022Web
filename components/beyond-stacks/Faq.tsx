import { SectionTitle } from './SectionHeader'

const CONTACT_EMAIL = 'hello@droidcon.co.ke'

const faqs = [
  {
    question: 'Can my company sponsor or send a whole team?',
    answer: (
      <>
        Yes, team discounts are available for groups of 5+. Request Team Invoice
        at{' '}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-primary dark:text-primary underline"
        >
          {CONTACT_EMAIL}
        </a>
      </>
    ),
  },
  {
    question: 'Is the schedule fixed or on-the-day?',
    answer:
      'Unconference sessions are pre-curated by community leads to maintain high technical signal, unlike open-mic unconferences.',
  },
  {
    question: 'Will session recordings be available?',
    answer:
      'Panel debates and talks will be recorded, but live workshops and open discussions are strictly in-room experiences.',
  },
]

export const Faq = () => (
  <section aria-labelledby="faq-title" className="s-container my-12 md:my-24">
    <div className="border-b border-gray-300 dark:border-white/60 pb-6 mb-6">
      <SectionTitle id="faq-title">FAQ</SectionTitle>
    </div>
    {/* White cards in both themes; the border separates them from a white page. */}
    <dl className="space-y-3">
      {faqs.map(({ question, answer }) => (
        <div
          key={question}
          className="rounded-3xl border border-gray-200 dark:border-transparent bg-white px-6 py-6 md:px-8"
        >
          <dt className="text-primary text-xl md:text-2xl leading-tight">
            {question}
          </dt>
          <dd className="mt-3 max-w-3xl text-black dark:text-black text-sm md:text-base leading-snug">
            {answer}
          </dd>
        </div>
      ))}
    </dl>
  </section>
)
