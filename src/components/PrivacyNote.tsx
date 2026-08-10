export default function PrivacyNote() {
  return (
    <div className="mt-8 rounded-lg border border-l-4 border-l-primary bg-card px-4 py-3.5">
      <strong className="block text-sm mb-1">Your data stays on this device.</strong>
      <p className="text-sm text-muted-foreground leading-relaxed m-0">
        Everything you enter here is stored only in this browser's local
        storage. Nothing is sent to a server. Clearing your browser data,
        or switching to a different browser or device, will erase it —
        there's no account and no sync.
      </p>
    </div>
  );
}