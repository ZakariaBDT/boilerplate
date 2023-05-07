/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';

const Inspector = ({ attributes, setAttributes }) => {
	const { titleColor, descriptionColor } = attributes;

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<PanelBody
					title={__('Title', 'bdt-blocks')}
					initialOpen={false}
				>
					<ColorPicker
						color={titleColor}
						onChangeComplete={(value) =>
							setAttributes({ titleColor: value.hex })
						}
						disableAlpha
					/>
				</PanelBody>
				<PanelBody
					title={__('Description', 'bdt-blocks')}
					initialOpen={false}
				>
					<ColorPicker
						color={descriptionColor}
						onChangeComplete={(value) =>
							setAttributes({ descriptionColor: value.hex })
						}
						disableAlpha
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
