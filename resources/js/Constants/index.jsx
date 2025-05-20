const BASE_CLASS =
  "flex items-center px-2 py-1 rounded-full text-xs shadow-md";

const COLOR_VARIANTS = {
  amber: {
    light: "bg-amber-500 border border-amber-500 dark:border-amber-600 dark:bg-amber-600",
  },
  blue: {
    light: "bg-blue-500 border border-blue-500 dark:border-blue-600 dark:bg-blue-600",
  },
  green: {
    light: "bg-green-200 border border-green-700 dark:border-green-600 dark:bg-green-600 text-black dark:text-white",
  },
  gray: {
    light: "bg-gray-600 border border-gray-600 dark:border-gray-600 dark:bg-gray-600",
  },
  red: {
    light: "bg-red-600 border border-red-600 dark:border-red-600 dark:bg-red-600",
  },
};

export const STATUS_COLOR_MAP = {
  pending: COLOR_VARIANTS.amber.light,
  in_progress: COLOR_VARIANTS.blue.light,
  completed: COLOR_VARIANTS.green.light,
};

export const PROJECT_STATUS_CLASS_MAP = {
  pending: `${STATUS_COLOR_MAP.pending} ${BASE_CLASS}`,
  in_progress: `${STATUS_COLOR_MAP.in_progress} ${BASE_CLASS}`,
  completed: `${STATUS_COLOR_MAP.completed} ${BASE_CLASS}`,
};

export const TASK_STATUS_CLASS_MAP = { ...PROJECT_STATUS_CLASS_MAP };

export const PROJECT_STATUS_TEXT_MAP = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
};

export const TASK_STATUS_TEXT_MAP = { ...PROJECT_STATUS_TEXT_MAP };

export const TASK_PRIORITY_CLASS_MAP = {
  low: `${COLOR_VARIANTS.gray.light} ${BASE_CLASS}`,
  medium: `${COLOR_VARIANTS.amber.light} ${BASE_CLASS}`,
  high: `${COLOR_VARIANTS.red.light} ${BASE_CLASS}`,
};

export const TASK_PRIORITY_TEXT_MAP = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
