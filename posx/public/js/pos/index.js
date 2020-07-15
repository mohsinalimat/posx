import fixed_batch_selection from './fixed_batch_selection';
import batch_price from './batch_price';
import xz_report from './xz_report';
import shortcuts from './shortcuts';
import disabled_write_off from './disabled_write_off';
import theme from './theme';
import editable_description from './editable_description';

// compose applies functions from right to left
// place extensions that need to run first in the end

export const pageOverrides = [
  theme,
  shortcuts,
  xz_report,
  batch_price,
  fixed_batch_selection,
  editable_description,
];

export const paymentOverrides = [disabled_write_off];
