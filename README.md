⚠ In order to build Docker images for `backend` and `jobs/workspace-trial`, pass monorepo **ROOT DIRECTORY** as `docker build` context, NOT `./backend/`.

For example, in order to build `backend` image, run this command from monorepo root dir:

```bash
docker build -t backend -f ./backend/Dockerfile .
```
