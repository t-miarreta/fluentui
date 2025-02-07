import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { DrawerFooterSlots, DrawerFooterState } from './DrawerFooter.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { tokens } from '@fluentui/react-theme';

export const drawerFooterClassNames: SlotClassNames<DrawerFooterSlots> = {
  root: 'fui-DrawerFooter',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalXXL, tokens.spacingVerticalXXL),

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: tokens.spacingHorizontalS,
  },
});

/**
 * Apply styling to the DrawerFooter slots based on the state
 */
export const useDrawerFooterStyles_unstable = (state: DrawerFooterState): DrawerFooterState => {
  const styles = useStyles();

  state.root.className = mergeClasses(drawerFooterClassNames.root, styles.root, state.root.className);

  return state;
};
