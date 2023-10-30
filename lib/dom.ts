import { isUndefined } from "./utils";

export function getPreview<T extends File>(
  file: T | undefined,
  onComplete: (dataUrl?: string) => void
) {
  if (isUndefined(file)) {
    onComplete(undefined);
    return () => {};
  }

  const onLoadEnd = (
    reader: FileReader,
    onComplete: (dataUrl?: string) => void
  ) => {
    return () => {
      const result = reader.result;
      if (result) {
        onComplete(result as string);
      } else {
        onComplete(undefined);
      }
    };
  };

  const reader = new FileReader();
  const handleLoadEnd = onLoadEnd(reader, onComplete);
  reader.addEventListener("loadend", handleLoadEnd);
  reader.readAsDataURL(file);

  return () => reader.removeEventListener("loadend", handleLoadEnd);
}

export function addEvent<
  TTarget extends EventTarget,
  TListener extends (...events: any[]) => any,
  TEvent extends string = string
>({
  target,
  event,
  listener,
  options,
}: {
  target: TTarget;
  event: TEvent;
  listener: TListener;
  options?: boolean | AddEventListenerOptions;
}) {
  target.addEventListener(event, listener, options);

  return () => {
    target.removeEventListener(event, listener, options);
  };
}
