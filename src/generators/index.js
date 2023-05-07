export const generateResRangleControlAttributes = ({
	controlName,
	defaults = {},
}) => {
	const {
		[`${controlName}DeskRange`]: deskRange,
		[`${controlName}TabRange`]: tabRange,
		[`${controlName}MobRange`]: mobRange,
	} = defaults;

	return {
		[`${controlName}DeskRange`]: {
			type: 'number',
			default: deskRange,
		},
		[`${controlName}TabRange`]: {
			type: 'number',
			default: tabRange,
		},
		[`${controlName}MobRange`]: {
			type: 'number',
			default: mobRange,
		},
	};
};
