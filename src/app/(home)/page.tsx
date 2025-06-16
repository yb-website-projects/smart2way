import {
  Benefits,
  Deliver,
  Hero,
  Solutions,
  WeComitted,
  WeSupport,
} from './components';

export default function Home() {
  return (
    <main>
      <Hero />
      <WeComitted />
      <Solutions />
      <Benefits />
      <Deliver />
      <WeSupport />
    </main>
  );
}
