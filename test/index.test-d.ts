import { expectType } from "tsd";
import streamToString = require("..");

const stream = null as any as NodeJS.ReadableStream;

// test type exports
type CB = streamToString.Callback;

expectType<Promise<string>>(streamToString(stream));
expectType<Promise<string>>(streamToString(stream, "hex"));
expectType<Promise<string>>(
  streamToString(stream, (err, msg) => {
    expectType<Error | undefined>(err);
    expectType<string>(msg);
  })
);
expectType<Promise<string>>(
  streamToString(stream, "hex", (err, msg) => {
    expectType<Error | undefined>(err);
    expectType<string>(msg);
  })
);
