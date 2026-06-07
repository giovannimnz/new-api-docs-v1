---
title: Atius Router Docs Runtime
status: draft
date: 2026-06-07
---

# Atius Router Docs Runtime

## Canonical source

- `docs/atius-router-docs/` inside `router-ai-atius`
- Legacy standalone checkout `/home/ubuntu/docker/Atius/atius-router-docs` stays only as a migration source until the cutover finishes

## systemd user unit

- Unit file: `~/.config/systemd/user/atius-router-docs.service`
- Working directory: `/home/ubuntu/docker/Atius/router-ai-atius/docs/atius-router-docs`
- Runtime command: `bun run start -- -p 3003 -H 127.0.0.1`

## Commands

```bash
systemctl --user daemon-reload
systemctl --user enable --now atius-router-docs.service
systemctl --user restart atius-router-docs.service
systemctl --user status --no-pager atius-router-docs.service
```

## Build notes

- `bun install` must be run in the docs tree before `bun run start` if dependencies are missing.
- `bun run build` is the production path before switching away from dev runtime.
