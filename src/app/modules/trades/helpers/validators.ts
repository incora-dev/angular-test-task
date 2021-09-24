import { FormGroup } from "@angular/forms";

export const DateRangeValidator = (fg: FormGroup) => {
  const start = fg.get('entryDate')?.value;
  const end = fg.get('exitDate')?.value;
  return start !== null && end !== null && start < end
    ? null
    : { range: true };
};
