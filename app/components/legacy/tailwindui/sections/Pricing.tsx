import { Container } from '~/components/legacy/tailwindui/Container';
import { PriceCard } from '~/components/legacy/tailwindui/PriceCard';
const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function PricingSection() {
  return (
    <div className="bg-[#f58321] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <Container type='grid'>
          {Array.from({ length: 3 }).map((_, i) => <PriceCard key={i} features={includedFeatures} />)}
        </Container>
        
      </div>
    </div>
  )
}
