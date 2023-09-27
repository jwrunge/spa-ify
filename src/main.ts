import App from './App.svelte';

function registerPart(targetElement: Element | string) {
  const target = typeof targetElement === "string" ? 
                  document.querySelector(targetElement) :
                  targetElement;
  const selector = typeof targetElement === "string" ? targetElement : targetElement.id;

  if(!target) {
    throw new Error(`Could not find target element ${selector}`);
  }

  const app = new App({
    target: target || document.body
  });

  return app;
}

document.body.innerHTML = "";
registerPart(document.body);