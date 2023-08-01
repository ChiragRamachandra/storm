# Storm Readme

## Getting Started

To get started, clone the repo and install using the command

```bash
npm install

```

to run the development server use the command

```bash
npm run dev

```

to run the tests

```bash
npm run test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Limitations

1. RESTful API endpoints to fetch data is not available or mentioned, have a placeholder present instead.
2. JSON file does not have status, key features, description and image of the product, made necessary adjustments as needed, and have left enough room in the code to pivot once the values are provided.
3. The UX design has a couple of flaws, which needs to be discussed with the design team. In mobile menu, the design does not mention what to do on click of the menu open.
4. Not sure where to multiselect, ideally you'd want a checkbox to keep track of selected items. Have implemented such that on click of anywhere in the row, it will be implemented. This is also problematic in mobile view as you will not be able to multiselect, but on click it would open up the modal.
