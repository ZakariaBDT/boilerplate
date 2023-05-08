/**
 * WordPress dependencies
 */
import { ColorPicker } from '@wordpress/components';

const ColorControl = ({ color, attrName, setAttributes }) => {
	return (
		<div className="color-control">
			<ColorPicker
				color={color}
				onChangeComplete={(value) =>
					setAttributes({
						[attrName]: value.hex,
					})
				}
				disableAlpha
			/>
		</div>
	);
};
export default ColorControl;
