export enum TIMEUNIT {
	days = 'days',
	hours = 'hours',
	minutes = 'minutes',
}

export const isValidTimespan = (timespan: number): boolean => {
	// Fast-path type check to preserve original Number.isFinite behavior for non-number inputs
	if (typeof timespan !== 'number') {
		return false;
	}

	// NaN check without calling Number.isNaN
	if (timespan !== timespan) {
		return false;
	}

	// Infinity checks without calling Number.isFinite
	if (timespan === Infinity || timespan === -Infinity) {
		return false;
	}

	if (timespan < 0) {
		return false;
	}

	return true;
};

export const timeUnitToMs = (unit: TIMEUNIT, timespan: number) => {
	if (!isValidTimespan(timespan)) {
		throw new Error(`timeUnitToMs - invalid timespan:${timespan}`);
	}

	switch (unit) {
		case TIMEUNIT.days:
			return timespan * 24 * 60 * 60 * 1000;

		case TIMEUNIT.hours:
			return timespan * 60 * 60 * 1000;

		case TIMEUNIT.minutes:
			return timespan * 60 * 1000;

		default:
			throw new Error('timeUnitToMs - invalid time unit');
	}
};

export const msToTimeUnit = (unit: TIMEUNIT, timespan: number) => {
	if (!isValidTimespan(timespan)) {
		throw new Error(`msToTimeUnit - invalid timespan:${timespan}`);
	}

	switch (unit) {
		case TIMEUNIT.days:
			return timespan / 24 / 60 / 60 / 1000;
		case TIMEUNIT.hours:
			return timespan / 60 / 60 / 1000;
		case TIMEUNIT.minutes:
			return timespan / 60 / 1000;
		default:
			throw new Error('msToTimeUnit - invalid time unit');
	}
};
