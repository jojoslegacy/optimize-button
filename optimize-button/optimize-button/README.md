# optimize-button

Adds an "Optimize" button above the prompt box (Claude Code terminal and desktop surfaces) and an /optimize command. Press it and the draft in the prompt box is rewritten into a tighter, clearer prompt in place, with an Undo button until you submit. It makes one short Sonnet call at low effort per press.

## Install

In the Claude desktop app: click + next to the prompt box, then Plugins, Add marketplace with `<owner>/<repo>`, then Add plugin.

In a terminal Claude Code session:

```
/plugin install optimize-button --marketplace <owner>/<repo>
```

To try it from a local folder first: `claude --plugin-dir /path/to/optimize-button`
