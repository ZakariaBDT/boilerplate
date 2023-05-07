// add resMode attributes to all blocks
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'bdt/attribute/resMode',
	function (settings, name) {
		if (name.includes('bdt/')) {
			settings.attributes = {
				...settings.attributes,
				resMode: {
					type: 'string',
					default: 'Desktop',
				},
			};
		}
		return settings;
	}
);
