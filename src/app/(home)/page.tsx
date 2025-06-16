import { Benefits, Deliver, Hero, Solutions, WeSupport } from './components';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Solutions />
      <Benefits />
      <Deliver />
      <WeSupport />
    </main>
  );
}
