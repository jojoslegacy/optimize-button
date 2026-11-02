declare module 'claude-code' {
  interface PluginState {
    'optimize-button': { isBusy: boolean; previous: string | null }
  }
}
