/// <reference types="node" />

export = streamToString;

declare function streamToString(
  stream: NodeJS.ReadableStream,
  cb?: streamToString.Callback
): Promise<string>;
declare function streamToString(
  stream: NodeJS.ReadableStream,
  enc: string,
  cb?: streamToString.Callback
): Promise<string>;

declare namespace streamToString {
  type Callback = (error: Error | undefined, str: string) => void;
}
