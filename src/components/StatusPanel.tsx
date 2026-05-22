import { characters } from '../data/characters'
import type { Affection } from '../types/game'

type StatusPanelProps = {
  affection: Affection
}

export function StatusPanel({ affection }: StatusPanelProps) {
  const loveInterests = characters.filter((character) => character.role === 'love-interest')

  return (
    <aside className="status-panel">
      <h2>호감도</h2>
      {loveInterests.map((character) => (
        <div className="status-panel__row" key={character.id}>
          <span>{character.name}</span>
          <strong>{affection[character.id] ?? 0}</strong>
        </div>
      ))}
    </aside>
  )
}
