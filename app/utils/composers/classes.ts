export default function composeClasses<ClassKey extends string = string>(
    // slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>,
    // getUtilityClass: (slot: string) => string,
    classes: Record<string, boolean | undefined | null>,
    // ): Record<ClassKey, string> {
  ): string {
    // const output: Record<ClassKey, string> = {} as any;
    let output: string[] = [];

    Object.keys(classes).forEach(
      // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
      // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
      (slot: ClassKey) => {
        if (classes[slot] === true) {
            output.push(slot)
        };
      },
    );
  
    return output.join(' ');
  };

  /*
  https://github.com/mui/material-ui/blob/master/packages/mui-utils/src/composeClasses/composeClasses.test.ts
  
export default function composeClasses<ClassKey extends string>(
  slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>,
  getUtilityClass: (slot: string) => string,
  classes: Record<string, string> | undefined = undefined,
): Record<ClassKey, string> {
  const output: Record<ClassKey, string> = {} as any;

  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot: ClassKey) => {
      output[slot] = slots[slot]
        .reduce((acc, key) => {
          if (key) {
            const utilityClass = getUtilityClass(key);
            if (utilityClass !== '') {
              acc.push(utilityClass);
            }
            if (classes && classes[key]) {
              acc.push(classes[key]);
            }
          }
          return acc;
        }, [] as string[])
        .join(' ');
    },
  );

  return output;
}
  */