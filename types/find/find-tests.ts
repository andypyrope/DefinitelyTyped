import * as find from "find";

const stringPattern = ".d.ts";
const regexPattern = /ts(config|lint)\.json/;
const rootDir = ".";

const emptyCb = (): void => { };
const errorCb = (err: Error): void => { };
const stringArrayCallback = (paths: string[]): void => { };
const singleStringCb = (paths: string): void => { };

find.file(rootDir, stringArrayCallback); // $ExpectType AsyncFindStream
find.file(rootDir, stringArrayCallback).error(errorCb); // $ExpectType void
find.file(stringPattern, rootDir, stringArrayCallback); // $ExpectType AsyncFindStream
find.file(regexPattern, rootDir, stringArrayCallback);

find.fileSync(rootDir); // $ExpectType string[]
find.fileSync(stringPattern, rootDir); // $ExpectType string[]
find.fileSync(regexPattern, rootDir);

 // $ExpectType FindEachStream
find.eachFile(rootDir, singleStringCb)
    .end(emptyCb)
    .error(errorCb)
    .end(emptyCb);
find.eachFile(stringPattern, rootDir, singleStringCb); // $ExpectType FindEachStream
find.eachFile(regexPattern, rootDir, singleStringCb);

find.dir(rootDir, stringArrayCallback); // $ExpectType AsyncFindStream
find.dir(rootDir, stringArrayCallback).error(errorCb); // $ExpectType void
find.dir(stringPattern, rootDir, stringArrayCallback); // $ExpectType AsyncFindStream
find.dir(regexPattern, rootDir, stringArrayCallback);

find.dirSync(rootDir); // $ExpectType string[]
find.dirSync(stringPattern, rootDir); // $ExpectType string[]
find.dirSync(regexPattern, rootDir);

// $ExpectType FindEachStream
find.eachDir(rootDir, singleStringCb)
   .end(emptyCb)
   .error(errorCb)
   .end(emptyCb);
find.eachDir(stringPattern, rootDir, singleStringCb); // $ExpectType FindEachStream
find.eachDir(regexPattern, rootDir, singleStringCb);
