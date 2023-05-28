By default, most modern browsers limit the minimum font size to 12px to ensure readability and accessibility. However, there are a few ways to make the browser support fonts smaller than 12px:

Use relative units: Instead of using pixels, use relative units such as em or rem to specify font sizes. These units are based on the size of the parent element or the root element, respectively, and can scale with the user's font size preferences.

Use the CSS font-size-adjust property: This property adjusts the x-height of fonts to ensure readability at smaller sizes. It works by specifying a value between 0 and 1000 that represents the aspect ratio of the font. For example, a value of 0.5 means that the font has a smaller x-height and can be used at smaller sizes.

Here's an example of how to use relative units to specify font sizes:

```css
body {
  font-size: 16px; /* Set a base font size */
}

p {
  font-size: 0.8rem; /* Set the font size to 80% of the root font size */
}
```

In this example, the body element has a base font size of 16px, and the p element has a font size of 0.8rem, which is 80% of the root font size. This allows the font size of the p element to scale with the user's fontsize preferences.

Now, let's explain the difference between em, px, and rem units:

em: This unit is based on the font size of the parent element. One em is equal to the font size of the parent element. For example, if the font size of the parent element is 16px, 1em is equal to 16px. If the font size of the parent element changes, the size of the element using em units will change as well.

px: This unit is based on the physical pixel of the screen. One pixel is equal to one dot on the screen. The size of an element using px units is fixed and will not change, regardless of the font size of the parent element.

rem: This unit is based on the root element (usually the html element). One rem is equal to the font size of the root element. For example, if the font size of the root element is 16px, 1rem is equal to 16px. The size of an element using rem units will change if the font size of the root element changes.

In summary, em units are relative to the font size of the parent element, px units are fixed and based on physical pixels, and rem units are relative to the font size of the root element. Using relative units such as em and rem can make it easier to create responsive designs that adapt to different screen sizes and user preferences.