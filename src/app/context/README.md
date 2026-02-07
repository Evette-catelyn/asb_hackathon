# Context and State Management

## UndoRedoContext

The `UndoRedoContext` provides undo/redo functionality for any component that needs it.

### Usage Example:

```tsx
import { UndoRedoProvider, useUndoRedo } from './context/UndoRedoContext';

// Wrap your component with the provider
function MyComponent() {
  return (
    <UndoRedoProvider initialState={{ formData: {} }}>
      <FormComponent />
    </UndoRedoProvider>
  );
}

// Use the hook in child components
function FormComponent() {
  const { state, setState, undo, redo, canUndo, canRedo } = useUndoRedo();
  
  const handleChange = (newData) => {
    setState({ formData: newData });
  };
  
  return (
    <div>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
    </div>
  );
}
```

### Keyboard Shortcuts

The `useKeyboardShortcuts` hook enables global keyboard shortcuts:

- `Ctrl+Z` / `Cmd+Z` - Undo
- `Ctrl+Shift+Z` / `Cmd+Shift+Z` or `Ctrl+Y` / `Cmd+Y` - Redo

Currently implemented in the Dashboard with toast notifications. Can be extended to work with form data, profile edits, and other state changes.
