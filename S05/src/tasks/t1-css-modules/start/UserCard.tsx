import './UserCard.css';

export function UserCard({ name }: { name: string }) {
  return (
    <aside className="card">
      <p className="title">Покупатель</p>
      <strong>{name}</strong>
    </aside>
  );
}
