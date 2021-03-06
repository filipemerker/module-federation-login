import App from "./App.svelte";

const app = new App({
  target: document.querySelector("#svelte"),
  props: {
    name: "world",
  },
});

export const loadApp = (id) => {
  return new App({
    target: document.querySelector("#svelte"),
    props: { name: "world" },
  });
};

window.app = app;

export default app;
