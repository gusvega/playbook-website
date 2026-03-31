'use client';

import {
  Container,
  Button,
  Badge,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Code,
} from '@gusvega/ui';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 border-b border-neutral-100 bg-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight">
              Validate before merge.<br />Promote by version.
            </h1>
            <p className="text-lg text-neutral-600 mb-3 leading-relaxed">
              How I build CI/CD systems that are testable, traceable, and safe to promote.
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              Every pull request proves itself in real infrastructure. Every release is versioned and tagged. Every deployment is reversible.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => {
                document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-sm">
                Principles
              </Button>
              <Button variant="secondary" onClick={() => {
                document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-sm">
                Workflow
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section id="principles" className="py-16 border-b border-neutral-100 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">Seven Core Principles</h2>
            <p className="text-sm text-neutral-600">The foundation of reliable delivery</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                num: '01',
                title: 'Every change must prove itself before merge',
                desc: 'A pull request is where infrastructure, build, deployment, and testing happen in a dedicated test environment.',
              },
              {
                num: '02',
                title: 'Test against real infrastructure',
                desc: 'Mocked environments hide real problems. Validate in a real isolated environment before touching shared ones.',
              },
              {
                num: '03',
                title: 'Main should stay clean and deployable',
                desc: 'Merging to main means the change is validated. main represents code safe to deploy.',
              },
              {
                num: '04',
                title: 'CI and CD are separate concerns',
                desc: 'CI proves the change. CD promotes trusted versions. They work together, not merged into chaos.',
              },
              {
                num: '05',
                title: 'Releases should be versioned, tagged, and traceable',
                desc: 'Every deployment maps to a clear version tag. If you cannot tell what version is running where, your pipeline is failing.',
              },
              {
                num: '06',
                title: 'Promotion should be intentional',
                desc: 'Promote using versioned artifacts and tags, not rebuilds. The same tested version moves forward.',
              },
              {
                num: '07',
                title: 'Rollback must be built in',
                desc: 'Every deployment strategy is incomplete without rollback. Every release should be reversible.',
              },
            ].map((principle, i) => (
              <Card key={i} className="border border-neutral-200 bg-white hover:border-neutral-300 transition-all">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-lg font-bold text-neutral-200 flex-shrink-0">{principle.num}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 mb-1 text-sm">{principle.title}</h3>
                      <p className="text-xs text-neutral-600">{principle.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-16 border-b border-neutral-100 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">The Workflow</h2>
            <p className="text-sm text-neutral-600">From feature branch to production</p>
          </div>
          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Feature Branch',
                desc: 'Developer creates a feature branch for a change.',
              },
              {
                step: '2',
                title: 'PR Environment Validation',
                desc: 'Terraform provisions isolated infrastructure. GitHub Actions builds and deploys. Tests run against real env.',
              },
              {
                step: '3',
                title: 'Merge to Main',
                desc: 'After approval, merge triggers CI pipeline. Build once, deploy to dev, verify merged state.',
              },
              {
                step: '4',
                title: 'Tag Release',
                desc: 'CD creates version tag (v1.2.0-dev). This tag is the release identity.',
              },
              {
                step: '5',
                title: 'Promote Across Environments',
                desc: 'Same Docker image → staging, prod. Only secrets/config change per environment.',
              },
              {
                step: '6',
                title: 'Rollback by Tag',
                desc: 'Deployment fails? Rollback by version tag. Fast, explicit, reversible.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 bg-neutral-50 rounded border border-neutral-200 hover:bg-neutral-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-white border border-neutral-900 flex items-center justify-center font-bold text-neutral-900 text-sm">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PR Testing Strategy */}
      <section id="pr-testing" className="py-16 border-b border-neutral-100 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">PR Testing</h2>
            <p className="text-sm text-neutral-600">Ephemeral per-PR environments</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border border-neutral-200 bg-white">
              <CardContent className="p-4">
                <p className="font-semibold text-neutral-900 mb-2 text-sm">Recommended</p>
                <p className="text-xs text-neutral-600 mb-2">Create isolated PR environments using Terraform on Google Cloud.</p>
                <ul className="text-xs text-neutral-600 space-y-1">
                  <li>• Per-PR Kubernetes namespace or Cloud Run service</li>
                  <li>• Branch-specific database/schema</li>
                  <li>• Preview URL for testing</li>
                  <li>• Auto cleanup on merge</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200 bg-neutral-50">
              <CardContent className="p-4">
                <p className="font-semibold text-neutral-900 mb-2 text-sm">Why</p>
                <p className="text-xs text-neutral-600">
                  Isolation means no flaky results, no coordination overhead, and real proof that the change works before it touches main.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Versioning & Promotion */}
      <section id="versioning" className="py-16 border-b border-neutral-100 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">Versioning & Promotion</h2>
            <p className="text-sm text-neutral-600">Same artifact, different environment config</p>
          </div>
          <Card className="border border-neutral-200 bg-neutral-50">
            <CardContent className="pt-4 space-y-4 text-sm text-neutral-600">
              <p>Build once. Version it. Promote same Docker image across environments:</p>
              <pre className="bg-white border border-neutral-200 rounded p-3 overflow-x-auto text-xs font-mono text-neutral-900">
{`v1.2.0-dev   → deploy to Kubernetes dev namespace
v1.2.0-rc    → release candidate in staging
v1.2.0       → production release

Same image. Secrets/config injected per environment.`}
              </pre>
              <p className="text-xs">
                This ensures traceability, prevents rebuild drift, and keeps secrets isolated from the artifact.
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Anti-Patterns */}
      <section id="antipatterns" className="py-16 border-b border-neutral-100 bg-white">
        <Container>
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2 text-neutral-900">What I Avoid</h2>
            <p className="text-sm text-neutral-600">Anti-patterns that break reliability</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              'Manual deployments',
              'Merging unvalidated infrastructure',
              'Treating PRs as code review only',
              'Rebuilding per environment',
              'Unclear versioning',
              'Promoting without traceability',
              'Pipelines with no rollback',
              'Shared test environments as primary validation',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-3 bg-neutral-50 rounded border border-neutral-200 text-xs">
                <span className="text-neutral-400 font-bold">✕</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tooling */}
      <section id="tooling" className="py-20 border-b border-neutral-100">
        <Container>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-neutral-900">Preferred Tooling</h2>
            <p className="text-neutral-600">GitHub + GitHub Actions + Terraform + Next.js + Google Cloud</p>
          </div>
          <Card className="border border-neutral-200 bg-neutral-50">
            <CardContent className="pt-6 space-y-6 text-sm text-neutral-600">
              <pre className="bg-white border border-neutral-200 rounded p-4 overflow-x-auto text-xs font-mono text-neutral-900">
{`GitHub               → Source of truth, PR workflow
GitHub Actions       → CI/CD orchestration
Terraform            → Infrastructure as code
Docker               → Build once, deploy everywhere
Kubernetes           → Scale and manage containers
Google Cloud         → Compute, storage, services`}
              </pre>
              
              <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-neutral-200">
                <div>
                  <p className="font-semibold text-neutral-900 mb-2">Build & Deploy</p>
                  <p className="text-xs text-neutral-600">GitHub Actions builds your app once. Docker packages it. Kubernetes runs it. Same image, multiple environments.</p>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 mb-2">Infrastructure</p>
                  <p className="text-xs text-neutral-600">Terraform provisions ephemeral per-PR environments on Google Cloud. Easy, repeatable, disposable.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-neutral-200 bg-neutral-50">
            <CardHeader>
              <h3 className="font-semibold text-neutral-900">How This Works</h3>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-neutral-600">
              <p>
                <strong className="text-neutral-900">Docker + Kubernetes pattern:</strong> Build once with GitHub Actions, package in Docker, deploy same image across environments via Kubernetes. Secrets and config injected per environment.
              </p>
              <pre className="bg-white border border-neutral-200 rounded p-4 overflow-x-auto text-xs font-mono text-neutral-900">
{`PR opened
  ↓ Terraform provisions isolated GKE namespace
  ↓ GitHub Actions builds and tags Docker image
  ↓ Deploy to pr-123.example.com for testing
  ↓
Merge to main
  ↓ Build Docker image → push with tag v1.2.0-dev
  ↓ Deploy to Kubernetes dev namespace
  ↓
CD promotes same image to staging, prod
  ↓ Only secrets/config changes per environment
  ↓
Rollback: kubectl rollout undo + version tag`}
              </pre>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Core Doctrine */}
      <section className="py-24 border-t border-neutral-100 bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              Validate before merge.<br />Promote by version.
            </h2>
            <p className="text-base text-neutral-600">
              Changes proven in isolated real infrastructure. Releases versioned and tagged. Deployments traceable and reversible.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
