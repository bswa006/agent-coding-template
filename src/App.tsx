import Navigation from './components/layout/Navigation'
import HeroSection from './components/sections/HeroSection'
import ChallengeSection from './components/sections/ChallengeSection'
import FeaturesSection from './components/sections/FeaturesSection'
import ComponentsSection from './components/sections/ComponentsSection'
import TransformationSection from './components/sections/TransformationSection'
import SafetySection from './components/sections/SafetySection'
import WorkflowsSection from './components/sections/WorkflowsSection'
import DocumentationSection from './components/sections/DocumentationSection'
import ImplementationSection from './components/sections/ImplementationSection'
import OutcomeSection from './components/sections/OutcomeSection'
import CTASection from './components/sections/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengeSection />
        <FeaturesSection />
        <ComponentsSection />
        <TransformationSection />
        <SafetySection />
        <WorkflowsSection />
        <DocumentationSection />
        <ImplementationSection />
        <OutcomeSection />
        <CTASection />
      </main>
    </div>
  )
}

export default App