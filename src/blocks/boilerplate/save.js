import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { uniqueId, title, description } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId}`,
			})}
		>
			<RichText.Content
				tagName="h2"
				value={title}
				className="bdt-title"
			/>
			<RichText.Content
				tagName="p"
				className="bdt-description"
				value={description}
			/>
		</div>
	);
}
