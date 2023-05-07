function addResModeAttribute(settings, name) {
	console.log(settings);
	// Add the `resMode` attribute to all blocks under the `bdt-blocks` category
	if (name.startsWith('bdt/')) {
		settings.attributes = {
			...settings.attributes,
			resMode: {
				type: 'string',
				default: 'default',
			},
		};
	}

	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'my-plugin/add-resMode-attribute',
	addResModeAttribute
);
