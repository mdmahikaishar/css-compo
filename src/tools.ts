import { title } from "./utils/index.js";

const SANITIZE_CSS = new RegExp(/[\n\s]+/g);

export class CssCompoTools {
  static create(
    tagName: keyof HTMLElementTagNameMap,
    template: TemplateStringsArray,
    ...values: any[]
  ) {
    const rawData = String.raw(template, ...values);
    const styles = this.parse(rawData);

    return this.createElement(tagName, styles);
  }

  private static createElement<T extends keyof HTMLElementTagNameMap>(
    tagName: keyof HTMLElementTagNameMap,
    styles: Record<string, string>
  ) {
    const $ele = document.createElement(tagName);

    this.addStylies($ele, styles);

    return $ele as HTMLElementTagNameMap[T];
  }

  private static addStylies<T extends HTMLElement>(
    $ele: T,
    styles: Record<string, string>
  ) {
    Object.keys(styles).forEach(
      (key) => $ele.style[key as any] = styles[key]
    );
  }

  private static parse(rawCss: string) {
    return rawCss
      .replace(SANITIZE_CSS, "")
      .split(";")
      .reduce((acc, line) => {
        if (!line) return acc;

        let [key, value] = line.split(":");
        acc[this.sanitizeProperty(key)] = value;

        return acc;
      }, {} as Record<string, string>);
  }

  /**
   * sanitizeProperty
   * ---------------
   * @param name  "backgorund-color"
   * @returns "backgorundColor"
   */
  private static sanitizeProperty(name: string): string {
    return name
      .split("-")
      .map((word, i) => (i === 0 ? word : title(word)))
      .join("");
  }
}
