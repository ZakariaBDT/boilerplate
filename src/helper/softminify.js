// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
export const softMinifyCssStrings = (cssString = ' ') =>
	cssString
		.replace(/\s+/g, ' ')
		.replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
