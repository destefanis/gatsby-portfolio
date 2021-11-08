<h1 align="center">
  Personal Product Design Portfolio
</h1>

### [View my portfolio](https://www.figma.com/community/file/1039349863511621085/Product-Design-Portfolio)

## View the design
This portfolio is open-source and so is the design on Figma.
[View the design on Figma Community](https://www.figma.com/community/file/1039349863511621085)

## How to use

1.  **Install Gatsby**

    Visit the official [Gatsby documentation](https://www.gatsbyjs.com/docs/quick-start/) for installation instructions. Note: This site uses Gatsby 2.22 (not 3 or 4) so you may need to install a specific version.

2.  **Clone this repo**

    Once you have Gatsby installed, clone this repo locally, then navigate back to this folder in your command line and run:

    ```shell
    npm run develop
    ```

3.  **Open the code and start customizing!**

    * The site is now running at http://localhost:8000!
    * Edit `src/pages/index.js` to see your site update in real-time! 
    * This code is far from perfect but feel free to remix and use for your own portfolio. Hopefully it's a valuable learning tool.
    * All the project pages can be found in the pages folder.
    * The entire page transition lives in the `Transition.js` component.
    * I had to build a `ClientOnly.js` component to solve for some strange server side rendering bugs  (data hydration) when it cames to animations.
    * This site uses Gatsby + Framer Motion and Netlify for Hosting.
