import { ExpoSection } from "../Section";

function SparkIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function ButtonsSection() {
  return (
    <ExpoSection
      title="Buttons"
      description="Primary actions, secondary actions, ghost buttons, destructive actions, sizes, and icon-only actions."
    >
      <div className="expo-stack">
        <div className="expo-row">
          <button className="btn btn-primary" type="button">Primary</button>
          <button className="btn btn-secondary" type="button">Secondary</button>
          <button className="btn btn-ghost" type="button">Ghost</button>
          <button className="btn btn-danger" type="button">Danger</button>
          <button className="btn btn-primary" type="button" disabled>Disabled</button>
        </div>
        <div className="expo-row">
          <button className="btn btn-primary btn-xs" type="button">Extra small</button>
          <button className="btn btn-primary btn-sm" type="button">Small</button>
          <button className="btn btn-primary" type="button">Default</button>
          <button className="btn btn-primary btn-lg" type="button">Large</button>
          <button className="btn btn-secondary btn-icon" type="button" aria-label="Spark"><SparkIcon /></button>
          <button className="btn btn-ghost btn-sm btn-icon" type="button" aria-label="Settings"><SettingsIcon /></button>
        </div>
      </div>
    </ExpoSection>
  );
}
