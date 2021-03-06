import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * Get Latest Screenshots. Gets the most recent screenshots from the camera roll.
 *
 * ```js
 * getLatestScreenshots({
 *   count: 1,
 * });
 * ```
 */
const getLatestScreenshots = (
  options: {
    /** The number of screenshots to get */
    count?: number,
  },
): WFWorkflowAction => {
  const {
    count = 1,
  } = options;

  return {
    WFWorkflowActionIdentifier: 'is.workflow.actions.getlastscreenshot',
    WFWorkflowActionParameters: {
      WFGetLatestPhotoCount: count,
    },
  };
};

export default withActionOutput(getLatestScreenshots);
