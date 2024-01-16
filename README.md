# Css Compo (`CSS Component`)

Component based css with vanila javascript.

## Get Started

Install `Css Compo` to your project.

```bash
pnpm install css-compo
```

## Example

```ts
import css form "css-compo";

const div = css("div")`
    padding: 20px;
    background-color: teal;
    font-family: sans-serif;

`;
const p = css("p")`
    margin: 0;
    font-size: 5rem;
    font-weight: 700;
    background-color: red;
`;

p.innerText = "Css Compo";

div.append(p);

document.querySelector("body").append(div);
```