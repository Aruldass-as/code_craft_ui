# Code Craft UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Backend Requirements

This frontend uses a **single FastAPI backend** for all features:

| Features | Local URL | Deployed |
|----------|-----------|----------|
| OpenAI (chat, image, voice), Claude, Gemini, Perplexity, LlamaIndex, Fitness, Web Scrape, Docs Assist | `http://localhost:8000` | `fastapi-app-36j5.onrender.com` |

**For full functionality locally:**
- Run FastAPI: `cd fastapi_app && uvicorn main:app --reload --port 8000`

**Optional .env keys:** `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY` (or `GEMINI_API_KEY`), `PERPLEXITY_API_KEY` for respective AI features.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# code_craft_ui
