#!/bin/bash
# Fix EMFILE "too many open files" on macOS
ulimit -n 65536 2>/dev/null || ulimit -n 10240
exec ng serve --port 4200 "$@"
