import { CssCompoTools } from "./tools.js";

export default function CssCompo<T extends keyof HTMLElementTagNameMap>(
  tagName: T
) {
  return (template: TemplateStringsArray, ...values: any[]) => {
    return CssCompoTools.create(tagName, template, ...values);
  };
}
