import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
};

export default attributes;
