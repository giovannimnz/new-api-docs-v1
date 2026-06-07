#!/usr/bin/env bash
set -euo pipefail

systemctl --user daemon-reload
systemctl --user restart atius-router-docs.service
systemctl --user status --no-pager atius-router-docs.service
