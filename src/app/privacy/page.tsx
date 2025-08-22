import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - GenPlay',
  description: 'GenPlay\'s privacy policy and data handling practices',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Header onWaitlistOpen={() => {}} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg mb-8 text-center">
                Last updated: January 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">What We Collect</h2>
                  <p className="text-slate-300 leading-relaxed">
                    When you join our beta waitlist, we collect:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-4 space-y-2">
                    <li>Your email address (required)</li>
                    <li>Your name (optional)</li>
                    <li>Your role in game development (optional)</li>
                    <li>Your preferred game engine (optional)</li>
                    <li>Your experience level (optional)</li>
                    <li>Your intended use case (optional)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We use your information solely to:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-4 space-y-2">
                    <li>Notify you when our beta becomes available</li>
                    <li>Send you important updates about GenPlay</li>
                    <li>Understand our user base to improve the product</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    <strong>We will never:</strong>
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-2 space-y-2">
                    <li>Sell your information to third parties</li>
                    <li>Send you spam or promotional content from other companies</li>
                    <li>Use your data for advertising or tracking</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Data Storage</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Your waitlist information is securely stored using Vercel's infrastructure. 
                    We implement industry-standard security measures to protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Analytics</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We use minimal analytics (Vercel Analytics and optionally Plausible) to understand 
                    how our website is used. These tools do not collect personal information and 
                    respect user privacy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                  <p className="text-slate-300 leading-relaxed">
                    You can:
                  </p>
                  <ul className="list-disc list-inside text-slate-300 mt-4 space-y-2">
                    <li>Unsubscribe from our emails at any time</li>
                    <li>Request deletion of your data</li>
                    <li>Request a copy of your data</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    To exercise these rights, email us at privacy@genplay.dev
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If you have any questions about this privacy policy or our data practices, 
                    please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-card border border-slate-700 rounded-xl">
                    <p className="text-slate-300">
                      Email: privacy@genplay.dev<br />
                      Subject: Privacy Policy Question
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Updates</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of 
                    any significant changes via email or through our website.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
