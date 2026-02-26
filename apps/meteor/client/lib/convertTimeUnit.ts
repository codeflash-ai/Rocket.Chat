const MS_PER_DAY = 86400000;
const MS_PER_HOUR = 3600000;
const MS_PER_MINUTE = 60000;
export enum TIMEUNIT {
	days = 'days',
	hours = 'hours',
	minutes = 'minutes',
}

export const isValidTimespan = (timespan: number): boolean => {
	// Number.isFinite returns false for NaN, so we can skip the separate NaN check
	if (!Number.isFinite(timespan) || timespan < 0) {
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
			return timespan / MS_PER_DAY;
		case TIMEUNIT.hours:
			return timespan / MS_PER_HOUR;
		case TIMEUNIT.minutes:
			return timespan / MS_PER_MINUTE;
		default:
			throw new Error('msToTimeUnit - invalid time unit');
	}
};
