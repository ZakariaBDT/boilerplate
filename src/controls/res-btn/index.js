import { Button } from '@wordpress/components';
import { dispatch } from '@wordpress/data';
const ResBtn = ({ resMode, setAttributes }) => {
	return (
		<div className="res-btn">
			<Button
				variant={resMode === 'Desktop' ? 'primary' : 'secondary'}
				onClick={() => {
					setAttributes({ resMode: 'Desktop' });
					dispatch(
						'core/edit-post'
					).__experimentalSetPreviewDeviceType('Desktop');
				}}
				icon="desktop"
				title="Desktop"
			/>
			<Button
				variant={resMode === 'Tablet' ? 'primary' : 'secondary'}
				onClick={() => {
					setAttributes({ resMode: 'Tablet' });
					dispatch(
						'core/edit-post'
					).__experimentalSetPreviewDeviceType('Tablet');
				}}
				icon="tablet"
				title="Tablet"
			/>
			<Button
				variant={resMode === 'Mobile' ? 'primary' : 'secondary'}
				onClick={() => {
					setAttributes({ resMode: 'Mobile' });
					dispatch(
						'core/edit-post'
					).__experimentalSetPreviewDeviceType('Mobile');
				}}
				icon="smartphone"
				title="Mobile"
			/>
		</div>
	);
};

export default ResBtn;
