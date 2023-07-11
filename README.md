To reproduce the issue run:

npm run build && npm start

In the console you will see that the navbar rerenders on every route change. If you run the app in dev mode with npm run dev everything works fine, the navbar component renders only once at the beginning.
