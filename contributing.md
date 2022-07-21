# Contributing to droidconKe2022 Web

We'd love to accept your patches!
To contribute to _droidconKe2022_ simply open a pull request against the [dev branch](https://github.com/droidconKE/droidconKe2022Web/tree/dev)

To ensure you that your pull request is accepted:

1. Describe your changes in the pull request description.
2. Be consistent with the coding style.
3. Make commits of logical units
4. Write descriptive commit messages and not 2 worded commits.
5. Run lint checks `yarn lint` and fix all warnings and errors
6. For all colors and fonts, use provided color classes in `styles/global.css`. In case of addition, define the colors in `tailwind.config.js` and define both light and dark version for it

- For every color, bg-color, border etc, define it's dark version eg; `text-primary dark:text-primary border-accent dark:border-accent bg-white dark:bg-dark`
- For `white` color, use `dark:bg-dark` for backgrounds and `dark:text-white-dark` for colors and borders
- Use custom defined colors eg primary, secondary, accent, accent-2, secondary02 etc, don't use tailwindcss defined colors

7. Page responsiveness in a priority, _Tailwind CSS_ is used in the design
8. Always build with SSR in mind

N/B All the designs will be provided here: https://xd.adobe.com/view/09e7a508-167f-48ee-a2ef-6b907be8fd09-5cb4/

Dark theme designs - https://xd.adobe.com/view/c34af671-643b-4a33-8149-52474fa0b137-9619/

Old Repo https://github.com/droidconKE/droidconKe2020_web
