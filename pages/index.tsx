import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bienvenue sur AgoraPro</h1>
      <ul style={{ marginTop: '1rem' }}>
        <li><Link href="/login">Se connecter</Link></li>
        <li><Link href="/admin">Espace Admin</Link></li>
        <li><Link href="/nouveau-debat">Créer un nouveau débat</Link></li>
        <li><Link href="/profil">Voir le profil</Link></li>
      </ul>
    </div>
  );
}
