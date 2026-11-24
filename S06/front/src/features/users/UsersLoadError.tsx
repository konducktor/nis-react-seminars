interface UsersLoadErrorProps {
  errorMessage: string
  canRetry: boolean
  onRetry: () => void
}

export default function UsersLoadError({ errorMessage, canRetry, onRetry }: UsersLoadErrorProps) {
  return (
    <div>
      <p>Не удалось загрузить участников: {errorMessage}</p>
      {canRetry && <button onClick={onRetry}>Повторить</button>}
    </div>
  )
}
